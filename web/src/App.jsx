import { Link } from 'react-router-dom';
import './demos.css';

const DEMOS = [
  {
    to: '/demo/phone',
    char: '声',
    title: '时光电话',
    poem: '思念，终于有了回音',
    mod: '复古电话机 × AI 声音模组',
    desc: '再次拨通那串熟悉的号码，听筒那头，是记忆里的声音在轻轻回应。',
    tags: ['旧物新生', 'AI 声音', '温柔陪伴'],
    theme: { c1: '#f0c4b2', c2: '#f7e3cd', ink: '#a2603f' },
  },
  {
    to: '/demo/comb',
    char: '藏',
    title: '声纹梳',
    poem: '平凡的日常，值得被珍藏',
    mod: '梳子 × 声音录制模组',
    desc: '每一次梳头，都是一次温柔的采集；声音悄悄留档，供来日慢慢回忆。',
    tags: ['日常采集', '声音留档', '家庭记忆'],
    theme: { c1: '#bfe0cc', c2: '#e4efdb', ink: '#4f7d66' },
  },
  {
    to: '/demo/ward',
    char: '愿',
    title: '心愿病房',
    poem: '来不及说的话，现在能听见了',
    mod: 'AI 视频 × 声音 × 信息提取',
    desc: '屏幕里的亲人，终于说出那句迟到已久的「我爱你」。',
    tags: ['心愿达成', 'AI 视频', '好好告别'],
    theme: { c1: '#c4cfee', c2: '#e5e7f5', ink: '#5d6ba0' },
  },
];

export default function App() {
  return (
    <div className="wf-demos">
      <header className="topbar">
        <div className="brand">万物改造工坊 <span className="glow">WonderForge</span></div>
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
        <section className="wf-hero">
          <div className="wf-dust" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <span className="wf-eyebrow">万物改造工坊 · 温柔的科技</span>
          <h1 className="wf-line">
            让原本有意义的事物，<em className="wf-hl rose">更加有意义</em>；<br />
            让本该是遗憾的事物，<em className="wf-hl mint">不再无能为力</em>。
          </h1>
          <p className="wf-sub">
            在这里，旧物与 AI 温柔相遇——<br className="wf-br" />
            承载记忆的老物件重新开口，来不及说出的话，终于被听见。
          </p>
        </section>

        <section className="wf-section">
          <div className="wf-section-head">
            <h2 className="wf-section-title">明星组合</h2>
            <span className="wf-section-note">三件被温柔点亮的小物</span>
          </div>
          <div className="wf-grid">
            {DEMOS.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="wf-card"
                style={{ '--c1': d.theme.c1, '--c2': d.theme.c2, '--ink': d.theme.ink }}
              >
                <span className="wf-badge">{d.char}</span>
                <div className="wf-card-text">
                  <div className="wf-card-title">{d.title}</div>
                  <div className="wf-poem">「{d.poem}」</div>
                  <span className="wf-mod">{d.mod}</span>
                  <p className="wf-desc">{d.desc}</p>
                </div>
                <div className="wf-tags">
                  {d.tags.map((t) => (
                    <span key={t} className="wf-tag">{t}</span>
                  ))}
                </div>
                <span className="wf-enter">进入演示<i className="wf-arrow" aria-hidden="true">→</i></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-community">
            <div className="wf-community-text">
              <h3 className="wf-community-title">你的构想，也可以被点亮</h3>
              <p className="wf-community-desc">
                发起你的产品构想、设置预期目标，大家以「加模组 / 改 3D 图纸 / 提方案」的方式一起助力——
                把一个闪念，变成一件可以抱在怀里的实物。
              </p>
            </div>
            <Link to="/community" className="wf-btn">进入社区<i className="wf-arrow" aria-hidden="true">→</i></Link>
          </div>
        </section>

        <footer className="wf-footer">
          <span className="wf-footer-brand">万物改造工坊 WonderForge</span>
          <span className="wf-footer-sep">·</span>
          <span className="wf-footer-motto">为每一件旧物，留住一段温柔的时光</span>
        </footer>
      </main>
    </div>
  );
}
