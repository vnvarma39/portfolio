import { useEffect, useRef } from 'react';

export default function RevealText({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add('revealed');
        }, delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <>
      <div ref={ref} className={`reveal-wrap ${className}`}>{children}</div>
      <style>{`
        .reveal-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s var(--ease), transform .7s var(--ease);
        }
        .reveal-wrap.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
