import { useEffect, useRef } from "react";

export default function GlobalDotParticles({ animationSpeed = 0.006, paused = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (paused) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let particles = [];
    let frame = 0;
    let previous = 0;
    let time = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(innerWidth * ratio);
      canvas.height = Math.round(innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      particles = [];
      context.clearRect(0, 0, innerWidth, innerHeight);
    }

    function animate(now) {
      frame = 0;
      const delta = previous ? Math.min(now - previous, 40) : 16;
      previous = now;
      const step = delta / 16;
      time += animationSpeed * step;
      context.clearRect(0, 0, innerWidth, innerHeight);
      particles = particles.filter(particle => {
        particle.life += delta;
        particle.x += particle.vx * step + Math.sin(time + particle.angle) * 0.3;
        particle.y += particle.vy * step;
        particle.vy += 0.02 * step;
        particle.vx *= 0.995 ** step;
        particle.vy *= 0.995 ** step;
        const progress = particle.life / particle.maxLife;
        if (progress >= 1) return false;
        context.globalAlpha = (1 - progress) * 0.85;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * (1 - progress * 0.3), 0, Math.PI * 2);
        context.fill();
        return particle.x > -80 && particle.x < innerWidth + 80 && particle.y < innerHeight + 80;
      });
      context.globalAlpha = 1;
      if (particles.length) frame = requestAnimationFrame(animate);
      else { context.clearRect(0, 0, innerWidth, innerHeight); previous = 0; }
    }

    function click(event) {
      if (document.hidden || motion.matches || event.target?.closest?.("[data-pause-pointer-effects]")) return;
      const color = `hsl(${Math.floor(Math.random() * 360)}, 85%, 65%)`;
      // Bound rapid clicks, and run no frames at all until a click occurs.
      particles = particles.slice(-100);
      for (let index = 0; index < 32; index++) {
        const angle = Math.PI * 2 * index / 32;
        const speed = 2 + Math.random() * 4;
        particles.push({ x: event.clientX, y: event.clientY,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 3, angle, color, life: 0,
          maxLife: 1600 + Math.random() * 1600 });
      }
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function visibility() { if (document.hidden || motion.matches) stop(); }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", click);
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", visibility);
    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", click);
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", visibility);
    };
  }, [paused, animationSpeed]);

  return <canvas ref={canvasRef} aria-hidden="true" data-pointer-effect="click" data-paused={paused}
    style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 9998,
      pointerEvents: "none", visibility: paused ? "hidden" : "visible" }} />;
}
