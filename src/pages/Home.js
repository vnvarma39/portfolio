import './Home.css';

/* ── DATA — update these with your real details ── */
const PERSONAL = {
  name:         'Nikhil Varma',
  role:         'AI/ML Engineer · Undergraduate',
  university:   'Mahindra University, Hyderabad',
  phone:        '+91 XXXXX XXXXX',          // ← replace
  emailPersonal:'vnvarma39@gmail.com',       // ← replace if different
  emailCollege: 'nikhil.varma@mahindrauniversity.edu.in', // ← replace
  github:       'https://github.com/vnvarma39',
  linkedin:     'https://linkedin.com/in/vnvarma39', // ← replace
  location:     'Hyderabad, India',
  avatar:       'https://avatars.githubusercontent.com/vnvarma39',
  bio: `Hi, I'm Nikhil — an AI/ML enthusiast and undergraduate at Mahindra University,
passionate about building intelligent systems that solve real-world problems.
I'm currently working on AI projects in sustainability, smart grids, and ML research.
I enjoy turning complex research ideas into practical prototypes.`,
};

const SKILLS = [
  'Python', 'Machine Learning', 'Deep Learning',
  'Computer Vision', 'PyTorch', 'TensorFlow',
  'Scikit-learn', 'Pandas', 'NumPy',
  'React', 'JavaScript', 'SQL',
  'Git', 'Docker', 'Jupyter Notebooks',
];

const INTERESTS = [
  'Machine Learning & Deep Learning',
  'Computer Vision',
  'SDE-based Models & Scalable AI Systems',
  'Smart Grid & Sustainability AI',
  'Time Series Analysis',
  'Applied AI/ML Research',
];

function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <img
          className="avatar"
          src={PERSONAL.avatar}
          alt={PERSONAL.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://github.com/identicons/vnvarma39.png';
          }}
        />
        <div className="hero-text">
          <h1 className="hero-name">{PERSONAL.name}</h1>
          <p className="hero-role">{PERSONAL.role}</p>
          <p className="hero-uni">{PERSONAL.university}</p>
          <div className="hero-links">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--primary"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ABOUT ME ── */}
      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p className="about-bio">{PERSONAL.bio}</p>
      </section>

      <div className="divider" />

      {/* ── PERSONAL DETAILS ── */}
      <section className="section">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Name</span>
            <span className="detail-value">{PERSONAL.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{PERSONAL.phone}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Personal Email</span>
            <span className="detail-value">
              <a href={`mailto:${PERSONAL.emailPersonal}`}>
                {PERSONAL.emailPersonal}
              </a>
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">College Email</span>
            <span className="detail-value">
              <a href={`mailto:${PERSONAL.emailCollege}`}>
                {PERSONAL.emailCollege}
              </a>
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">University</span>
            <span className="detail-value">{PERSONAL.university}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <span className="detail-value">{PERSONAL.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">GitHub</span>
            <span className="detail-value">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
                github.com/vnvarma39
              </a>
            </span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section">
        <h2 className="section-title">Research Interests</h2>
        <ul className="interests-list">
          {INTERESTS.map((item, i) => (
            <li key={i} className="interest-item">
              <span className="interest-dot">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      {/* ── SKILLS ── */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <span key={i} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
