import { useEffect, useRef, useState } from 'react';
import NeuralCanvas from '../components/NeuralCanvas';
import TiltCard from '../components/TiltCard';
import RevealText from '../components/RevealText';
import './Home.css';

/* ─── DATA ─── */
const SKILLS = [
  { name:'Python',         color:'#3B82F6' },
  { name:'Machine Learning', color:'#8B5CF6' },
  { name:'Deep Learning',  color:'#A78BFA' },
  { name:'Computer Vision',color:'#06B6D4' },
  { name:'PyTorch',        color:'#EF4444' },
  { name:'TensorFlow',     color:'#F59E0B' },
  { name:'Scikit-learn',   color:'#10B981' },
  { name:'Pandas',         color:'#6366F1' },
  { name:'NumPy',          color:'#14B8A6' },
  { name:'React',          color:'#38BDF8' },
  { name:'JavaScript',     color:'#FBBF24' },
  { name:'SQL',            color:'#F472B6' },
  { name:'Git',            color:'#FB923C' },
  { name:'Docker',         color:'#0EA5E9' },
  { name:'Jupyter',        color:'#E97627' },
];

const INTERESTS = [
  { icon:'🧠', text:'Machine Learning & Deep Learning' },
  { icon:'👁️', text:'Computer Vision' },
  { icon:'⚡', text:'SDE-based Models & Scalable AI' },
  { icon:'🌱', text:'Smart Grid & Sustainability AI' },
  { icon:'📈', text:'Time Series Analysis' },
  { icon:'🔬', text:'Applied AI/ML Research' },
];

const DETAILS = [
  { k:'Phone',          v:'+91 XXXXX XXXXX' },
  { k:'Personal Email', v:'vnvarma39@gmail.com',    href:'mailto:vnvarma39@gmail.com' },
  { k:'College Email',  v:'nikhil@mahindrauniversity.edu.in', href:'mailto:nikhil@mahindrauniversity.edu.in' },
  { k:'University',     v:'Mahindra University, Hyderabad' },
  { k:'Location',       v:'Hyderabad, India' },
  { k:'GitHub',         v:'github.com/vnvarma39', href:'https://github.com/vnvarma39' },
];

/* ─── TYPEWRITER ─── */
function Typewriter({ words, speed = 90, pause = 1800 }) {
  const [displayed, setDisplayed] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, ci + 1));
        if (ci + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCi(c => c + 1);
        }
      } else {
        setDisplayed(word.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setWi(w => (w + 1) % words.length);
          setCi(0);
        } else {
          setCi(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [ci, wi, deleting, words, speed, pause]);

  return (
    <span className="typewriter">
      {displayed}
      <span className="tw-cursor">|</span>
    </span>
  );
}

/* ─── SKILL BADGE ─── */
function SkillBadge({ name, color }) {
  const ref = useRef(null);
  const onMove = e => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.08) translateZ(10px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    el.style.transform = '';
  };
  return (
    <div
      ref={ref}
      className="skill-badge"
      style={{ '--clr': color, transition:'transform .3s var(--ease)' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="skill-dot" />
      {name}
    </div>
  );
}

/* ─── HOME ─── */
export default function Home() {
  const heroRef = useRef(null);

  // Parallax on avatar glow
  useEffect(() => {
    const fn = e => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth  - .5) * 18;
      const y = (e.clientY / window.innerHeight - .5) * 18;
      heroRef.current.style.setProperty('--px', `${x}px`);
      heroRef.current.style.setProperty('--py', `${y}px`);
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <div className="home">

      {/* ══ HERO ══ */}
      <section className="hero" ref={heroRef}>
        <NeuralCanvas />

        {/* Ambient gradient orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            <span className="hero-name-line">Nikhil</span>
            <span className="hero-name-line accent">Varma</span>
          </h1>

          <div className="hero-role">
            <Typewriter words={[
              'AI/ML Engineer',
              'Deep Learning Researcher',
              'Computer Vision Engineer',
              'Smart Grid AI Developer',
            ]} />
          </div>

          <p className="hero-bio">
            Undergraduate at <strong>Mahindra University</strong>, building intelligent systems
            that solve real-world problems — from sustainability to security.
          </p>

          <div className="hero-actions">
            <a href="#projects-section" className="btn-primary" data-cur>
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="https://github.com/vnvarma39" target="_blank" rel="noopener noreferrer" className="btn-ghost" data-cur>
              GitHub ↗
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat"><span className="stat-n">11</span><span className="stat-l">Repos</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-n">6+</span><span className="stat-l">Certs</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-n">3+</span><span className="stat-l">Research Projects</span></div>
          </div>
        </div>

        {/* Avatar card */}
        <TiltCard className="hero-avatar-wrap">
          <div className="hero-avatar-glow" />
          <img
            className="hero-avatar"
            src="https://avatars.githubusercontent.com/vnvarma39"
            alt="Nikhil Varma"
            onError={e => { e.target.src='https://github.com/identicons/vnvarma39.png'; }}
          />
          <div className="avatar-overlay">
            <span className="avatar-name">@vnvarma39</span>
            <span className="avatar-uni">Mahindra University</span>
          </div>
        </TiltCard>

        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="section about-section" id="about-section">
        <RevealText>
          <div className="section-label">// 01 — About</div>
          <h2 className="section-heading">Who I Am</h2>
        </RevealText>

        <div className="about-grid">
          <RevealText delay={100}>
            <TiltCard className="about-card glass-card">
              <div className="about-card-icon">🧑‍💻</div>
              <p className="about-text">
                Hi, I'm <strong>Nikhil</strong> — an AI/ML enthusiast and undergraduate at
                Mahindra University, passionate about building intelligent systems that
                solve real-world problems.
              </p>
              <p className="about-text" style={{marginTop:'12px'}}>
                I'm currently working on AI projects in <strong>sustainability</strong>,{' '}
                <strong>smart grids</strong>, and ML research. I enjoy turning complex
                research ideas into practical prototypes.
              </p>
              <div className="about-links">
                <a href="https://github.com/vnvarma39" target="_blank" rel="noopener noreferrer" className="about-link" data-cur>
                  🐙 GitHub
                </a>
                <a href="https://linkedin.com/in/vnvarma39" target="_blank" rel="noopener noreferrer" className="about-link" data-cur>
                  💼 LinkedIn
                </a>
                <a href="mailto:vnvarma39@gmail.com" className="about-link" data-cur>
                  ✉️ Email
                </a>
              </div>
            </TiltCard>
          </RevealText>

          <RevealText delay={180}>
            <div className="details-stack">
              {DETAILS.map((d, i) => (
                <div className="detail-row" key={i}>
                  <span className="detail-key">{d.k}</span>
                  <span className="detail-val">
                    {d.href
                      ? <a href={d.href} target={d.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" data-cur>{d.v}</a>
                      : d.v}
                  </span>
                </div>
              ))}
            </div>
          </RevealText>
        </div>
      </section>

      {/* ══ INTERESTS ══ */}
      <section className="section" id="interests-section">
        <RevealText>
          <div className="section-label">// 02 — Research</div>
          <h2 className="section-heading">Interests</h2>
        </RevealText>
        <div className="interests-grid">
          {INTERESTS.map((item, i) => (
            <RevealText key={i} delay={i * 60}>
              <TiltCard className="interest-card glass-card">
                <span className="interest-icon">{item.icon}</span>
                <span className="interest-text">{item.text}</span>
              </TiltCard>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="section" id="skills-section">
        <RevealText>
          <div className="section-label">// 03 — Arsenal</div>
          <h2 className="section-heading">Skills</h2>
        </RevealText>
        <RevealText delay={100}>
          <div className="skills-grid">
            {SKILLS.map((s, i) => <SkillBadge key={i} {...s} />)}
          </div>
        </RevealText>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="home-footer">
        <div className="footer-line" />
        <div className="footer-inner">
          <span className="footer-copy">© 2025 Nikhil Varma · Mahindra University</span>
          <div className="footer-links">
            <a href="https://github.com/vnvarma39" target="_blank" rel="noopener noreferrer" data-cur>GitHub</a>
            <a href="https://linkedin.com/in/vnvarma39" target="_blank" rel="noopener noreferrer" data-cur>LinkedIn</a>
            <a href="mailto:vnvarma39@gmail.com" data-cur>Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
