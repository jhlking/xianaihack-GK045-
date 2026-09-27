import { writeFileSync } from 'node:fs';

const list = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const target = list.find((t) => t.type === 'page' && t.url.includes('demo/phone'));
const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const send = (method, params = {}) => new Promise((res, rej) => {
  const i = ++id;
  pending.set(i, { res, rej });
  ws.send(JSON.stringify({ id: i, method, params }));
});
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) {
    const p = pending.get(m.id);
    pending.delete(m.id);
    m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result);
  }
};
await new Promise((r) => { ws.onopen = r; });
await send('Page.enable');
await send('Runtime.enable');
await new Promise((r) => setTimeout(r, 2500));

const rect = (await send('Runtime.evaluate', {
  expression: `(() => { const c = document.querySelector('.wf-stage canvas'); if (!c) return null; const r = c.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })()`,
  returnByValue: true,
})).result.value;
console.log('canvas rect:', JSON.stringify(rect));

const shot = await send('Page.captureScreenshot', { format: 'png' });
writeFileSync('C:/Users/28176/wonder-forge/web/shot-before.png', Buffer.from(shot.data, 'base64'));
console.log('shot saved');
ws.close();