import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">
        <span className="nav-logo-dot" />
        <span>NV</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/" end className={({isActive}) => isActive ? 'nav-a active' : 'nav-a'}>Home</NavLink>
        <NavLink to="/projects"  className={({isActive}) => isActive ? 'nav-a active' : 'nav-a'}>Projects</NavLink>
        <a href="mailto:vnvarma39@gmail.com" className="nav-cta">Hire Me</a>
      </nav>
      <style>{`
        .nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          padding: 20px 48px;
          display:flex; align-items:center; justify-content:space-between;
          transition: all .4s var(--ease);
        }
        .nav--scrolled {
          background: rgba(7,8,12,.85);
          backdrop-filter: blur(20px);
          padding: 14px 48px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          display:flex; align-items:center; gap:8px;
          font-family:var(--mono); font-size:14px; font-weight:500;
          color:var(--text); letter-spacing:.1em; text-decoration:none;
        }
        .nav-logo:hover { color:var(--text); }
        .nav-logo-dot {
          width:8px; height:8px; border-radius:50%; background:var(--lime);
          box-shadow:0 0 10px var(--lime);
          animation: navpulse 2s ease-in-out infinite;
        }
        @keyframes navpulse {
          0%,100%{box-shadow:0 0 8px var(--lime)}
          50%{box-shadow:0 0 20px var(--lime),0 0 40px rgba(203,255,77,.3)}
        }
        .nav-links { display:flex; align-items:center; gap:6px; }
        .nav-a {
          font-size:13px; font-weight:500; color:var(--text-2);
          text-decoration:none; padding:7px 16px; border-radius:8px;
          transition: color .2s, background .2s; letter-spacing:.03em;
          border:1px solid transparent;
        }
        .nav-a:hover { color:var(--text); background:var(--ink-4); }
        .nav-a.active { color:var(--text); background:var(--ink-4); border-color:var(--border-2); }
        .nav-cta {
          font-size:12px; font-weight:600; letter-spacing:.06em;
          color:var(--ink); background:var(--lime); text-decoration:none;
          padding:8px 18px; border-radius:8px; margin-left:8px;
          transition: all .2s var(--ease);
          box-shadow:0 4px 16px rgba(203,255,77,.25);
        }
        .nav-cta:hover {
          background:var(--lime-dk); color:var(--ink);
          transform:translateY(-2px);
          box-shadow:0 8px 24px rgba(203,255,77,.35);
        }
        @media(max-width:600px){
          .nav { padding:16px 20px; }
          .nav--scrolled { padding:12px 20px; }
          .nav-cta { display:none; }
        }
      `}</style>
    </header>
  );
}
