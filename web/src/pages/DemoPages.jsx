import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildPhoneScene } from '../demo/phone.js';
import { buildCombScene } from '../demo/comb.js';
import { buildWardScene } from '../demo/ward.js';
import '../demopage.css';

// Demo 页通用壳：canvas + 事件日志 + 导航（旧物档案风）
export function useDemo(builder) {
  const canvasRef = useRef(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const stage = builder(canvas, (msg) => {
      setLogs((prev) => [msg, ...prev].slice(0, 8));
    });
    return () => stage.destroy();
  }, [builder]);

  return { canvasRef, logs };
}

const DEMOS = {
  phone: {
    no: '01',
    title: '时光电话',
    poem: '思念，终于有了回音',
    story:
      '爸妈结婚那年，外婆陪嫁的老电话，就立在客厅的五斗柜上。通讯录的纸页早已泛黄卷边，可那串号码，你至今倒背如流。',
    tags: ['旧物 · 复古电话机', '模组 · AI 声音克隆', '年代 · 那年的客厅', '体验 · 任何时候都能拨通'],
    hints: ['按住左侧听筒，拿起来拖动接听', '听筒与机身之间有电话线相连', '点击数字键拨号，点击拨号盘接通', '拖拽旋转视角，滚轮缩放'],
    theme: { c1: '#e8bfa8', c2: '#f2d9b8', ink: '#a2603f' },
  },
  comb: {
    no: '02',
    title: '声纹梳',
    poem: '平凡的日常，值得被珍藏',
    story:
      '小时候，妈妈每天早上给你梳头。木梳齿间绕过的，是她一天里和你说话最多的十分钟。',
    tags: ['旧物 · 木梳', '模组 · 声音录制', '年代 · 每一个清晨', '收藏 · 日常的声音'],
    hints: ['点击梳子开始录音', 'LED 亮起，声纹如涟漪展开', '再点一下，停止并回放', '拖拽旋转视角，滚轮缩放'],
    theme: { c1: '#b9dfc8', c2: '#e3efdb', ink: '#4f7d66' },
  },
  ward: {
    no: '03',
    title: '心愿病房',
    poem: '来不及说的话，现在能听见了',
    story:
      '病房的窗帘，永远只拉开一半。他说不出口的那句牵挂，这一次，让屏幕里的他替自己说完。',
    tags: ['场景 · 病床旁显示屏', '模组 · AI 视频 × 声音 × 信息提取', '心愿 · 好好告别', '体验 · 把想说的话听完'],
    hints: ['按下床旁的红色按钮', '屏幕亮起，亲人现身', '听那句迟到已久的「我爱你」', '拖拽旋转视角，滚轮缩放'],
    theme: { c1: '#c3cde8', c2: '#e2e5f4', ink: '#5d6ba0' },
  },
};

function DemoShell({ meta, canvasRef, logs }) {
  return (
    <div
      className="wf-demo"
      style={{ '--c1': meta.theme.c1, '--c2': meta.theme.c2, '--ink': meta.theme.ink }}
    >
      <header className="topbar">
        <div className="brand"><Link to="/">万物改造工坊</Link> <span className="glow">WonderForge</span></div>
        <nav className="nav">
          <Link to="/combine">组合工作台</Link>
          <Link to="/demos" className="active">3D 演示</Link>
          <Link to="/community">社区</Link>
        </nav>
      </header>

      <span className="wf-orb o1" aria-hidden="true" />
      <span className="wf-orb o2" aria-hidden="true" />
      <span className="wf-orb o3" aria-hidden="true" />

      <main className="wf-body">
        <div className="wf-demo-top">
          <Link to="/demos" className="wf-back">← 回到演示列表</Link>
          <span className="wf-archive-no">旧物档案 · No.{meta.no}</span>
        </div>

        <section className="wf-demo-hero">
          <h1 className="wf-demo-title">{meta.title}</h1>
          <p className="wf-demo-poem">「{meta.poem}」</p>
        </section>

        <div className="wf-stage">
          <canvas ref={canvasRef} />
          <div className="wf-logs">
            {logs.map((l, i) => (
              <div key={i} className="wf-log">{l}</div>
            ))}
          </div>
        </div>

        <div className="wf-note">
          <div className="wf-note-label">照片背后，写着 ——</div>
          <p className="wf-note-text">{meta.story}</p>
          <div className="wf-note-tags">
            {meta.tags.map((t) => (
              <span key={t} className="wf-note-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="wf-hints">
          {meta.hints.map((h, i) => (
            <span key={i} className="wf-hint"><i>{i + 1}</i>{h}</span>
          ))}
        </div>

        <footer className="wf-footer">
          <span className="wf-footer-brand">万物改造工坊 WonderForge</span>
          <span className="wf-footer-sep">·</span>
          <span className="wf-footer-motto">为每一件旧物，留住一段温柔的时光</span>
        </footer>
      </main>
    </div>
  );
}

export default function PhoneDemo() {
  const { canvasRef, logs } = useDemo(buildPhoneScene);
  return <DemoShell meta={DEMOS.phone} canvasRef={canvasRef} logs={logs} />;
}

export function CombDemo() {
  const { canvasRef, logs } = useDemo(buildCombScene);
  return <DemoShell meta={DEMOS.comb} canvasRef={canvasRef} logs={logs} />;
}

export function WardDemo() {
  const { canvasRef, logs } = useDemo(buildWardScene);
  return <DemoShell meta={DEMOS.ward} canvasRef={canvasRef} logs={logs} />;
}
