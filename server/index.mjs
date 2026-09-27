import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { loadItems, runCombination } from './forge.mjs';
import { registerCommunity } from './community.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8787;

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// ===== API 路由必须在 express.static 之前注册 =====

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ ok: true, key_configured: Boolean(process.env.XYQ_ACCESS_KEY) });
});

// 奇物库
app.get('/api/items', (req, res) => {
  res.json(loadItems());
});

// 组合：提交后同步等待结果（小云雀一般几十秒到几分钟）
app.post('/api/combine', async (req, res) => {
  try {
    const selection = req.body || {};
    const selected = [...(selection.daily_ids || []), ...(selection.hardware_ids || []), ...(selection.ai_ids || [])];
    if (!selected.length || selected.some((id) => typeof id !== 'string')) {
      return res.status(400).json({ error: '请至少选择一件物品或模组' });
    }
    const result = await runCombination(selection);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
});

// 社区 API
registerCommunity(app, express);

// ===== 静态文件服务在 API 路由之后 =====

// 生成的图片缓存目录（小云雀 URL 有时效，落地到本地更稳）
const PUBLIC_DIR = path.join(__dirname, 'public');
const GEN_DIR = path.join(PUBLIC_DIR, 'generated');
fs.mkdirSync(GEN_DIR, { recursive: true });
app.use('/generated', express.static(GEN_DIR));

// 前端构建产物（SPA fallback: 所有非 API、非文件的 GET 请求返回 index.html）
// HTML 入口一律 no-cache，避免部署新版本后浏览器仍用旧缓存的 index.html（引用旧 hash JS）导致页面异常
app.use((req, res, next) => {
  if (req.method === 'GET' && !path.extname(req.path)) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
  next();
});
app.use(express.static(PUBLIC_DIR));
app.get('*', (req, res) => {
  // 带扩展名的路径（.js/.css/.jpg 等）说明是静态资源请求，找不到就 404，
  // 绝不能把 index.html 当 JS/CSS 返回（旧缓存请求旧 hash 文件时会 HTML 当 JS 执行导致页面崩溃）
  if (path.extname(req.path)) {
    return res.status(404).type('text/plain').send('Not Found');
  }
  // SPA 路由：HTML 入口禁用缓存，确保浏览器每次都拿到最新版本（避免部署后旧缓存挡住新页面）
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`wonder-forge server listening on http://localhost:${PORT}`);
});
