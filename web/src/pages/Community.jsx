import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../wf-theme.css';

const HELP_TYPES = ['加模组', '改 3D 图纸', '提方案', '供物料'];

export default function Community() {
  const [projects, setProjects] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newGoal, setNewGoal] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [helpTarget, setHelpTarget] = useState(null);
  const [helpText, setHelpText] = useState('');
  const [helpType, setHelpType] = useState(HELP_TYPES[0]);
  const [helpFile, setHelpFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/community')
      .then((response) => response.json())
      .then(setProjects)
      .catch(() => setError('社区数据暂时无法加载'));
  }, []);

  const publish = async () => {
    if (!newTitle.trim() || !newGoal.trim()) return;
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/community', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle.trim(), goal: newGoal.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || '发布失败');
      setProjects(data);
      setNewTitle('');
      setNewGoal('');
      setShowForm(false);
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  };

  const help = async () => {
    if (!helpText.trim() && !helpFile) return;
    setBusy(true);
    setError('');
    try {
      let attachment = null;
      if (helpFile) {
        const upload = await fetch('/api/community/uploads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream', 'X-File-Name': encodeURIComponent(helpFile.name) },
          body: helpFile,
        });
        attachment = await upload.json();
        if (!upload.ok) throw new Error(attachment.error || '图纸上传失败');
      }
      const response = await fetch(`/api/community/${helpTarget}/help`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: helpType, text: helpText.trim(), attachment }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || '助力提交失败');
      setProjects(data);
      setHelpTarget(null);
      setHelpText('');
      setHelpFile(null);
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="wf-community-page">
      <header className="topbar">
        <div className="brand"><Link to="/">万物改造工坊</Link> <span className="glow">WonderForge</span></div>
        <nav className="nav">
          <Link to="/combine">组合工作台</Link>
          <Link to="/demos">3D 演示</Link>
          <Link to="/community" className="active">社区</Link>
        </nav>
      </header>

      <span className="wf-orb o1" aria-hidden="true" />
      <span className="wf-orb o2" aria-hidden="true" />
      <span className="wf-orb o3" aria-hidden="true" />

      <main className="wf-body">
        <section className="wf-hero">
          <div className="wf-dust" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <span className="wf-eyebrow">社区助力 · 一起温柔</span>
          <h1 className="wf-line">
            你发起的构想，<br />
            由大家一起<em className="wf-hl mint">温柔点亮</em>。
          </h1>
          <p className="wf-sub">
            发布你的产品构想与预期目标，任何人都可以加模组、改 3D 图纸、提方案、供物料——<br className="wf-br" />
            把一个闪念，慢慢抱进现实。
          </p>
          <div style={{ marginTop: 30 }}>
            <button className="btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? '收起构想' : '+ 发起构想'}
            </button>
          </div>
        </section>

        {error && <div className="error-box" role="alert">{error}</div>}

        {showForm && (
          <div className="card" style={{ marginTop: 14 }}>
            <div className="section-label">构想标题</div>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="例如：夜光记忆杯" />
            <div className="section-label">预期目标</div>
            <textarea rows={3} value={newGoal} onChange={(e) => setNewGoal(e.target.value)} placeholder="描述你想做出什么样的产品、达成什么效果…" />
            <div style={{ marginTop: 14 }}>
              <button className="btn" onClick={publish} disabled={busy || !newTitle.trim() || !newGoal.trim()}>
                {busy ? '提交中…' : '发布到社区'}
              </button>
            </div>
          </div>
        )}

        <div className="grid3" style={{ gridTemplateColumns: '1fr' }}>
          {projects.length === 0 && !error && (
            <div className="empty-state">
              <div className="empty-state-title">还没有人发起构想</div>
              <div className="empty-state-sub">点上面的「发起构想」，让第一个闪念在这里发芽——大家会来帮你一起点亮它。</div>
            </div>
          )}
          {projects.map((p) => (
            <div key={p.id} className="card project-card" style={{ marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                <div className="project-title">{p.title}</div>
                <span className="chip status-chip" style={{ pointerEvents: 'none', fontSize: 12, whiteSpace: 'nowrap' }}>{p.status}</span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 12, margin: '6px 0' }}>发起人 {p.creator} · 组合：{p.combos.join(' + ') || '未填写'}</div>
              <div className="project-goal" style={{ margin: '6px 0 12px' }}>{p.goal}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>助力记录（{p.contributions.length}）</div>
              {p.contributions.length === 0 && <div style={{ color: 'var(--muted)', fontSize: 12 }}>还没有人助力，来当第一个吧</div>}
              {p.contributions.map((c, i) => (
                <div key={i} className="contrib-row">
                  <span className="chip" data-type={c.type} style={{ pointerEvents: 'none', fontSize: 11, padding: '2px 8px', whiteSpace: 'nowrap' }}>{c.type}</span>
                  <span style={{ color: 'var(--text)' }}>{c.who}：{c.text}</span>
                  {c.attachment && <a href={c.attachment.url} download={c.attachment.name} style={{ color: 'var(--accent2)' }}>{c.attachment.name}</a>}
                </div>
              ))}
              <div style={{ marginTop: 12 }}>
                <button className="btn ghost" onClick={() => { setHelpTarget(helpTarget === p.id ? null : p.id); setHelpFile(null); }}>我来助力</button>
              </div>
              {helpTarget === p.id && (
                <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <select value={helpType} onChange={(e) => setHelpType(e.target.value)}>
                    {HELP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input
                    type="text"
                    style={{ flex: 1, minWidth: 220 }}
                    value={helpText}
                    onChange={(e) => setHelpText(e.target.value)}
                    placeholder={helpType === '改 3D 图纸' ? '上传/描述你的图纸修改…' : '写下你的助力内容…'}
                  />
                  {helpType === '改 3D 图纸' && (
                    <input type="file" accept=".stl,.step,.stp,.3mf,.obj" onChange={(event) => setHelpFile(event.target.files?.[0] || null)} />
                  )}
                  <button className="btn" onClick={help} disabled={busy || (!helpText.trim() && !helpFile)}>
                    {busy ? '提交中…' : '提交助力'}
                  </button>
                </div>
              )}
            </div>
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
