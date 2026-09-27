import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { WORKSHOPS, WK_ROUTE, WORKSHOP_3D } from '../workshops-data.js';
import { useDemo } from './DemoPages.jsx';
import { buildPhoneScene } from '../demo/phone.js';
import { buildWardScene } from '../demo/ward.js';
import '../workshop.css';

// 组合工作台草稿的 localStorage 键（与 Combiner.jsx 保持一致，带回选择后回到 /combine 即生效）
const DRAFT_KEY = 'wonder-forge:combiner:draft';

// 3D 演示型工作间的元数据（与 DemoPages.jsx 的 DEMOS 对齐）
const DEMO_META = {
  phone: {
    title: '时光电话', poem: '思念，终于有了回音',
    story: '爸妈结婚那年，外婆陪嫁的老电话，就立在客厅的五斗柜上。通讯录的纸页早已泛黄卷边，可那串号码，你至今倒背如流。',
    theme: { c1: '#e8bfa8', c2: '#f2d9b8', ink: '#a2603f' },
    hints: ['按住左侧听筒，拿起来拖动接听', '听筒与机身之间有电话线相连', '点击数字键拨号，点击拨号盘接通', '拖拽旋转视角，滚轮缩放'],
  },
  bed: {
    title: '心愿病房', poem: '来不及说的话，现在能听见了',
    story: '病房的窗帘，永远只拉开一半。他说不出口的那句牵挂，这一次，让屏幕里的他替自己说完。',
    theme: { c1: '#c3cde8', c2: '#e2e5f4', ink: '#5d6ba0' },
    hints: ['按下床旁的红色按钮', '屏幕亮起，亲人现身', '听那句迟到已久的「我爱你」', '拖拽旋转视角，滚轮缩放'],
  },
};

// ---------- 3D 演示型工作间壳 ----------
function Workshop3D({ slug }) {
  const meta = DEMO_META[slug];
  const builder = slug === 'phone' ? buildPhoneScene : buildWardScene;
  const { canvasRef, logs } = useDemo(builder);

  return (
    <div className="wf-combine wf-workshop wf-workshop-3d" style={{ '--c1': meta.theme.c1, '--c2': meta.theme.c2, '--ink': meta.theme.ink }}>
      <header className="topbar">
        <div className="brand"><Link to="/">万物改造工坊</Link> <span className="glow">WonderForge</span></div>
        <nav className="nav">
          <Link to="/combine" className="active">搭配工作间</Link>
          <Link to="/demos">3D 演示</Link>
          <Link to="/community">社区</Link>
        </nav>
      </header>

      <span className="wf-orb o1" aria-hidden="true" />
      <span className="wf-orb o2" aria-hidden="true" />
      <span className="wf-orb o3" aria-hidden="true" />

      <main className="wf-body">
        <div className="wk-crumb">
          <Link to="/combine" className="wk-back">← 回到搭配工作间</Link>
          <span className="wk-crumb-name">{WORKSHOP_3D[slug].name} · 搭配工作间</span>
          <span className="wk-crumb-badge">3D 交互</span>
        </div>

        <section className="wk-hero">
          <h1 className="wk-title">{meta.title}</h1>
          <p className="wk-poem">「{meta.poem}」</p>
          <p className="wk-story">{meta.story}</p>
        </section>

        <div className="wk-stage">
          <canvas ref={canvasRef} />
          <div className="wk-logs">
            {logs.map((l, i) => <div key={i} className="wk-log">{l}</div>)}
          </div>
        </div>

        <div className="wk-hint-card">
          <div className="wk-hint-label">试试这样玩</div>
          <ul className="wk-hints">
            {meta.hints.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
          <div className="wk-hint-note">这件旧物的搭配工作间以 3D 实景呈现，部件与 AI 模组的能力已融入场景——拿起听筒、按下按钮，旧物就在你手里活过来。</div>
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

// ---------- 图片型工作间 ----------
function WorkshopImage({ w }) {
  const navigate = useNavigate();
  const [k0, k1] = [w.parts[0].key, w.parts[1].key];
  const [m0, m1] = [w.mods[0].key, w.mods[1].key];
  const [active, setActive] = useState({});          // { [key]: bool } 部件/模组开关
  const [panel, setPanel] = useState(null);          // 当前展示的 AI 面板 key

  // 当前效果图 key：两部件都开=both，只开 k0=k0，只开 k1=k1，都没开=plain
  const shotKey = active[k0] && active[k1] ? 'both' : active[k0] ? k0 : active[k1] ? k1 : 'plain';
  const shot = w.shots[shotKey];
  // 四个缩略图对应的 shot key（过滤掉数据里不存在的，防跨工作间 state 复用崩溃）
  const thumbKeys = ['plain', k0, k1, 'both'].filter((k) => w.shots[k]);
  // 任意 AI 模组激活
  const anyMod = active[m0] || active[m1];

  const toggle = (key) => setActive((s) => ({ ...s, [key]: !s[key] }));

  // 点击缩略图：把状态切到该缩略图对应的部件组合
  const pickThumb = (k) => {
    if (k === 'plain') setActive((s) => ({ ...s, [k0]: false, [k1]: false }));
    else if (k === 'both') setActive((s) => ({ ...s, [k0]: true, [k1]: true }));
    else setActive((s) => ({ ...s, [k0]: k === k0, [k1]: k === k1 }));
  };

  // 带回组合工作台：把当前选择写入草稿，再跳 /combine
  const goCombine = () => {
    const hardwareIds = [active[k0] && w.parts[0].id, active[k1] && w.parts[1].id].filter(Boolean);
    const aiIds = [active[m0] && w.mods[0].id, active[m1] && w.mods[1].id].filter(Boolean);
    const names = [active[k0] && w.parts[0].name, active[k1] && w.parts[1].name, active[m0] && w.mods[0].name, active[m1] && w.mods[1].name].filter(Boolean);
    const idea = w.el.name + (names.length ? ' × ' + names.join('与') : '') + '（来自搭配工作间）';
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ daily: [w.id], hardware: hardwareIds, ai: aiIds, idea }));
    } catch { /* 忽略隐私模式等存储异常 */ }
    navigate('/combine');
  };

  // 组合行文本
  const comboLine = [
    w.el.name,
    active[k0] ? '× ' + w.parts[0].name : '',
    active[k1] ? '× ' + w.parts[1].name : '',
    active[m0] ? '× ' + w.mods[0].name : '',
    active[m1] ? '× ' + w.mods[1].name : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="wf-combine wf-workshop">
      <header className="topbar">
        <div className="brand"><Link to="/">万物改造工坊</Link> <span className="glow">WonderForge</span></div>
        <nav className="nav">
          <Link to="/combine" className="active">搭配工作间</Link>
          <Link to="/demos">3D 演示</Link>
          <Link to="/community">社区</Link>
        </nav>
      </header>

      <span className="wf-orb o1" aria-hidden="true" />
      <span className="wf-orb o2" aria-hidden="true" />
      <span className="wf-orb o3" aria-hidden="true" />

      <main className="wf-body">
        <div className="wk-crumb">
          <Link to="/combine" className="wk-back">← 回到搭配工作间</Link>
          <span className="wk-crumb-name">{w.el.name} · 搭配工作间</span>
        </div>

        <div className="wk-combo" role="status" aria-live="polite">{comboLine || w.el.name}</div>

        <div className="wk-layout">
          {/* 左栏：物品信息 + 部件 + AI 模组 */}
          <div className="wk-left">
            <section className="wk-el-card">
              <div className="wk-el-name">{w.el.name}</div>
              <div className="wk-el-desc">{w.el.desc}</div>
              <div className="wk-el-tags">{w.el.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </section>

            <h3 className="wk-section-title">可添加部件 · 点一点，看看改造后的它</h3>
            {w.parts.map((p) => (
              <button
                key={p.key} type="button"
                className={`wk-addon${active[p.key] ? ' selected' : ''}`}
                aria-pressed={!!active[p.key]}
                onClick={() => toggle(p.key)}
              >
                <div className="wk-addon-head">
                  <span className="wk-addon-name">{p.name}</span>
                  <span className="wk-addon-state">{active[p.key] ? '已添加' : '点击添加'}</span>
                </div>
                <div className="wk-addon-desc">{p.desc}</div>
                <div className="wk-addon-install"><b>安装</b>：{p.install}</div>
                <div className="wk-addon-effect"><b>效果</b>：{p.effect}</div>
                <div className="wk-addon-tags">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </button>
            ))}

            <h3 className="wk-section-title">AI 模组 · 让{w.el.name}开始懂你</h3>
            {w.mods.map((mod) => (
              <button
                key={mod.key} type="button"
                className={`wk-addon wk-ai${active[mod.key] ? ' selected' : ''}`}
                aria-pressed={!!active[mod.key]}
                onClick={() => { toggle(mod.key); if (!active[mod.key]) setPanel(mod.key); }}
              >
                <div className="wk-addon-head">
                  <span className="wk-addon-name">{mod.name}</span>
                  <span className="wk-addon-state">{active[mod.key] ? '已注入' : '点击注入'}</span>
                </div>
                <div className="wk-addon-desc">{mod.desc}</div>
                <div className="wk-addon-effect"><b>能力</b>：{mod.effect}</div>
                <div className="wk-addon-tags">{mod.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </button>
            ))}
          </div>

          {/* 右栏：效果图 + 缩略图 + AI 面板 + 带回 */}
          <div className="wk-right">
            <figure className="wk-shot">
              <img src={shot.img} alt={`${w.el.name} · ${shot.label}`} />
              <figcaption className="wk-shot-cap">
                <span className="wk-shot-label">{shot.label}</span>
                <span className="wk-shot-text">{shot.caption}</span>
              </figcaption>
            </figure>

            <div className="wk-thumbs" role="tablist" aria-label="效果图切换">
              {thumbKeys.map((k) => (
                <button
                  key={k} type="button" role="tab"
                  aria-selected={k === shotKey}
                  className={`wk-thumb${k === shotKey ? ' active' : ''}`}
                  onClick={() => pickThumb(k)}
                >
                  <img src={w.shots[k].img} alt={w.shots[k].label} />
                  <span className="wk-thumb-label">{w.shots[k].label}</span>
                </button>
              ))}
            </div>

            {anyMod && (
              <div className="wk-views">
                {w.mods.map((mod) => active[mod.key] && (
                  <button
                    key={mod.key} type="button"
                    className={`wk-view${panel === mod.key ? ' active' : ''}`}
                    onClick={() => setPanel(mod.key)}
                  >
                    {mod.panel}
                  </button>
                ))}
              </div>
            )}

            {panel && anyMod && (() => {
              const mod = w.mods.find((m) => m.key === panel && active[m.key]);
              if (!mod) return null;
              return (
                <div className="wk-panel">
                  <div className="wk-panel-title">{mod.panel}</div>
                  <p className="wk-panel-sub">{mod.effect}</p>
                  <p className="wk-panel-note">演示环境：本面板为交互示意，正式版将接入对应 AI 能力。</p>
                </div>
              );
            })()}

            <button type="button" className="btn wk-go-combine" onClick={goCombine}>
              带去组合工作台生成方案 <span aria-hidden="true">→</span>
            </button>
          </div>
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

// ---------- 入口：按 slug 路由分派 ----------
export default function Workshop() {
  const { slug } = useParams();
  // 3D 演示型
  if (WORKSHOP_3D[slug]) return <Workshop3D key={slug} slug={slug} />;
  // 图片型：用 useMemo 防止组件内重复查找，key 由父级路由保证 slug 变化时重建
  const w = useMemo(() => WORKSHOPS.find((x) => x.slug === slug), [slug]);
  if (!w) {
    return (
      <div className="wf-combine wf-workshop">
        <main className="wf-body" style={{ paddingTop: 80 }}>
          <div className="card" style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 18 }}>该旧物暂未开放搭配工作间</div>
            <p style={{ color: 'var(--muted)', margin: '12px 0 20px' }}>可回到组合工作台，选择已支持的 50 件旧物体验搭配工作间。</p>
            <Link to="/combine" className="btn">回到搭配工作间</Link>
          </div>
        </main>
      </div>
    );
  }
  return <WorkshopImage key={slug} w={w} />;
}
