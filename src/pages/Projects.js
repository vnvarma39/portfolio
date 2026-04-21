import './Projects.css';

/*
  ── ADD YOUR REAL PROJECTS HERE ──
  Replace/add entries with your actual GitHub repos.
  The "repo" field must match your exact GitHub repo name.
*/
const PROJECTS = [
  {
    name: 'OPSD_FR_Detection',
    description:
      'This project implements a complete forecasting and anomaly-detection pipeline for France (FR) electricity load data using OPSD Time Series (hourly) from 2018–2020.',
    tags: ['Python', 'Machine Learning', 'Time Series', 'Pandas'],
    repo: 'OPSD_FR_Detection',    // ← replace with your actual repo name
    status: 'Active',
  },
  {
    name: '🔬 Quantum Security Intelligence Platform (QSIP)',
    description:
      'Quantum-Assisted Vulnerability Graph Analysis + Quantum-Inspired Automated Patch Synthesis — a unified, end-to-end AI security pipeline that discovers multi-step attack paths across your entire software architecture and automatically synthesizes, validates, and proposes minimal patches.',
    tags: ['Python', 'Gen AI', 'Cybersecurity', 'LLM'],
    repo: 'quantum-security-platform',  // ← replace with your actual repo name
    status: 'Active',
  },
  {
    name: 'SDE Image Denoising',
    description:
      'Deep learning project using stochastic differential equations to denoise images with multiplicative/gamma noise, targeting ≥80% image restoration.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision'],
    repo: 'SDE-based-image-denoiser',   // ← replace with your actual repo name
    status: 'Research',
  },
  {
    name: 'Karnataka power prediction Study',
    description:
      'Forecasted Karnataka’s 2023 hourly electricity demand using an LSTM model trained on 2021–2022 data, achieving low error rates and exploring variants like MIMO and sliding windows.',
    tags: ['Python', 'Remote Sensing', 'Data Analysis', 'GIS'],
    repo: 'Power_Prediction',   // ← replace with your actual repo name
    status: 'Research',
  },
  {
    name: 'sweetcrypt-glycan-encryptor',
    description:
      'A unique encryption tool that combines strong cryptography with glycan-inspired visualization, created for the 418 Hackathon.',
    tags: ['Python', 'Streamlit', 'LLM', 'RAG', 'TTS'],
    repo: 'sweetcrypt-glycan-encryptor',        // ← replace with your actual repo name
    status: 'Complete',
  },
];

const GH_BASE = 'https://github.com/vnvarma39';

const STATUS_COLORS = {
  Active:   '#3fb950',
  Research: '#58a6ff',
  Complete: '#a5d6ff',
};

function ProjectCard({ project, index }) {
  const ghUrl = `${GH_BASE}/${project.repo}`;

  return (
    <div className="proj-card">
      <div className="proj-card-top">
        <div className="proj-header">
          <h3 className="proj-name">{project.name}</h3>
          <span
            className="proj-status"
            style={{ color: STATUS_COLORS[project.status] || '#7d8590' }}
          >
            ● {project.status}
          </span>
        </div>
        <p className="proj-desc">{project.description}</p>
      </div>
      <div className="proj-card-bottom">
        <div className="proj-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="proj-tag">{tag}</span>
          ))}
        </div>
        <a
          href={ghUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-sub">
          Things I've built — from AI research to full-stack applications.
          All source code available on{' '}
          <a href={GH_BASE} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
