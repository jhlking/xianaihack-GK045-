---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b6e87251-f55a-4638-a91e-823ec9dcf1ea'
  PropagateID: 'b6e87251-f55a-4638-a91e-823ec9dcf1ea'
  ReservedCode1: '9dba6ad9-765a-4621-b829-4d84c0573dc0'
  ReservedCode2: '9dba6ad9-765a-4621-b829-4d84c0573dc0'
---

# 万物改造工坊 WonderForge

> 把现实功能部件与 AI 模组装进日常物品，AI 推理出新产品方案并生成照片级效果图（含发光质感）。

WonderForge 是一个「旧物 × AI」创意改造平台：从奇物库中挑选一件有故事的日常物品，搭配功能部件与 AI 模组，写下你的期待，AI 会为你推理出一份完整的新产品方案——产品名、介绍、核心玩法、材料清单、组装步骤，以及一张照片级效果图。

项目诞生于 48 小时黑客松，定位为「温柔的科技」：让原本有意义的事物更加有意义，让本该是遗憾的事物不再无能为力。

---

## 功能亮点

- **奇物库 150 件**：日常物品（50）/ 功能部件（50）/ AI 模组（50），覆盖发光、发声、感知、连接、情感陪伴等方向
- **一键生成产品方案**：选物 + 期望 → AI 输出产品名、介绍、玩法、材料、组装步骤与照片级效果图
- **效果图本地缓存**：小云雀生成图片自动落地到本地，链接永久可用，不依赖临时外链
- **3D 明星演示**：时光电话、声纹梳、心愿病房三个 Three.js 交互 demo
- **社区共创**：发起构想、四类助力（加模组 / 改 3D 图纸 / 提方案 / 供物料）、3D 图纸上传
- **草稿与记录自动保存**：组合草稿、生成历史保存在浏览器本地，刷新不丢失
- **Windows 一键启动**：双击 `启动服务器.bat` 即可运行

---

## 架构总览

```
┌──────────────────────────────┐      ┌──────────────────────────────┐
│          浏览器 (web/)        │      │         服务端 (server/)       │
│  React + Vite + Three.js      │ ───▶ │  Express + 小云雀 XYQ 封装     │
│  /api 与 /generated 走代理     │      │  /api/items /api/combine      │
│                              │ ◀─── │  /api/community /api/uploads  │
└──────────────────────────────┘      └──────────────┬───────────────┘
                                                     │
                                         ┌───────────▼───────────┐
                                         │  小云雀 AI（XYQ OpenAPI）│
                                         │  方案生成 + 图片生成      │
                                         └───────────────────────┘
```

- 前端通过 Vite 开发代理将 `/api`、`/generated` 转发到后端（8787）
- 后端负责保管小云雀 Key、组装 Prompt、提交任务、轮询结果、缓存图片
- 生产环境可直接用后端托管前端构建产物（SPA fallback 已内置）

---

## 目录结构

```
wonder-forge/
├── data/
│   └── items.json          # 奇物库：日常物品 / 功能部件 / AI 模组 各 50 件
├── server/                 # Node + Express 后端
│   ├── index.mjs           # 入口：API 路由、静态服务、SPA fallback
│   ├── forge.mjs           # 组合逻辑：Prompt 构建、任务轮询、图片缓存
│   ├── xyq.mjs             # 小云雀 OpenAPI 封装
│   ├── community.mjs       # 社区 API（构想 / 助力 / 图纸上传）
│   ├── .env.example        # 环境变量样例（复制为 .env 并填入 Key）
│   └── public/             # 静态资源 + 生成的图片（generated/）
├── web/                    # React + Vite 前端
│   ├── src/pages/          # Combiner / Workshop / Community / DemoPages
│   ├── src/demo/           # Three.js 交互 demo（phone / comb / ward）
│   └── vite.config.js      # 开发代理配置
├── package.json            # 根级 npm scripts（一键安装 / 启动 / 构建）
├── 启动服务器.bat           # Windows 一键启动脚本
└── docs/                   # 使用手册、API、开发、部署文档
```

---

## 快速开始

前置要求：Node.js ≥ 18。

**1. 配置小云雀 Key**

```powershell
cd server
copy .env.example .env   # Windows
# 或 Linux/macOS: cp .env.example .env
```

编辑 `server/.env`，将 `XYQ_ACCESS_KEY` 改为你自己的 Key。

**2. 安装依赖并启动**

方式 A —— Windows 一键启动（仅后端，配合前端另开终端）：

```powershell
# 后端
启动服务器.bat

# 另开终端：前端
cd web && npm install && npm run dev
```

方式 B —— 手动双终端：

```powershell
# 终端 1
cd server && npm install && npm run dev     # 后端 http://localhost:8787

# 终端 2
cd web && npm install && npm run dev         # 前端 http://localhost:5173
```

方式 C — 根目录 npm scripts：

```powershell
npm run setup:server   # 安装后端依赖
npm run setup:web      # 安装前端依赖
npm run dev:server     # 启动后端
npm run dev:web        # 启动前端
```

**3. 打开浏览器**

访问 `http://localhost:5173/#/combine`，开始搭配旧物与 AI 模组。

> 完整图文教程见 [START-HERE.md](./START-HERE.md) 与 [docs/USER-GUIDE.md](./docs/USER-GUIDE.md)。

---

## 页面一览

| 路由 | 页面 | 说明 |
|---|---|---|
| `#/`、`#/combine` | 搭配工作间 | 选物组合、生成方案、历史记录 |
| `#/combine/:slug` | 明星组合工作台 | 预置组合的生成演示 |
| `#/demos` | 3D 演示大厅 | 三件明星组合入口 |
| `#/demo/phone` | 时光电话 | 复古电话机 × AI 声音模组 |
| `#/demo/comb` | 声纹梳 | 梳子 × 声音录制模组 |
| `#/demo/ward` | 心愿病房 | AI 视频 × 声音 × 信息提取 |
| `#/community` | 社区 | 发起构想、助力、上传图纸 |

---

## 文档导航

- [START-HERE.md](./START-HERE.md) — 5 分钟上手
- [docs/USER-GUIDE.md](./docs/USER-GUIDE.md) — 完整使用手册
- [docs/API.md](./docs/API.md) — 后端接口文档
- [docs/DEVELOPER.md](./docs/DEVELOPER.md) — 开发者指南
- [docs/DEPLOY.md](./docs/DEPLOY.md) — 部署指南

---

## 常见问题（FAQ）

**Q：打开页面提示「无法加载奇物库」？**
A：后端（8787）未启动或端口被占用。先启动 server 再刷新页面。

**Q：点击「生成产品方案」后一直转圈？**
A：生成通常需要 1~3 分钟，最长 8 分钟，属正常等待；若超时报错，请检查 `server/.env` 中 `XYQ_ACCESS_KEY` 是否正确，以及本机能否访问小云雀 API。

**Q：生成结果没有效果图？**
A：系统会自动尝试第二轮补图；仍无图时，会在结果页展示占位提示，可重新生成。

**Q：组合草稿和记录存在哪里？**
A：浏览器 localStorage（键 `wonder-forge:combiner:*`），换浏览器/清缓存会丢失。

**Q：社区数据存在哪里？**
A：`data/community.json`（首次运行时生成种子数据）；该文件已被 `.gitignore` 忽略，不会提交到仓库。

---

## 路线图（二期）

- [ ] 视频生成接入（主链路已预留视频插入位）
- [ ] 社区真实后端与账号体系
- [ ] 3D 打印图纸产出（已支持图纸上传与预览）
- [ ] 触感硬件材料包

---

## 致谢与声明

- 前端：React 18 + Vite 5 + React Router 6 + Three.js
- 后端：Node.js + Express + dotenv + cors
- 生成能力：小云雀 XYQ OpenAPI（方案 + 图片）
- 真实 API Key 不包含在仓库中，请使用自己的 Key 部署运行。

> AI生成