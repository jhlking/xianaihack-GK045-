---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3aa19578-527e-49cf-b886-b3a2c48de317'
  PropagateID: '3aa19578-527e-49cf-b886-b3a2c48de317'
  ReservedCode1: 'd2eb0795-6c1d-4657-ab8c-356529c42358'
  ReservedCode2: 'd2eb0795-6c1d-4657-ab8c-356529c42358'
---

# WonderForge 开发指南

> 面向开发者：架构、核心模块、数据流、扩展方法。先读 [README](../README.md) 了解项目定位。

## 目录

1. [技术栈与架构](#1-技术栈与架构)
2. [目录职责](#2-目录职责)
3. [核心数据流：组合生成](#3-核心数据流组合生成)
4. [核心模块详解](#4-核心模块详解)
5. [前端路由与状态](#5-前端路由与状态)
6. [如何扩展](#6-如何扩展)
7. [常见坑与约定](#7-常见坑与约定)
8. [质量与命令](#8-质量与命令)

---

## 1. 技术栈与架构

| 层 | 技术 | 说明 |
|---|---|---|
| 前端 | React 18 + Vite 5 + React Router 6 + Three.js | HashRouter 路由，CSS 文件分主题 |
| 后端 | Node.js ≥18 + Express 4 + dotenv + cors | ESM（`"type": "module"`），原生 fetch |
| 数据 | JSON 文件 | 奇物库 `data/items.json`、社区 `data/community.json`（运行时生成） |
| AI | 小云雀 XYQ OpenAPI | 方案生成 + 图片生成，同步轮询 |

分层关系：

```
web/（React 页面）
  │  fetch('/api/...')  通过 Vite 代理（dev）或反代/同源（prod）
  ▼
server/（Express）
  ├── index.mjs     路由 + 静态服务 + SPA fallback
  ├── forge.mjs     组合业务（Prompt / 轮询 / 图片缓存）
  ├── community.mjs 社区业务（JSON 持久化 / 上传）
  └── xyq.mjs       小云雀 API 适配层（唯一网络出口）
```

**关键设计原则：**

1. 小云雀 Key 只存在于 `server/.env`，前端永远接触不到
2. 图片 URL 有时效 → 生成后立即落地到 `server/public/generated/`，返回本地路径
3. SPA fallback：所有非 API、非文件扩展名的 GET 返回 `index.html`，且 HTML 入口禁止缓存
4. 社区数据用「写临时文件 + rename」保证原子性，避免写坏 JSON

---

## 2. 目录职责

```
data/
  items.json            # 奇物库数据源（只读，后端读取）
  community.json        # 社区数据（运行时由 community.mjs 维护，不入库）
server/
  index.mjs             # Express 入口：路由注册顺序 = API 先、静态后
  forge.mjs             # 组合引擎：buildPrompt / runCombination / cacheImages
  xyq.mjs               # 小云雀封装：submitRun / getThread / runState / extractEntries
  community.mjs         # 社区 API 注册：GET+POST /api/community、help、uploads
  .env.example          # XYQ_ACCESS_KEY / PORT 样例
  public/
    generated/          # 生成的图片缓存（gitignore）
    uploads/            # 社区图纸上传（gitignore）
    */                 # 各旧物的效果图素材（plain/both/部件组合 4 图一组）
web/
  src/
    main.jsx            # HashRouter 路由表（唯一路由入口）
    App.jsx             # /demos 3D 演示大厅
    pages/
      Combiner.jsx       # /combine 搭配工作台（选物+生成+历史）
      Workshop.jsx       # /combine/:slug 明星组合工作台（图片型 + 3D 型）
      Community.jsx      # /community 社区
      DemoPages.jsx      # /demo/* Three.js demo 容器 + useDemo hook
    demo/
      base.js           # Three.js 场景基座
      phone.js / comb.js / ward.js / models.js  # 三个 demo 的场景构建
    workshops-data.js   # 工作台元数据（WK_ROUTE / WORKSHOP_3D / SLUG_OF）
    *.css               # 主题与页面样式（wf-theme / workshop / demos / styles）
```

---

## 3. 核心数据流：组合生成

```
用户选择（daily/hardware/ai IDs + idea）
        │
        ▼
POST /api/combine  ──▶ forge.buildPrompt(selection)
                               │  组装中文 Prompt（物品/部件/模组/期望）
                               ▼
                          xyq.submitRun('', message)   ← 新会话提交
                               │  { thread_id, run_id }
                               ▼
                          pollUntilDone(thread_id, run_id)
                               │  每 10s 轮询，最多 8 分钟
                               │  状态：0/1/2 继续、3 成功、4 失败、5 取消
                               ▼
                    parseResult(text)  → 结构化 JSON 方案
                               │
                               ▼
                    有图？ ──否──▶ 用 result.image_prompt 在同一会话补一轮出图
                     │
                     ▼
              cacheImages(urls)
               │  下载→按 MIME 存为 /generated/<uuid>.png|jpg|webp
               │  超 12MB 或下载失败 → 保留原外链
               ▼
        响应 { thread_id, run_id, web_thread_link, result, image_urls }
```

**Prompt 结构（forge.mjs buildPrompt）：**

```
你是「万物改造工坊」的新产品设计师。请把下面这些日常物品、功能部件和 AI 模组组合成一件有意义的新产品。
要求：1) 起有记忆点的中文名 2) 80 字内介绍 3) 核心玩法 2-3 条 4) 材料清单 5) 组装步骤 3-5 步
6) 生成一张照片级效果图（重点材质、光效与发光质感，无文字水印）。
请先用 JSON 回复：{"name","intro","play","materials","steps","image_prompt"}

日常物品：xxx（描述）、…
功能部件：xxx（描述）、…
AI 模组：xxx（描述）、…
用户期望：<idea 或「未填写，请自由发挥」>
```

**兜底补图**：若第一轮没有返回图片，会从 `image_prompt` 字段构造出图指令，在同一线程发起第二轮。

---

## 4. 核心模块详解

### 4.1 `server/xyq.mjs` — 小云雀适配层

| 导出 | 作用 |
|---|---|
| `submitRun(threadId, message, assetIds)` | 提交一次运行（threadId 为空表示新会话） |
| `getThread(threadId, runId, afterSeq)` | 拉取线程增量 |
| `runState(run)` | 提取运行状态码 |
| `extractEntries(run)` | 提取 message / artifact 条目 |
| `collectText(entries)` | 拼接 assistant 文本 |
| `collectImageUrls(entries)` | 深度遍历提取图片 URL（去重） |

实现注意：所有内容条目 `data` 是 JSON 字符串，需先 `decodeItem` 再取 `text` / `url`。

### 4.2 `server/forge.mjs` — 组合引擎

- `buildPrompt(selection)`：从 `items.json` 反查名称与描述，组装 Prompt
- `cacheImages(urls)`：下载并落地；MIME 映射 png/jpg/webp；>12MB 或异常回退原链
- `runCombination(selection, onTick)`：一次完整「方案 + 图片」链路

### 4.3 `server/community.mjs` — 社区

- 数据文件不存在 → 返回种子数据；新构想 unshift 到最前
- 原子写：`dataFile.<uuid>.tmp` 写入后 rename
- 上传：`express.raw`（octet-stream，20MB 上限），扩展名白名单，落盘 `public/uploads/<uuid>.<ext>`，文件名为 `X-File-Name` 头（URL 编码）

### 4.4 `server/index.mjs` — 入口

- **路由顺序敏感**：API 先注册，静态文件后注册；带扩展名的 GET 未命中 → 404（绝不让 `index.html` 冒充 JS/CSS，避免旧缓存 hash 请求导致页面崩溃）
- `GET /api/health` 返回 `key_configured`，用于快速排障

### 4.5 `web/src/pages/Combiner.jsx` — 搭配工作台

- localStorage 键：`wonder-forge:combiner:draft`（草稿）、`wonder-forge:combiner:history`（历史，最多 20 条）
- 结果渲染：`result.result` 结构化方案 + `result.image_urls[0]` 首图 + 视频预留位 + 会话外链

---

## 5. 前端路由与状态

| 路由 | 组件 | 说明 |
|---|---|---|
| `/`、`/combine` | Combiner | 搭配工作台 |
| `/combine/:slug` | Workshop | 明星组合工作台（`workshops-data.js` 定义） |
| `/demos` | App | 演示大厅 |
| `/demo/phone` / `/demo/comb` / `/demo/ward` | DemoPages | Three.js 演示 |
| `/community` | Community | 社区 |

- 状态管理：无 Redux/Pinia，全部组件内 `useState` + 少量 `useEffect`；跨页传递走 localStorage 草稿
- 后端地址：开发时靠 `vite.config.js` proxy（`/api`、`/generated` → 8787）

---

## 6. 如何扩展

### 6.1 新增一件奇物

编辑 `data/items.json` 对应分类追加一项：

```json
{ "id": "di-51", "name": "老手风琴", "desc": "会出声的老手风琴", "tags": ["音乐", "机械", "家传"] }
```

保存即生效（后端每次启动/请求都重新读取文件），前端下拉框自动出现。

### 6.2 新增一个明星组合工作台

1. 在 `web/src/workshops-data.js` 的 `WORKSHOPS` 数组加一项：`slug`、物品（`el`）、两个部件（`parts`）、两个 AI 模组（`mods`）、4 张效果图路径（`shots.plain/k0/k1/both`）
2. 效果图放到 `server/public/<slug>/`（与命名规范一致）
3. 若要出现在「搭配工作间」卡片上，把 `SLUG_OF[物品id]` 映射到该 slug

### 6.3 新增一个 3D demo

1. 在 `web/src/demo/` 新建场景构建函数（参考 `phone.js`，接收 canvas 与容器的 `buildXxxScene`）
2. 在 `DemoPages.jsx` 的 DEMOS 数组中注册路由与场景元数据
3. 在 `Workshop.jsx` 的 `DEMO_META` 加对应提示文案（3D 型工作台复用）

### 6.4 新增社区助力类型

1. `web/src/pages/Community.jsx`：`HELP_TYPES` 数组加一项
2. `server/community.mjs`：`['加模组','改 3D 图纸','提方案','供物料']` 白名单同步新增

---

## 7. 常见坑与约定

| 注意点 | 说明 |
|---|---|
| 静态目录顺序 | 前端构建产物会覆盖 `server/public/`，`generated/`、`uploads/` 不在产物内，勿删 |
| 图片缓存目录 | 已 gitignore；生产上若多实例共享，应改用对象存储 |
| `data/community.json` | 运行时生成，gitignore，勿提交 |
| 禁止在仓库提交 `.env` | 只提交 `.env.example` |
| 小云雀 8 分钟超时 | `pollUntilDone` 硬上限；前端按钮文案同步提示 |
| 中文文件名 | bat/命令行注意编码；上传文件名走 URL 编码的 `X-File-Name` |

---

## 8. 质量与命令

```powershell
# 安装
npm run setup:server   # npm --prefix server install
npm run setup:web      # npm --prefix web install

# 开发
npm run dev:server     # 后端 8787
npm run dev:web        # 前端 5173

# 构建前端产物（输出到 web/dist）
npm run build:web
```

手动冒烟清单：

- [ ] `GET /api/health` → `key_configured: true`
- [ ] `GET /api/items` → 三个分类各 50 件
- [ ] 前端选物 → 生成 → 出现方案卡片与效果图
- [ ] 社区发布构想 → 助力 → 上传图纸 → 列表更新
- [ ] 刷新页面草稿仍在；清空历史可清空
- [ ] 生产构建后 `server` 直接访问 `http://<host>:8787` 首页可用（SPA fallback 生效）

> AI生成