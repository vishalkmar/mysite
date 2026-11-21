import { useEffect, useRef } from 'react';
import './MaskView.css';

export default function MaskView({
  variant = 'spotlight', text, image, animationSpeed = 0.4,
  as: Tag = 'p', className = '',
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let x = 50;
    let y = 50;
    let trail = [];
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      trail = [];
      root.removeAttribute('data-active');
      root.style.removeProperty('--mask-trail');
      root.style.setProperty('--mask-x', '50%');
      root.style.setProperty('--mask-y', '50%');
    };
    function move(event) {
      if (motion.matches || !pointer.matches || event.pointerType === 'touch') return;
      const bounds = root.getBoundingClientRect();
      x = (event.clientX - bounds.left) / bounds.width * 100;
      y = (event.clientY - bounds.top) / bounds.height * 100;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        root.dataset.active = 'true';
        root.style.setProperty('--mask-x', `${x}%`);
        root.style.setProperty('--mask-y', `${y}%`);
        if (variant === 'wipe') {
          trail.push([x, y]);
          if (trail.length > 28) trail.shift();
          root.style.setProperty('--mask-trail', trail.map(([px, py]) =>
            `radial-gradient(circle 90px at ${px}% ${py}%, #000 30%, transparent 100%)`).join(','));
        }
      });
    }
    root.addEventListener('pointermove', move, { passive: true });
    root.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
    pointer.addEventListener('change', reset);
    return () => {
      reset();
      root.removeEventListener('pointermove', move);
      root.removeEventListener('pointerleave', reset);
      motion.removeEventListener('change', reset);
      pointer.removeEventListener('change', reset);
    };
  }, [variant]);

  return (
    <Tag ref={rootRef} className={`mask-view mask-view--${variant} ${className}`}
      style={{ '--mask-duration': `${animationSpeed}s`, '--mask-image': image ? `url("${image}")` : undefined }}>
      <span className="mask-view__base">{text}</span>
      <span className="mask-view__reveal" aria-hidden="true">{text}</span>
    </Tag>
  );
}
