'use client';
import { useEffect, useRef, useCallback } from "react";

export default function GlobalDotParticles({
  animationSpeed = 0.006,
}) {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const timeRef = useRef(0);
  const particles = useRef([]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }, []);

  // 🔥 Random bright color (HSL based – looks premium)
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 85%, 65%)`;
  };

  const burstAt = useCallback((x, y) => {
    const color = getRandomColor(); // 👈 color fixed per click
    const numParticles = 25 + Math.random() * 15;

    for (let i = 0; i < numParticles; i++) {
      const angle =
        (Math.PI * 2 * i) / numParticles + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      const size = 1 + Math.random() * 3;

      particles.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 2000 + Math.random() * 3000,
        size,
        angle,
        color, // ✅ store color per particle
      });
    }

    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;

      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 4000 + Math.random() * 2000,
        size: 2 + Math.random() * 2,
        angle,
        color,
      });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += animationSpeed;

    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    particles.current = particles.current.filter((p) => {
      p.life += 16;
      p.x += p.vx;
      p.y += p.vy;

      p.vy += 0.02;
      p.vx *= 0.995;
      p.vy *= 0.995;

      p.x += Math.sin(timeRef.current + p.angle) * 0.3;
      p.y += Math.cos(timeRef.current + p.angle * 0.7) * 0.2;

      const t = p.life / p.maxLife;
      const alpha = Math.max(0, (1 - t) * 0.85);
      const r = p.size * (1 - t * 0.3);

      if (alpha > 0) {
        ctx.fillStyle = p.color.replace(")", `, ${alpha})`).replace("hsl", "hsla");
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      return (
        p.life < p.maxLife &&
        p.x > -80 &&
        p.x < width + 80 &&
        p.y > -80 &&
        p.y < height + 80
      );
    });

    requestIdRef.current = requestAnimationFrame(animate);
  }, [animationSpeed]);

  useEffect(() => {
    resizeCanvas();

    const onResize = () => resizeCanvas();
    const onClick = (e) => burstAt(e.clientX, e.clientY);

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);

      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
      requestIdRef.current = null;
      timeRef.current = 0;
      particles.current = [];
    };
  }, [resizeCanvas, burstAt, animate]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none", // website clicks safe
      }}
    />
  );
}
