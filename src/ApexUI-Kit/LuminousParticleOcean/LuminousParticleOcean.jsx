import { memo, useEffect, useRef } from 'react';

// A projected particle grid: no WebGL context, physics, or React frame updates.
const LuminousParticleOcean = memo(function LuminousParticleOcean({
  sphereCount = 100,
  sphereColor = '#00aaff',
  interactionStrength = 15,
  separation = 4,
  bgColor1 = 'var(--site-bg, #020617)',
  bgColor2 = '#050915',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    let width = 0;
    let height = 0;
    let points = [];
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let visible = false;
    let pointerX = 0;
    let pointerY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let pointerActive = false;
    let hover = 0;

    function draw() {
      context.clearRect(0, 0, width, height);
      const time = elapsed * 0.00045;
      const sinTime = Math.sin(time);
      const cosTime = Math.cos(time);
      const sinSlow = Math.sin(time * 0.7);
      const cosSlow = Math.cos(time * 0.7);
      offsetX += (pointerX - offsetX) * 0.16;
      offsetY += (pointerY - offsetY) * 0.16;
      hover += ((pointerActive && !reducedMotion.matches ? 1 : 0) - hover) * 0.12;
      const radius = Math.min(260, width * 0.3);
      const radiusSquared = radius * radius;
      context.fillStyle = sphereColor;

      for (const point of points) {
        const wave = (point.sinX * cosTime + point.cosX * sinTime) * 0.65
          + (point.sinZ * cosSlow + point.cosZ * sinSlow) * 0.35;
        let x = point.x;
        let y = point.y + wave * point.amplitude;
        let influence = 0;
        if (hover > 0.001) {
          const dx = x - offsetX;
          const dy = y - offsetY;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < radiusSquared) {
            const distance = Math.sqrt(distanceSquared);
            influence = (1 - distance / radius) ** 2 * hover;
            const force = influence * interactionStrength * 5;
            x += dx / Math.max(distance, 1) * force;
            y += dy / Math.max(distance, 1) * force
              + Math.sin(distance * 0.035 - time * 5) * influence * 14;
          }
        }
        context.globalAlpha = Math.min(1, point.opacity + influence * 0.5);
        const size = point.size + influence * 1.5;
        context.fillRect(x, y, size, size);
      }
      context.globalAlpha = 1;
    }

    function tick(now) {
      frame = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      // Cap painting at 30 fps; the slow wave remains smooth with less CPU work.
      if (now - lastTime >= 1000 / 30) {
        elapsed += Math.min(now - lastTime, 64);
        lastTime = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = performance.now();
      if (visible && !document.hidden) {
        draw();
        if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
      }
    }

    function resize() {
      width = host.clientWidth;
      height = host.clientHeight;
      const compact = width < 768 || coarsePointer.matches;
      const ratio = Math.min(window.devicePixelRatio || 1, compact ? 1 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const columns = Math.max(20, Math.min(sphereCount, compact ? 55 : 100));
      const rows = compact ? 48 : 85;
      const spacing = Math.max(1, separation) / 4;
      points = [];
      for (let row = 0; row < rows; row += 1) {
        const depth = row / (rows - 1);
        const scale = 1 / (1 + depth * 7);
        for (let column = 0; column < columns; column += 1) {
          // Deterministic jitter keeps the ocean organic without per-frame random work.
          const jitter = Math.sin(column * 127.1 + row * 311.7);
          const x = width * 0.5 + ((column / (columns - 1) - 0.5) * width * 8
            * spacing + jitter * 12) * scale;
          if (x < -20 || x > width + 20) continue;
          const phaseX = column * 0.24;
          const phaseZ = row * 0.3;
          points.push({
            x,
            y: height * 0.16 + height * 0.88 * scale + jitter * 5 * scale,
            scale,
            size: Math.max(0.65, 2.3 * scale),
            opacity: 0.35 + scale * 0.55,
            amplitude: height * 0.085 * scale,
            sinX: Math.sin(phaseX),
            cosX: Math.cos(phaseX),
            sinZ: Math.sin(phaseZ),
            cosZ: Math.cos(phaseZ),
          });
        }
      }
      draw();
    }

    function onPointerMove(event) {
      if (coarsePointer.matches || reducedMotion.matches) return;
      const bounds = host.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
      if (!pointerActive) {
        offsetX = pointerX;
        offsetY = pointerY;
      }
      pointerActive = true;
    }

    function onPointerLeave() {
      pointerActive = false;
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);
    host.addEventListener('pointermove', onPointerMove, { passive: true });
    host.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [sphereCount, sphereColor, interactionStrength, separation]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: `linear-gradient(${bgColor2}, ${bgColor1})`,
      }}
    />
  );
});

export default LuminousParticleOcean;
