# 万物改造工坊 WonderForge

把现实功能部件与 AI 模组装进日常物品，AI 推理出新产品方案并生成照片级效果图（含发光质感）。

> 48h MVP：选物组合 → AI 方案 + 效果图（预留视频位）→ 4 款明星组合 3D 交互 demo + 社区助力。

## 结构
- `data/items.json`：奇物库（日常物品 / 功能部件 / AI 模组，各 15 件）
- `server/`：Node + Express 代理层，保管小云雀 Key，封装组合、生图、轮询
- `web/`：React + Vite 前端，Three.js 交互 demo 与社区页

## 快速开始
1. 确认 `server/.env` 中已配置 `XYQ_ACCESS_KEY`
2. `cd server && npm install && npm run dev`（端口 8787）
3. `cd web && npm install && npm run dev`（端口 5173）
4. 浏览器打开 http://localhost:5173

## 明星 demo
- 时光电话 `#/demo/phone`：复古电话机 + AI 声音模组
- 声纹梳 `#/demo/comb`：梳子 + 声音录制模组
- 心愿病房 `#/demo/ward`：病房显示屏 + AI 视频 / 声音 / 信息提取模组
- 社区 `#/community`：发起构想，模组 / 3D 图纸 / 方案助力

## 路线图（二期）
- 视频生成接入（主链路已预留视频插入位）
- 社区真实后端与账号
- 3D 打印图纸产出
- 触感硬件材料包