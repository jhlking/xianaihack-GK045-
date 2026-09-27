---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ec20c1a7-bb74-42df-b83a-8b92e71d6147'
  PropagateID: 'ec20c1a7-bb74-42df-b83a-8b92e71d6147'
  ReservedCode1: '41fb9d80-e637-4cf1-b5a2-ca95d5c1a58a'
  ReservedCode2: '41fb9d80-e637-4cf1-b5a2-ca95d5c1a58a'
---

# WonderForge 快速上手（5 分钟）

> 本文档面向第一次拿到项目的用户。完整功能介绍见 [使用手册](./docs/USER-GUIDE.md)。

## 一、这是什么

WonderForge 万物改造工坊：把日常物品、功能部件和 AI 模组组合成新产品，由 AI 生成产品方案和照片级效果图。

```
旧物 + 部件/模组 + 你的期待 ──▶ AI 方案（名称/介绍/玩法/材料/步骤） + 照片级效果图
```

## 二、运行环境

- **Node.js 18 或更高版本**（[nodejs.org](https://nodejs.org) 下载，安装时勾选 "Add to PATH"）
- 可访问小云雀 API 的网络
- 一个有效的小云雀 API Key（`XYQ_ACCESS_KEY`）

> 仓库中不包含真实 Key，请使用接收方自己的 Key。

## 三、第一步：配置小云雀 Key

1. 进入 `server` 目录，将 `.env.example` 复制为 `.env`：

   ```powershell
   cd server
   copy .env.example .env
   ```

   （Linux / macOS：`cp .env.example .env`）

2. 用记事本打开 `server/.env`，把 `XYQ_ACCESS_KEY` 的值替换为你的真实 Key：

   ```
   XYQ_ACCESS_KEY=你的-真实-Key
   PORT=8787
   ```

   > `PORT` 可改，改动后前端代理目标（`web/vite.config.js`）也要同步修改。

## 四、启动项目

### 方式 A：Windows 一键启动（推荐给演示/体验用户）

1. 双击根目录的 `启动服务器.bat` —— 自动检查并安装后端依赖、启动后端（端口 8787）
2. **另开一个终端**启动前端：

   ```powershell
   cd web
   npm install
   npm run dev
   ```

3. 浏览器打开 `http://localhost:5173/#/combine`

### 方式 B：手动双终端（开发/调试）

```powershell
# 终端 1 —— 后端
cd server
npm install
npm run dev
# 看到 "wonder-forge server listening on http://localhost:8787" 即成功

# 终端 2 —— 前端
cd web
npm install
npm run dev
# 看到 Local: http://localhost:5173 即成功
```

### 方式 C：根目录一键脚本（适合有 Node 经验的用户）

```powershell
npm run setup:server   # 安装后端依赖
npm run setup:web      # 安装前端依赖
npm run dev:server     # 启动后端
npm run dev:web        # 启动前端
```

## 五、验证是否成功

| 检查项 | 方法 | 期望 |
|---|---|---|
| 后端健康 | 浏览器打开 `http://localhost:8787/api/health` | 返回 `{"ok":true,"key_configured":true}` |
| 奇物库 | 打开 `http://localhost:8787/api/items` | 返回 JSON（含 daily_items 等） |
| 前端页面 | 打开 `http://localhost:5173/#/combine` | 显示「搭配工作间」页面 |

> `key_configured` 为 `false` 说明 `.env` 未配置或未生效，先检查 Key 再重启后端。

## 六、功能速览

- **搭配工作间**（`#/combine`）：选日常物品 + 功能部件 + AI 模组，填预期，点「生成产品方案」，约 1~3 分钟出方案与效果图
- **3D 演示**（`#/demos`）：时光电话、声纹梳、心愿病房三个交互 demo
- **社区**（`#/community`）：发起构想，四种方式助力（加模组 / 改 3D 图纸 / 提方案 / 供物料），上传 STL/STEP/3MF/OBJ 图纸

## 七、常见启动问题排查

| 症状 | 原因 | 处理 |
|---|---|---|
| `Missing XYQ_ACCESS_KEY` | `server/.env` 缺失或 Key 为空 | 复制 `.env.example` 为 `.env` 并填入 Key，重启后端 |
| 端口被占用 | 8787 / 5173 被其他程序占用 | 关闭占用程序，或改 `.env` 的 `PORT` / vite 配置的端口 |
| 前端打开空白/接口报错 | 后端未启动，或前端没走代理 | 先启动后端；确认 `web/vite.config.js` 的 proxy 指向 8787 |
| 生成长时间转圈 | 小云雀生成较慢或 Key 无权限 | 正常等待最长 8 分钟；超时后检查 Key 与网络 |
| 中文乱码（bat 窗口） | 控制台编码问题 | `启动服务器.bat` 已内置 `chcp 65001`，如仍乱码不影响使用 |

> 更多使用细节见 [使用手册](./docs/USER-GUIDE.md)；接口说明见 [API 文档](./docs/API.md)。

> AI生成