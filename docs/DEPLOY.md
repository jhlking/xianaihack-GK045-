---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '61136d89-ab71-4c83-b9a2-05843e6b5fee'
  PropagateID: '61136d89-ab71-4c83-b9a2-05843e6b5fee'
  ReservedCode1: '9745eab4-ccce-44c8-bd61-0110b85775ec'
  ReservedCode2: '9745eab4-ccce-44c8-bd61-0110b85775ec'
---

# WonderForge 部署指南

> 将 WonderForge 从本地开发环境部署到公网服务器，面向有基本运维能力的读者。

## 目录

1. [部署模式概览](#1-部署模式概览)
2. [环境要求](#2-环境要求)
3. [环境变量](#3-环境变量)
4. [方式一：一体式部署（推荐）](#4-方式一一体式部署推荐)
5. [方式二：前后端分离部署](#5-方式二前后端分离部署)
6. [Nginx 配置参考](#6-nginx-配置参考)
7. [生产检查清单](#7-生产检查清单)
8. [常见部署问题](#8-常见部署问题)

---

## 1. 部署模式概览

| 模式 | 说明 | 适用场景 |
|---|---|---|
| 一体式 | 前端构建产物放入 `server/public/`，仅运行 Node 服务（8787） | 小规模演示、单机部署 |
| 前后端分离 | 前端静态托管（Nginx/CDN），后端独立运行 | 规模化、分离扩容 |

两种模式都要求：

- Node.js ≥ 18（支持 `fetch` 与 `AbortSignal.timeout`）
- 有效的小云雀 Key（`XYQ_ACCESS_KEY`）
- 可访问 `xyq.jianying.com` 的网络

---

## 2. 环境要求

| 项 | 要求 |
|---|---|
| 操作系统 | Linux（推荐） / Windows Server / macOS |
| Node.js | ≥ 18（建议 20 LTS） |
| 包管理器 | npm（随 Node 自带） |
| 反向代理（可选） | Nginx ≥ 1.20 |
| 存储 | `server/public/generated/`、`server/public/uploads/` 需可写 |

---

## 3. 环境变量

| 变量 | 必填 | 默认 | 说明 |
|---|---|---|---|
| `XYQ_ACCESS_KEY` | 是 | 无 | 小云雀 API Key |
| `PORT` | 否 | `8787` | 服务监听端口 |
| `XYQ_OPENAPI_BASE` | 否 | `https://xyq.jianying.com` | 小云雀 OpenAPI 基地址（可选覆盖） |

配置方式：创建 `server/.env`（参考 `.env.example`），或在系统环境变量中设置。

> 安全提示：`server/.env` 已被 `.gitignore` 忽略，请勿提交到仓库或暴露到公网。

---

## 4. 方式一：一体式部署（推荐）

### 4.1 构建前端

在本地或服务器上：

```bash
cd web
npm install
npm run build        # 产物输出到 web/dist
```

### 4.2 合并前端产物到后端

```bash
# 将 web/dist 内容复制到 server/public/（保留已有 generated/uploads/ 目录）
cp -r web/dist/* server/public/

# 清理旧的构建缓存（server/public/assets/ 下的旧 hash 文件）
# 若更换部署版本，建议保留 generated/ 与 uploads/，仅更新 assets/ 与 index.html
```

> 注意：`server/public/generated/`、`server/public/uploads/` 由运行期生成，复制时不要删除。

### 4.3 安装依赖并启动

```bash
cd server
npm install --production

# 前台运行（调试）
npm run start

# 后台守护（生产推荐，用 pm2）
npm install -g pm2
pm2 start index.mjs --name wonder-forge --env production
pm2 save && pm2 startup
```

### 4.4 验证

```bash
curl http://localhost:8787/api/health
# {"ok":true,"key_configured":true}

curl -I http://localhost:8787/
# HTTP/1.1 200 OK  （SPA fallback 生效，直接访问 / 返回 index.html）
```

---

## 5. 方式二：前后端分离部署

### 5.1 前端

```bash
cd web
npm install
npm run build        # 产物 web/dist 交给 Nginx/CDN 托管
```

### 5.2 后端

按 [4.3](#43-安装依赖并启动) 启动后端服务（仅 API，不做静态托管）。

### 5.3 前端代理

前端请求 `/api`、`/generated` 需指向后端。生产环境没有 Vite 代理，用 Nginx 反代（见下文）或后端地址直连。

---

## 6. Nginx 配置参考

一体式部署示例（HTTP，生产建议加 HTTPS）：

```nginx
server {
    listen 80;
    server_name wonderforge.example.com;

    # 后端一体式（前端静态 + API 全部由 Node 服务）
    location / {
        proxy_pass http://127.0.0.1:8787;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 小云雀生图耗时较长（最长 8 分钟），必须关闭代理超时
        proxy_read_timeout 600s;
        proxy_send_timeout 600s;
    }

    # 大文件上传（社区图纸 ≤20MB）
    client_max_body_size 25m;
}
```

前后端分离模式：

```nginx
server {
    listen 80;
    server_name wonderforge.example.com;

    # 前端静态产物
    root /var/www/wonderforge/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;   # SPA fallback
    }

    # API 反代
    location /api/ {
        proxy_pass http://127.0.0.1:8787;
        proxy_read_timeout 600s;
    }
    location /generated/ {
        proxy_pass http://127.0.0.1:8787;
        proxy_read_timeout 60s;
    }
    location /uploads/ {
        proxy_pass http://127.0.0.1:8787;
        proxy_read_timeout 60s;
    }
}
```

> 小云雀生成耗时可达 8 分钟，务必把 `/api` 的代理超时调到 600s 以上，否则 Nginx 会 504。

---

## 7. 部署检查清单

| 类别 | 检查项 |
|---|---|
| 配置 | `server/.env` 存在且 Key 正确；`PORT` 未被占用 |
| 权限 | `data/`、`server/public/generated/`、`server/public/uploads/` 可写 |
| 依赖 | `npm install --production` 完成 |
| 健康 | `curl /api/health` 返回 `key_configured:true` |
| 页面 | 访问首页返回 200，无 HTML/JS 缓存报错 |
| 生成 | 跑一次组合，确认效果图落地 `generated/` 且能访问 |
| 安全 | `.env` 不对外；`data/community.json` 未提交仓库；防火墙放行所需端口 |

---

## 8. 常见部署问题

| 症状 | 原因 | 处理 |
|---|---|---|
| `Missing XYQ_ACCESS_KEY` | `.env` 未创建或变量名为空 | 复制 `.env.example` 并填写，重启 |
| 首页 404（分离模式） | SPA fallback 未配置 | 检查 Nginx `try_files $uri $uri/ /index.html` |
| `/api/combine` 504 | 反代超时过短 | 调大 `proxy_read_timeout`（建议 600s） |
| 图片外链打不开 | 图片是第三方临时 URL | 后端已缓存到 `/generated/`；检查缓存目录权限 |
| 旧版本页面崩溃 | 浏览器缓存旧 index.html | 后端已对 HTML 入口 no-cache；检查 CDN 缓存策略 |
| 社区数据写不进 | `data/` 目录无写权限 | `chown` 运行用户并赋写权限 |

---

> 接口细节见 [API 文档](./API.md)；二次开发见 [开发指南](./DEVELOPER.md)。

> AI生成