---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '02362945-14cc-4ee0-ab5c-d16f32699fb7'
  PropagateID: '02362945-14cc-4ee0-ab5c-d16f32699fb7'
  ReservedCode1: 'ae0f6888-1e9d-4409-bad0-088e64c04ba9'
  ReservedCode2: 'ae0f6888-1e9d-4409-bad0-088e64c04ba9'
---

# WonderForge API 文档

> 后端 Express 服务（默认端口 8787）。所有接口均启用 CORS，请求/响应均为 JSON（除图纸上传）。

## 接口总览

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/health` | 健康检查 |
| GET | `/api/items` | 获取奇物库 |
| POST | `/api/combine` | 提交组合生成方案 |
| GET | `/api/community` | 获取社区构想列表 |
| POST | `/api/community` | 发布新构想 |
| POST | `/api/community/:id/help` | 助力指定构想 |
| POST | `/api/community/uploads` | 上传 3D 图纸文件 |
| GET | `/generated/*` | 生成的图片缓存（静态） |
| GET | `/uploads/*` | 上传的图纸文件（静态） |

## 通用说明

- **Base URL**：`http://localhost:8787`（开发）；生产环境见 [部署指南](./DEPLOY.md)
- **内容类型**：JSON 接口使用 `application/json`；上传接口使用 `application/octet-stream`
- **错误格式**：`{ "error": "错误描述" }`，配合 HTTP 状态码
- 前端开发代理已把 `/api`、`/generated` 转发到后端，浏览器直接请求相对路径即可

---

## 1. GET /api/health

健康检查。

**响应 200**

```json
{ "ok": true, "key_configured": true }
```

| 字段 | 说明 |
|---|---|
| `ok` | 服务是否正常 |
| `key_configured` | `server/.env` 是否已配置 `XYQ_ACCESS_KEY` |

---

## 2. GET /api/items

获取奇物库（读取 `data/items.json`）。

**响应 200**

```json
{
  "daily_items": [ { "id": "di-01", "name": "陶瓷马克杯", "desc": "白色陶瓷杯，杯身光滑", "tags": ["容器", "日常", "可涂装"] } ],
  "hardware_parts": [ { "id": "hp-01", "name": "LED 灯带", "desc": "可调色温的柔性灯带", "tags": ["发光", "柔性", "氛围"] } ],
  "ai_modules": [ { "id": "ai-01", "name": "声音克隆", "desc": "复刻真人声线", "tags": ["声音", "分身", "情感"] } ]
}
```

三个分类各 50 件。字段：`id`（唯一标识）、`name`、`desc`、`tags`。

---

## 3. POST /api/combine

提交组合并生成 AI 方案与效果图（同步等待，耗时约 1~8 分钟）。

**请求体**

```json
{
  "daily_ids": ["di-01"],
  "hardware_ids": ["hp-02", "hp-03"],
  "ai_ids": ["ai-11"],
  "idea": "想给杯子加上夜光，做成夜晚会发光的记忆杯"
}
```

| 字段 | 必填 | 说明 |
|---|---|---|
| `daily_ids` | 否* | 日常物品 ID 数组 |
| `hardware_ids` | 否* | 功能部件 ID 数组 |
| `ai_ids` | 否* | AI 模组 ID 数组 |
| `idea` | 否 | 用户预期（中文），不填则 AI 自由发挥 |

\* 三者至少选其一，否则返回 400。

**响应 200**

```json
{
  "thread_id": "abc123",
  "run_id": "run456",
  "web_thread_link": "https://xyq.jianying.com/...",
  "text": "AI 会话全文",
  "result": {
    "name": "夜光记忆杯",
    "intro": "把爷爷的马克杯涂上夜光，夜里像星星一样守着你。",
    "play": ["夜晚杯身缓缓发光", "轻敲杯身播放爷爷录音", "喝水时记一笔美好"],
    "materials": ["陶瓷马克杯", "夜光荧光粉"],
    "steps": ["清洁杯身", "均匀涂覆荧光粉", "晾干固化"],
    "image_prompt": "A glowing mug on a nightstand, warm light..."
  },
  "image_urls": ["/generated/xxxx.png"]
}
```

| 字段 | 说明 |
|---|---|
| `thread_id` / `run_id` | 小云雀会话与运行 ID |
| `web_thread_link` | 小云雀网页会话链接（可跳转查看） |
| `result` | 结构化方案（名称 / 介绍 / 玩法 / 材料 / 步骤 / 英文外观描述） |
| `image_urls` | 效果图地址：优先本地缓存路径 `/generated/xxx`；缓存失败则回退原始 https 外链 |

**错误示例**

```json
// 400 - 未选择任何物品
{ "error": "请至少选择一件物品或模组" }

// 500 - 小云雀失败
{ "error": "XYQ 创作失败：...（原因）" }
```

> 说明：`runState` 状态码 3=成功、4=失败、5=取消；轮询上限 8 分钟，超时返回 500。

---

## 4. GET /api/community

获取全部社区构想。

**响应 200**

```json
[
  {
    "id": "p1",
    "title": "夜光记忆杯",
    "creator": "小北",
    "goal": "给爷爷留下的马克杯涂上夜光荧光粉，夜里放在床头就像他还在陪着我",
    "combos": ["陶瓷马克杯", "夜光荧光粉"],
    "status": "组装中",
    "contributions": [
      { "who": "阿深", "type": "加模组", "text": "建议加一个记忆相册模组", "attachment": null }
    ]
  }
]
```

数据存于 `data/community.json`；文件不存在时返回内置种子数据。

---

## 5. POST /api/community

发布新构想。

**请求体**

```json
{ "title": "夜光记忆杯", "goal": "让爷爷的杯子夜里发光陪伴我" }
```

校验：标题必填且 ≤80 字；目标必填且 ≤1000 字。

**响应 201**：返回发布后的完整构想列表（新构想排在最前）。

**错误示例**

```json
{ "error": "请填写标题和目标，标题最多 80 字，目标最多 1000 字" }
```

---

## 6. POST /api/community/:id/help

为指定构想提交助力。

**请求体**

```json
{
  "type": "加模组",
  "text": "建议加一个记忆相册模组",
  "attachment": { "name": "杯托.stl", "url": "/uploads/xxxx.stl" }
}
```

| 字段 | 说明 |
|---|---|
| `type` | 枚举：`加模组` / `改 3D 图纸` / `提方案` / `供物料` |
| `text` | 助力内容（≤1000 字），与附件二选一 |
| `attachment` | 可选，图纸上传接口返回的对象 |

**响应 201**：更新后的构想列表。构想不存在返回 404。

---

## 7. POST /api/community/uploads

上传 3D 图纸（原始二进制）。

**请求头**

```
Content-Type: application/octet-stream
X-File-Name: 杯托.stl   （URL 编码）
```

**请求体**：文件原始字节。

支持扩展名：`.stl` / `.step` / `.stp` / `.3mf` / `.obj`；大小上限 20MB。

**响应 201**

```json
{ "name": "杯托.stl", "url": "/uploads/xxxx-uuid.stl" }
```

**错误示例**

```json
{ "error": "仅支持 STL、STEP、STP、3MF、OBJ 图纸" }
```

---

## 8. 静态资源

| 路径 | 说明 |
|---|---|
| `/generated/*` | 小云雀生成图片的本地缓存（`server/public/generated/`） |
| `/uploads/*` | 社区上传图纸（`server/public/uploads/`） |
| `/` | 前端构建产物 + SPA fallback（HTML 入口 no-cache） |

> 注意：生产部署时若前后端分离，需将上述路径反向代理到后端；`/` 下所有非 API、非扩展名的 GET 请求会返回 `index.html`（SPA 路由）。

---

## 附：小云雀对接说明

后端通过 `server/xyq.mjs` 与「小云雀」OpenAPI 对接：

| 项目 | 值 |
|---|---|
| 基地址 | `XYQ_OPENAPI_BASE`（默认 `https://xyq.jianying.com`） |
| 鉴权 | `Authorization: Bearer <XYQ_ACCESS_KEY>` |
| 提交任务 | `POST /api/biz/v1/skill/submit_run` |
| 查询线程 | `POST /api/biz/v1/skill/get_thread` |
| 运行状态 | 0/1/2=进行中，3=成功，4=失败，5=取消 |

响应校验：业务码 `ret === '0'` 视为成功，否则抛出 `XYQ API 错误: ret=.. errmsg=..`。

> AI生成