import { useEffect, useRef } from "react";

// Hyperspace / warp-speed streaks flying out of the centre.
// Plain canvas 2D (no WebGL), so it starts instantly and stays cheap.
// [r, g, b] — white, lilac, violet, indigo-violet, pink
const COLORS = [
  [255, 255, 255], [255, 255, 255], [243, 232, 255], [216, 180, 254],
  [167, 139, 250], [124, 92, 255], [99, 70, 255], [244, 172, 230],
];
const NEAR = 0.025; // closest depth before a streak respawns far away
const TRAIL = 1.5; // tail depth = head depth × TRAIL → longer streaks near the edges

export default function WarpSpeed({ count = 420, speed = 0.42, className = "", style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const background =
      getComputedStyle(document.documentElement).getPropertyValue("--site-bg").trim() || "#020617";

    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;
    let previous = 0;
    let visible = false;
    let stars = [];

    function spawn(star, depth) {
      // Leave the middle empty (tunnel look) so the heading stays readable.
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.14 + Math.random() ** 0.8 * 1.5;
      star.x = Math.cos(angle) * radius;
      star.y = Math.sin(angle) * radius;
      star.z = depth;
      const [r, g, b] = COLORS[(Math.random() * COLORS.length) | 0];
      star.clear = `rgba(${r},${g},${b},0)`;
      star.mid = `rgba(${r},${g},${b},0.45)`;
      star.solid = `rgb(${r},${g},${b})`;
      star.size = 0.5 + Math.random() * 1.6;
      return star;
    }

    function resize() {
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.lineCap = "round";
      // Fewer streaks on small screens.
      const wanted = Math.max(160, Math.round(count * Math.min(1, (width * height) / (1400 * 760))));
      if (stars.length !== wanted) {
        stars = Array.from({ length: wanted }, () => spawn({}, NEAR + Math.random() * (1 - NEAR)));
      }
    }

    function draw(dt) {
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.max(width, height) * 0.5;

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const star of stars) {
        star.z -= speed * dt;
        if (star.z < NEAR) spawn(star, 1);

        const head = star.z;
        const tail = Math.min(1, head * TRAIL + 0.01);
        const hx = cx + (star.x / head) * scale * 0.18;
        const hy = cy + (star.y / head) * scale * 0.18;
        const tx = cx + (star.x / tail) * scale * 0.18;
        const ty = cy + (star.y / tail) * scale * 0.18;

        if (hx < -60 || hx > width + 60 || hy < -60 || hy > height + 60) {
          // Already flew past the edge: send it back to the far end.
          if (tx < -60 || tx > width + 60 || ty < -60 || ty > height + 60) spawn(star, 1);
          continue;
        }

        const near = 1 - head; // 0 far → 1 at the camera
        const alpha = Math.min(1, near / 0.35);
        const lineWidth = star.size * (0.3 + near * near * 3.4);

        // Tapered streak: invisible tail → bright head.
        const gradient = ctx.createLinearGradient(tx, ty, hx, hy);
        gradient.addColorStop(0, star.clear);
        gradient.addColorStop(0.55, star.mid);
        gradient.addColorStop(1, star.solid);
        ctx.strokeStyle = gradient;

        // Soft glow pass, then a bright core.
        ctx.globalAlpha = alpha * 0.18;
        ctx.lineWidth = lineWidth * 3.5;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
      }
    }

    function tick(now) {
      frame = 0;
      const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 1 / 60;
      previous = now;
      draw(dt);
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick);
    }

    function start() {
      if (frame || !visible || document.hidden || motion.matches) return;
      previous = 0;
      frame = requestAnimationFrame(tick);
    }

    function stop() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    }

    function sync() {
      if (motion.matches) {
        stop();
        draw(0); // reduced motion: one still frame
      } else if (visible && !document.hidden) start();
      else stop();
    }

    resize();
    draw(0); // paint immediately, no blank flash

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);

    const onResize = () => { resize(); if (!frame) draw(0); };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", ...style }}
    />
  );
}
