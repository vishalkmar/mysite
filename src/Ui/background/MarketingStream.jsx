import { useEffect, useRef } from "react";

const GLYPHS = "ABCEGKRSXZ0235689";
const COLORS = ["#7350ff", "#9675ff", "#c590ff", "#ff9ffc"];

export default function MarketingStream({ interactionRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = interactionRef.current;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context || !host) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const background = document.createElement("canvas");
    const atlas = document.createElement("canvas");
    const pulse = document.createElement("canvas");
    const base = background.getContext("2d", { alpha: false });
    const ink = atlas.getContext("2d");
    const light = pulse.getContext("2d");
    if (!base || !ink || !light) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let resizeFrame = 0;
    let idleTask = 0;
    let ready = false;
    let visible = false;
    let disposed = false;
    let previous = 0;
    let elapsed = 0;
    let averageCost = 0;
    let glyphStep = 1;
    let interval = 1000 / 30;
    let rows = [];
    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const cell = 32;

    atlas.width = GLYPHS.length * cell;
    atlas.height = COLORS.length * cell;
    ink.font = "700 14px monospace";
    ink.textAlign = "center";
    ink.textBaseline = "middle";
    COLORS.forEach((color, row) => {
      ink.fillStyle = color;
      ink.shadowColor = color;
      ink.shadowBlur = 5;
      [...GLYPHS].forEach((glyph, column) => {
        ink.fillText(glyph, column * cell + 16, row * cell + 16);
      });
    });
    pulse.width = 128;
    pulse.height = 32;
    light.scale(4, 1);
    const glow = light.createRadialGradient(16, 16, 0, 16, 16, 16);
    glow.addColorStop(0, "#d9ccff");
    glow.addColorStop(0.2, "#9874ff99");
    glow.addColorStop(1, "#7350ff00");
    light.fillStyle = glow;
    light.fillRect(0, 0, 32, 32);

    function drawGlow(x, y, radiusX, radiusY, color, alpha) {
      base.save();
      base.translate(x, y);
      base.scale(radiusX, radiusY);
      const gradient = base.createRadialGradient(0, 0, 0, 0, 0, 1);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "transparent");
      base.globalAlpha = alpha;
      base.fillStyle = gradient;
      base.fillRect(-1, -1, 2, 2);
      base.restore();
    }

    // The expensive curves, glow and geometry are built ONLY on resize.
    // Animation frames copy this bitmap and move a small number of glyphs.
    function buildBackground() {
      const centerY = height * 0.5;
      const mobile = host.clientWidth < 768;
      const count = mobile ? 10 : 14;
      rows = [];
      base.fillStyle = getComputedStyle(host).getPropertyValue("--site-bg").trim() || "#020617";
      base.fillRect(0, 0, width, height);
      base.globalCompositeOperation = "lighter";
      drawGlow(width / 2, centerY, width * 0.6, height * 0.16, "#5227ff", 0.28);
      drawGlow(width / 2, centerY, width * 0.24, 24, "#9675ff", 0.5);

      for (const side of [-1, 1]) {
        for (let lane = 0; lane < count; lane++) {
          const spread = (lane + 1) / count;
          const amplitude = height * (0.04 + spread ** 1.6 * 1.05);
          const colorIndex = Math.min(3, Math.floor(spread * 4));
          const strong = lane % 4 === 1 || lane === count - 1;
          const yAt = x => centerY + side * (3 + lane + amplitude * Math.abs(x / (width / 2) - 1) ** 2.35);
          const path = new Path2D();
          for (let step = 0; step <= 64; step++) {
            const x = width * step / 64;
            if (step === 0) path.moveTo(x, yAt(x));
            else path.lineTo(x, yAt(x));
          }
          base.strokeStyle = COLORS[colorIndex];
          base.lineWidth = strong ? 5 : 1.5;
          base.globalAlpha = strong ? 0.22 : 0.12;
          base.shadowColor = COLORS[colorIndex];
          base.shadowBlur = strong ? 14 : 5;
          base.stroke(path);
          base.strokeStyle = strong ? "#e9d6ff" : COLORS[colorIndex];
          base.lineWidth = strong ? 1.2 : 0.65;
          base.globalAlpha = strong ? 0.85 : 0.4;
          base.stroke(path);
          base.shadowBlur = 0;

          if (lane % 4 !== 1) continue;
          const rowCount = !mobile && lane === count - 1 ? 2 : 1;
          for (let row = 0; row < rowCount; row++) {
            const points = [];
            for (let x = 0; x <= width + 4; x += 4) {
              const distance = Math.abs(x / (width / 2) - 1);
              const size = 7 + distance * 5;
              const y = yAt(x) + side * (row + 1) * size * 1.15;
              const angle = Math.atan2(yAt(x + 1) - yAt(x - 1), 2);
              points.push({ y, cos: Math.cos(angle), sin: Math.sin(angle), size: size * 2.3,
                alpha: 0.4 + distance * 0.35, visible: y > -24 && y < height + 24 });
            }
            rows.push({ points, colorIndex, seed: lane * 7 + row * 3, speed: 24 + lane, spacing: mobile ? 22 : 20 });
          }
        }
      }
      base.globalAlpha = 0.8;
      base.strokeStyle = "#c3b5ff";
      base.shadowColor = "#9675ff";
      base.shadowBlur = 12;
      base.lineWidth = 1.2;
      base.beginPath();
      base.moveTo(0, centerY);
      base.lineTo(width, centerY);
      base.stroke();
      base.shadowBlur = 0;
      drawGlow(width, centerY, width * 0.2, 30, "#ff9ffc", 0.6);
      drawGlow(width, centerY, width * 0.08, 8, "#ffe4f6", 0.85);
      base.globalCompositeOperation = "source-over";
      base.globalAlpha = 1;
    }

    function draw() {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      context.drawImage(background, 0, 0);
      context.globalCompositeOperation = "lighter";
      for (const row of rows) {
        const shift = elapsed * row.speed;
        const offset = shift % row.spacing;
        const cycle = Math.floor(shift / row.spacing);
        for (let index = 0; index * row.spacing + offset < width; index += glyphStep) {
          const x = index * row.spacing + offset;
          const point = row.points[Math.floor(x / 4)];
          if (!point.visible) continue;
          const glyph = ((index - cycle + row.seed) % GLYPHS.length + GLYPHS.length) % GLYPHS.length;
          context.setTransform(point.cos, point.sin, -point.sin, point.cos, x, point.y);
          context.globalAlpha = point.alpha;
          context.drawImage(atlas, glyph * cell, row.colorIndex * cell, cell, cell,
            -point.size / 2, -point.size / 2, point.size, point.size);
        }
      }
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.globalAlpha = 0.65;
      const pulseX = ((elapsed * 0.12 + 0.5) % 1) * width;
      context.drawImage(pulse, pulseX - width * 0.12, height * 0.5 - 16, width * 0.24, 32);
      context.globalAlpha = 1;
    }

    function animate(now) {
      frame = 0;
      if (!ready || !visible || document.hidden || motion.matches || disposed) return;
      if (now - previous >= interval) {
        elapsed += previous ? Math.min((now - previous) / 1000, 0.1) : 0;
        previous = now;
        eased.x += (pointer.x - eased.x) * 0.12;
        eased.y += (pointer.y - eased.y) * 0.12;
        canvas.style.transform = `translate3d(${eased.x * 6}px, ${eased.y * 4}px, 0) scale(1.025)`;
        const start = performance.now();
        draw();
        averageCost = averageCost * 0.9 + (performance.now() - start) * 0.1;
        if (averageCost > 8) { glyphStep = 2; interval = 1000 / 24; }
      }
      frame = requestAnimationFrame(animate);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (!ready || disposed) return;
      if (motion.matches) {
        canvas.style.transform = "scale(1.025)";
        elapsed = 0;
        draw();
      } else if (visible && !document.hidden) {
        frame = requestAnimationFrame(animate);
      }
    }

    function resize() {
      resizeFrame = 0;
      if (disposed) return;
      // Bound memory and raster work, independently of high-DPI screen size.
      const scale = Math.min(1, 1280 / host.clientWidth, Math.sqrt(900000 / (host.clientWidth * host.clientHeight)));
      const nextWidth = Math.max(1, Math.round(host.clientWidth * scale));
      const nextHeight = Math.max(1, Math.round(host.clientHeight * scale));
      if (ready && width === nextWidth && height === nextHeight) return;
      width = nextWidth;
      height = nextHeight;
      canvas.width = background.width = width;
      canvas.height = background.height = height;
      interval = 1000 / (host.clientWidth < 768 ? 24 : 30);
      buildBackground();
      ready = true;
      draw();
      syncAnimation();
    }

    function move(event) {
      if (motion.matches || event.pointerType === "touch") return;
      const bounds = host.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
      pointer.y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
    }
    function leave() { pointer.x = 0; pointer.y = 0; }

    const resizeObserver = new ResizeObserver(() => {
      if (!ready) return;
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    resizeObserver.observe(host);
    visibilityObserver.observe(host);
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", syncAnimation);
    motion.addEventListener("change", syncAnimation);
    // Let the headline paint before allocating and drawing the background.
    if (window.requestIdleCallback) idleTask = requestIdleCallback(resize, { timeout: 700 });
    else resizeFrame = requestAnimationFrame(resize);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      if (idleTask) cancelIdleCallback(idleTask);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", syncAnimation);
      motion.removeEventListener("change", syncAnimation);
      for (const buffer of [background, atlas, pulse]) { buffer.width = 0; buffer.height = 0; }
    };
  }, [interactionRef]);

  return <canvas className="dm-hero__stream" ref={canvasRef} aria-hidden="true" />;
}
