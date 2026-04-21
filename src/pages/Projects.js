import TiltCard from '../components/TiltCard';
import RevealText from '../components/RevealText';
import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    name: 'Power_Prediction',
    tag: 'Sustainability · ML',
    color: '#22D3EE',
    icon: '⚡',
    desc: 'Forecasted Karnataka’s 2023 hourly electricity demand using an LSTM model trained on 2021–2022 data, achieving low error rates and exploring variants like MIMO and sliding windows.',
    tags: ['Python', 'LSTM', 'Time Series', 'Pandas'],
    github: 'https://github.com/vnvarma39/Power_Prediction',
    status: 'Active',
  },
  {
    num: '02',
    name: 'Polymorphic Honeypot',
    tag: 'Cybersecurity · Gen AI',
    color: '#F472B6',
    icon: '🍯',
    desc: 'A Gen-AI powered dynamic honeypot that adapts to deceive and log attackers in real time. Uses LLM-based response generation for realistic decoy interactions.',
    tags: ['Python', 'Gen AI', 'LLM', 'Security'],
    github: 'https://github.com/vnvarma39/Chimera',
    status: 'Active',
  },
  {
    num: '03',
    name: 'SDE Image Denoising',
    tag: 'Deep Learning · CV',
    color: '#A78BFA',
    icon: '🖼️',
    desc: 'Deep learning model using stochastic differential equations to denoise images with multiplicative/gamma noise, targeting ≥80% image restoration.',
    tags: ['PyTorch', 'SDE', 'Computer Vision', 'Deep Learning'],
    github: 'https://github.com/vnvarma39/SDE-based-image-denoiser',
    status: 'Research',
  },
  {
    num: '04',
    name: 'quantum-security-platform',
    tag: 'Remote Sensing · Research',
    color: '#34D399',
    icon: '🛰️',
    desc: 'Quantum-Assisted Vulnerability Graph Analysis + Quantum-Inspired Automated Patch Synthesis — a unified, end-to-end AI security pipeline that discovers multi-step attack paths across your entire software architecture and automatically synthesizes, validates, and proposes minimal patches',
    tags: ['Python', 'JavaScript', 'Quantum computing', 'Data Analysis'],
    github: 'https://github.com/vnvarma39/quantum-security-platform',
    status: 'Published',
  },
  {
    num: '05',
    name: 'sweetcrypt-glycan-encryptor',
    tag: 'LLM · Voice AI',
    color: '#FB923C',
    icon: '🤖',
    desc: 'A unique encryption tool that combines strong cryptography with glycan-inspired visualization, created for the 418 Hackathon.',
    tags: ['Python', 'Streamlit', 'LLM', 'RAG', 'TTS'],
    github: 'https://github.com/vnvarma39/sweetcrypt-glycan-encryptor',
    status: 'Complete',
  },
  {
    num: '06',
    name: 'Quantum-inspired_automatic_patc_synthesis',
    tag: 'ML Pipeline · CMAPSS',
    color: '#F59E0B',
    icon: '🔧',
    desc: 'A system that uses quantum-inspired algorithms to detect software vulnerabilities through graph analysis and automatically synthesize optimal security patches.',
    tags: ['Python', 'Scikit-learn', 'ML', 'Risk Scoring'],
    github: 'https://github.com/vnvarma39/Quantum-inspired_automatic_patc_synthesis',
    status: 'Complete',
  },
];

const STATUS_STYLES = {
  Active:    { color: '#22D3EE', bg: 'rgba(34,211,238,.1)'  },
  Research:  { color: '#A78BFA', bg: 'rgba(167,139,250,.1)' },
  Published: { color: '#34D399', bg: 'rgba(52,211,153,.1)'  },
  Complete:  { color: '#9CA3AF', bg: 'rgba(156,163,175,.1)' },
};

export default function Projects() {
  return (
    <div className="projects-page">

      <section className="proj-hero">
        <div className="proj-hero-bg" />
        <RevealText>
          <div className="section-label">// Deployed Work</div>
          <h1 className="proj-hero-title">
            Things I've<br/>
            <span>actually built.</span>
          </h1>
          <p className="proj-hero-sub">
             projects across AI, ML, computer vision —
            all source code on{' '}
            <a href="https://github.com/vnvarma39" target="_blank" rel="noopener noreferrer" data-cur>
              github.com/vnvarma39 ↗
            </a>
          </p>
        </RevealText>
      </section>

      <section className="proj-grid-section">
        <div className="proj-grid">
          {PROJECTS.map((p, i) => {
            const s = STATUS_STYLES[p.status] || STATUS_STYLES.Complete;
            return (
              <RevealText key={i} delay={i * 80}>
                <TiltCard className="proj-card">
                  <div className="proj-card-num" style={{ color: p.color }}>{p.num}</div>
                  <div className="proj-card-top">
                    <span className="proj-icon">{p.icon}</span>
                    <div>
                      <h3 className="proj-name">{p.name}</h3>
                      <span className="proj-tag-line">{p.tag}</span>
                    </div>
                    <span className="proj-status"
                      style={{ color: s.color, background: s.bg, border: `1px solid ${s.color}33` }}>
                      {p.status}
                    </span>
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="proj-tech" style={{ '--c': p.color }}>{t}</span>
                    ))}
                  </div>
                  <div className="proj-footer">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="proj-gh" data-cur
                       style={{ '--c': p.color }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                  <div className="proj-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${p.color}12, transparent 70%)` }} />
                </TiltCard>
              </RevealText>
            );
          })}
        </div>
      </section>

      <footer className="home-footer" style={{maxWidth:'1000px',margin:'0 auto',padding:'0 48px 48px'}}>
        <div className="footer-line" />
        <div className="footer-inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px'}}>
          <span style={{fontFamily:'var(--mono)',fontSize:'11px',color:'var(--text-3)',letterSpacing:'.06em'}}>
            © 2025 Nikhil Varma · Mahindra University
          </span>
          <div style={{display:'flex',gap:'20px'}}>
            {['https://github.com/vnvarma39','https://linkedin.com/in/vnvarma39','mailto:vnvarma39@gmail.com'].map((href,i)=>(
              <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined}
                 rel="noopener noreferrer" data-cur
                 style={{fontFamily:'var(--mono)',fontSize:'11px',letterSpacing:'.08em',color:'var(--text-3)',textDecoration:'none',transition:'color .2s'}}
                 onMouseEnter={e=>e.target.style.color='var(--lime)'}
                 onMouseLeave={e=>e.target.style.color='var(--text-3)'}>
                {['GitHub','LinkedIn','Email'][i]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
