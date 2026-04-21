import './Home.css';

const PERSONAL = {
  name:         'Nikhil Varma',
  role:         'AI/ML Engineer · Undergraduate at Mahindra University',
  phone:        '+91 XXXXX XXXXX',
  emailPersonal:'vnvarma39@gmail.com',
  emailCollege: 'nikhil.varma@mahindrauniversity.edu.in',
  github:       'https://github.com/vnvarma39',
  linkedin:     'https://linkedin.com/in/vnvarma39',
  location:     'Hyderabad, India',
  avatar:       '%PUBLIC_URL%/profile.jpg',
  bio: `Hi, I'm Nikhil — an AI/ML enthusiast and undergraduate at Mahindra University, passionate about building intelligent systems that solve real-world problems.\n\nI'm currently working on AI projects in sustainability, smart grids, and ML research. I enjoy turning complex research ideas into practical prototypes.`,
};

const SKILLS = [
  'Python', 'Machine Learning', 'Deep Learning', 'Computer Vision',
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
  'React', 'JavaScript', 'SQL', 'Git', 'Docker', 'Jupyter',
];

const INTERESTS = [
  'Machine Learning & Deep Learning',
  'Computer Vision',
  'Scalable AI',
  'Sustainability AI',
  'Time Series Analysis',
  'Applied AI/ML Research',
];

const DETAILS = [
  { label: 'Name',           value: 'Nikhil Varma' },
  { label: 'Phone',          value: '+91 XXXXX XXXXX' },
  { label: 'Personal Email', value: 'vnvarma39@gmail.com',                        href: 'mailto:vnvarma39@gmail.com' },
  { label: 'College Email',  value: 'nikhil.varma@mahindrauniversity.edu.in',      href: 'mailto:nikhil.varma@mahindrauniversity.edu.in' },
  { label: 'University',     value: 'Mahindra University, Hyderabad' },
  { label: 'Location',       value: 'Hyderabad, India' },
  { label: 'GitHub',         value: 'github.com/vnvarma39',   href: 'https://github.com/vnvarma39' },
  { label: 'LinkedIn',       value: 'linkedin.com/in/vnvarma39', href: 'https://linkedin.com/in/vnvarma39' },
];

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <span className="section-title">{title}</span>
      <div className="section-line" />
    </div>
  );
}

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={PERSONAL.avatar}
            alt={PERSONAL.name}
            onError={e => {
              e.target.onerror = null;
              e.target.src = 'https://github.com/identicons/vnvarma39.png';
            }}
          />
          <div className="available-badge">
            <div className="badge-dot" />
            Open to work
          </div>
        </div>
        <div className="hero-text">
          <div className="hero-overline">AI / ML Engineer</div>
          <h1 className="hero-name">
            Nikhil <span>Varma</span>
          </h1>
          <p className="hero-role">{PERSONAL.role}</p>
          <div className="hero-links">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--primary">
              GitHub ↗
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--secondary">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="About Me" />
        <div className="about-card">
          <p className="about-bio">{PERSONAL.bio}</p>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Personal Details" />
        <div className="details-grid">
          {DETAILS.map((d, i) => (
            <div className="detail-item" key={i}>
              <div className="detail-label">{d.label}</div>
              <div className="detail-value">
                {d.href
                  ? <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{d.value}</a>
                  : d.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Research Interests" />
        <ul className="interests-list">
          {INTERESTS.map((item, i) => (
            <li className="interest-item" key={i}>
              <span className="interest-dot">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionHeader title="Skills" />
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <span className="skill-badge" key={i}>{skill}</span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;