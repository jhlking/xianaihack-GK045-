# WonderForge 分享包

## 运行环境

- Node.js 18 或更高版本
- 可访问小云雀 API 的网络
- 一个有效的小云雀 API Key

## 启动

1. 将 `server/.env.example` 复制为 `server/.env`。
2. 在 `server/.env` 中填写 `XYQ_ACCESS_KEY`。
3. 打开第一个终端：

```powershell
cd server
npm install
npm run dev
```

4. 打开第二个终端：

```powershell
cd web
npm install
npm run dev
```

5. 浏览器打开 `http://localhost:5173/#/combine`。

## 功能

- 选择日常物品、功能部件和 AI 模组进行组合
- 小云雀生成产品方案和照片级效果图
- 效果图页面预留视频位置
- 组合草稿和生成记录保存在当前浏览器中
- 三个 Three.js 交互演示
- 社区构想、助力和 3D 图纸上传

真实 API Key 不包含在分享包中，请使用接收方自己的 Key。
