import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageCursor.css";

/*
 * A custom cursor whose design changes per page.
 * Only on fine pointers (mouse / trackpad); touch devices keep the native behaviour.
 */
const ROUTE_VARIANTS = {
  "/": "orbit",
  "/hometwo": "blend",
  "/about": "crosshair",
  "/contact": "spark",
  "/webdevelopment": "code",
  "/appdevelopment": "code",
  "/softwaredevelopment": "code",
  "/webdesign": "pen",
  "/uiuxdesign": "pen",
  "/logodesign": "pen",
  "/seo": "target",
  "/socialmediamarketing": "target",
  "/contentmarketing": "target",
  "/digitalmarketing": "target",
};

const INTERACTIVE = "a, button, [role='button'], summary, label, select, .nexa-btn, [data-cursor='hover']";
const TEXT_INPUT = "input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio']), textarea, [contenteditable='true']";

export default function PageCursor() {
  const { pathname } = useLocation();
  const variant = ROUTE_VARIANTS[pathname.replace(/\/$/, "") || "/"] || "orbit";
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(() => matchMedia("(hover: hover) and (pointer: fine)").matches);

  useEffect(() => {
    const media = matchMedia("(hover: hover) and (pointer: fine)");
    const change = () => setEnabled(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-page-cursor");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const dot = dotRef.current;
    const ring = ringRef.current;
    let x = -100, y = -100, rx = -100, ry = -100, frame = 0, visible = false;

    const tick = () => {
      const ease = reduced.matches ? 1 : 0.18;
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; rx = x; ry = y; root.dataset.cursorVisible = "true"; }
      const target = e.target instanceof Element ? e.target : null;
      root.dataset.cursorState = target?.closest(TEXT_INPUT) ? "text" : target?.closest(INTERACTIVE) ? "hover" : "idle";
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const leave = () => { visible = false; delete root.dataset.cursorVisible; };
    const down = () => { root.dataset.cursorDown = "true"; };
    const up = () => { delete root.dataset.cursorDown; };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      root.classList.remove("has-page-cursor");
      delete root.dataset.cursorVisible;
      delete root.dataset.cursorState;
      delete root.dataset.cursorDown;
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className={`page-cursor page-cursor--${variant}`} aria-hidden="true">
      <div className="page-cursor__ring" ref={ringRef}><span /></div>
      <div className="page-cursor__dot" ref={dotRef}><span /></div>
    </div>
  );
}
