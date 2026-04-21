import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({ x:0, y:0 });
  const rpos = useRef({ x:0, y:0 });
  const raf  = useRef(null);

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener('mousemove', move);

    const onEnter = () => document.body.classList.add('cur-hover');
    const onLeave = () => document.body.classList.remove('cur-hover');
    const targets = 'a, button, [data-cur]';

    const addListeners = () => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();

    const animate = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 5}px, ${pos.current.y - 5}px)`;
      }
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1;
      if (ring.current) {
        ring.current.style.transform = `translate(${rpos.current.x - 20}px, ${rpos.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cur-dot"  />
      <div ref={ring} className="cur-ring" />
      <style>{`
        body { cursor: none; }
        .cur-dot {
          width:10px; height:10px; background:var(--lime); border-radius:50%;
          position:fixed; top:0; left:0; pointer-events:none; z-index:99999;
          mix-blend-mode:exclusion;
          box-shadow: 0 0 12px var(--lime), 0 0 30px rgba(203,255,77,.3);
          transition: width .2s, height .2s;
        }
        .cur-ring {
          width:40px; height:40px; border:1px solid rgba(203,255,77,.35); border-radius:50%;
          position:fixed; top:0; left:0; pointer-events:none; z-index:99998;
          transition: width .25s, height .25s, border-color .25s;
        }
        body.cur-hover .cur-dot { width:16px; height:16px; background:var(--text); }
        body.cur-hover .cur-ring { width:56px; height:56px; border-color:rgba(255,255,255,.25); }
      `}</style>
    </>
  );
}
