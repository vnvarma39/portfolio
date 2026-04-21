import './Projects.css';

/*
  ── ADD YOUR REAL PROJECTS HERE ──
  Replace/add entries with your actual GitHub repos.
  The "repo" field must match your exact GitHub repo name.
*/
const PROJECTS = [
  {
    name: 'Smart Grid AI',
    description:
      'AI project for electricity demand forecasting and distribution optimization across TSSPDCL zones. Uses time series models and ML pipelines to predict load and reduce wastage.',
    tags: ['Python', 'Machine Learning', 'Time Series', 'Pandas'],
    repo: 'smart-grid-ai',    // ← replace with your actual repo name
    status: 'Active',
  },
  {
    name: 'Polymorphic Honeypot',
    description:
      'A Gen-AI powered dynamic honeypot system that adapts its behaviour to deceive and log attackers. Uses LLM-based response generation for realistic decoy interactions.',
    tags: ['Python', 'Gen AI', 'Cybersecurity', 'LLM'],
    repo: 'polymorphic-honeypot',  // ← replace with your actual repo name
    status: 'Active',
  },
  {
    name: 'SDE Image Denoising',
    description:
      'Deep learning project using stochastic differential equations to denoise images with multiplicative/gamma noise, targeting ≥80% image restoration.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision'],
    repo: 'sde-image-denoising',   // ← replace with your actual repo name
    status: 'Research',
  },
  {
    name: 'Hyderabad LST Study',
    description:
      'Research project correlating biophysical and socio-economic factors with Land Surface Temperatures in Hyderabad using Landsat 8 summer 2024 data.',
    tags: ['Python', 'Remote Sensing', 'Data Analysis', 'GIS'],
    repo: 'hyderabad-lst-study',   // ← replace with your actual repo name
    status: 'Research',
  },
  {
    name: 'BharatGPT+',
    description:
      'A Streamlit-based AI assistant integrating Ollama backend, Dify prompt logic, voice I/O (TTS + ASR), and optional RAG for Indian language support.',
    tags: ['Python', 'Streamlit', 'LLM', 'RAG', 'TTS'],
    repo: 'bharatgpt-plus',        // ← replace with your actual repo name
    status: 'Complete',
  },
  {
    name: 'Predictive Maintenance (CMAPSS)',
    description:
      'Multi-phase ML project on the CMAPSS dataset involving clustering, classification, regression, and risk scoring for aircraft engine predictive maintenance.',
    tags: ['Python', 'Scikit-learn', 'ML', 'Jupyter'],
    repo: 'predictive-maintenance', // ← replace with your actual repo name
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
