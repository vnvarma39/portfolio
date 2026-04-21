import { useRef } from 'react';

export default function TiltCard({ children, className = '', style = {} }) {
  const ref = useRef(null);

  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
    el.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(0,0,0,.4), 0 0 0 1px rgba(203,255,77,.12)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    el.style.boxShadow = '';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition:'transform .4s var(--ease), box-shadow .4s var(--ease)' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
