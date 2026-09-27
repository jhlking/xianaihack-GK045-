const XYQ_BASE = process.env.XYQ_OPENAPI_BASE || process.env.XYQ_BASE_URL || 'https://xyq.jianying.com';
const ACCESS_KEY = process.env.XYQ_ACCESS_KEY || '';

if (!ACCESS_KEY) {
  throw new Error('Missing XYQ_ACCESS_KEY. Configure it in server/.env');
}

const SUBMIT_RUN_PATH = '/api/biz/v1/skill/submit_run';
const GET_THREAD_PATH = '/api/biz/v1/skill/get_thread';

async function apiPost(path, body) {
  const url = XYQ_BASE.replace(/\/+$/, '') + path;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ACCESS_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60 * 60 * 1000),
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`XYQ API 返回非 JSON (${res.status}): ${text.slice(0, 200)}`);
  }
  if (data.ret !== '0') {
    throw new Error(`XYQ API 错误: ret=${data.ret} errmsg=${data.errmsg || ''}`);
  }
  return data.data;
}

export function submitRun(threadId, message, assetIds) {
  const body = {};
  if (threadId) body.thread_id = threadId;
  if (message) body.message = message;
  if (assetIds && assetIds.length) body.asset_ids = assetIds;
  return apiPost(SUBMIT_RUN_PATH, body);
}

export function getThread(threadId, runId, afterSeq = 0) {
  const body = { thread_id: threadId, after_seq: afterSeq };
  if (runId) body.run_id = runId;
  return apiPost(GET_THREAD_PATH, body);
}

// 状态：0/1/2=进行中，3=成功，4=失败，5=取消
export function runState(run) {
  return typeof run.state === 'number' ? run.state : -1;
}

// 从 run 的 entry_list 提取消息与产物条目
export function extractEntries(run) {
  const entries = [];
  for (const entry of run?.entry_list || []) {
    const e = { id: '', role: '', content: [] };
    if (entry.message) {
      e.id = entry.message.message_id || '';
      e.role = entry.message.role || '';
      e.content = entry.message.content || [];
    }
    if (entry.artifact) {
      e.id = entry.artifact.artifact_id || e.id;
      e.role = entry.artifact.role || e.role;
      e.content = entry.artifact.content || e.content;
    }
    entries.push(e);
  }
  return entries;
}

// 小云雀内容条目为 {type, sub_type, data: "JSON字符串"}
function decodeItem(item) {
  if (typeof item === 'string') return item;
  if (item && typeof item === 'object' && typeof item.data === 'string') {
    try {
      return JSON.parse(item.data);
    } catch {
      return item.data;
    }
  }
  return item;
}

export function collectText(entries) {
  const parts = [];
  for (const e of entries) {
    if (e.role !== 'assistant') continue;
    for (const c of e.content) {
      const parsed = decodeItem(c);
      if (typeof parsed === 'string') {
        parts.push(parsed);
      } else if (parsed && typeof parsed === 'object' && typeof parsed.text === 'string') {
        parts.push(parsed.text);
      }
    }
  }
  return parts.join('');
}

export function collectImageUrls(entries) {
  const urls = [];
  const pushUrl = (u) => {
    if (typeof u === 'string' && /^https?:\/\//i.test(u.trim()) && !urls.includes(u.trim())) {
      urls.push(u.trim());
    }
  };
  const walk = (node) => {
    if (!node) return;
    if (typeof node === 'string') {
      if (/^https?:\/\/\S+\.(png|jpe?g|webp)(\?\S*)?$/i.test(node.trim())) pushUrl(node);
      return;
    }
    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }
    if (typeof node === 'object') {
      if (typeof node.url === 'string') pushUrl(node.url);
      for (const key of Object.keys(node)) {
        if (key === 'url') continue;
        walk(node[key]);
      }
    }
  };
  for (const e of entries) {
    for (const c of e.content) walk(decodeItem(c));
  }
  return urls;
}