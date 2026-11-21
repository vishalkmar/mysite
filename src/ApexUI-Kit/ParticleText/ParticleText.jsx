import { useEffect, useRef } from 'react';
import './ParticleText.css';

export default function ParticleText({
  text = 'NEXATECH', intro = 'assemble', replayOn = 'hover',
  accentColor = '#00e0ff', particleSize = 2, gap = 4, height = '24rem',
  fontFamily = 'Orbitron, sans-serif',
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let particles = [];
    let width = 0;
    let boxHeight = 0;
    let frame = 0;
    let elapsed = 0;
    let previous = 0;
    let visible = false;
    let played = false;
    let disposed = false;
    let fontReady = false;

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      root.removeAttribute('data-animating');
      canvas.style.opacity = '0';
    }

    function measure() {
      stop();
      width = root.clientWidth;
      boxHeight = root.clientHeight;
      if (!width || !boxHeight) return;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(boxHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const sample = document.createElement('canvas');
      sample.width = width;
      sample.height = boxHeight;
      const sampleCtx = sample.getContext('2d', { willReadFrequently: true });
      if (!sampleCtx) return;
      const lines = text.split('\n');
      sampleCtx.font = `700 100px ${fontFamily}`;
      const longest = Math.max(...lines.map(line => sampleCtx.measureText(line).width), 1);
      const fontSize = Math.min(180, width * 0.92 / longest * 100, boxHeight * .7 / (lines.length * 1.2));
      root.style.setProperty('--particle-font', `${fontSize}px`);
      sampleCtx.font = `700 ${fontSize}px ${fontFamily}`;
      sampleCtx.fillStyle = '#fff';
      sampleCtx.textAlign = 'center';
      sampleCtx.textBaseline = 'middle';
      lines.forEach((line, index) => sampleCtx.fillText(line, width / 2,
        boxHeight / 2 + (index - (lines.length - 1) / 2) * fontSize * 1.2));
      const pixels = sampleCtx.getImageData(0, 0, width, boxHeight).data;
      const step = Math.ceil(Math.max(gap, width < 768 ? 4 : 5));
      const candidates = [];
      for (let y = 0; y < boxHeight; y += step) {
        for (let x = 0; x < width; x += step) {
          if (pixels[(y * width + x) * 4 + 3] < 100) continue;
          const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
          const random = seed - Math.floor(seed);
          candidates.push({ x, y, startX: random * width,
            startY: (Math.cos(seed) * .5 + .5) * boxHeight,
            delay: random * .18 });
        }
      }
      const stride = Math.max(1, Math.ceil(candidates.length / (width < 768 ? 1100 : 2600)));
      particles = candidates.filter((_, index) => index % stride === 0);
    }

    function tick(now) {
      frame = 0;
      elapsed += Math.min(now - previous, 50);
      previous = now;
      const progress = Math.min(1, elapsed / 1800);
      ctx.clearRect(0, 0, width, boxHeight);
      ctx.fillStyle = accentColor;
      for (const point of particles) {
        const phase = Math.max(0, Math.min(1, (progress - point.delay) / (1 - point.delay)));
        const ease = 1 - (1 - phase) ** 3;
        ctx.globalAlpha = Math.min(1, phase * 5);
        ctx.fillRect(point.startX + (point.x - point.startX) * ease,
          point.startY + (point.y - point.startY) * ease, particleSize, particleSize);
      }
      ctx.globalAlpha = 1;
      if (progress < 1) frame = requestAnimationFrame(tick);
      else stop();
    }

    function play() {
      if (frame || !fontReady || !visible || document.hidden || motion.matches || !particles.length || intro !== 'assemble') return;
      played = true;
      elapsed = 0;
      previous = performance.now();
      root.dataset.animating = 'true';
      canvas.style.opacity = '1';
      frame = requestAnimationFrame(tick);
    }

    function onPointerEnter(event) {
      if (replayOn === 'hover' && event.pointerType === 'mouse') play();
    }
    function onVisibility() { if (document.hidden || motion.matches) stop(); }
    const resize = new ResizeObserver(() => { measure(); if (!played) play(); });
    resize.observe(root);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) stop();
      else if (!played) play();
    }, { threshold: .25 });
    observer.observe(root);
    document.fonts.ready.then(() => {
      if (disposed) return;
      fontReady = true;
      measure();
      if (!played) play();
    });
    root.addEventListener('pointerenter', onPointerEnter);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onVisibility);
    return () => {
      disposed = true;
      stop();
      resize.disconnect();
      observer.disconnect();
      root.removeEventListener('pointerenter', onPointerEnter);
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onVisibility);
    };
  }, [text, intro, replayOn, accentColor, particleSize, gap, fontFamily]);

  return (
    <div className="particle-text" ref={rootRef} style={{ height, '--particle-accent': accentColor, '--particle-family': fontFamily }}>
      <h2 className="particle-text__heading">{text}</h2>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
