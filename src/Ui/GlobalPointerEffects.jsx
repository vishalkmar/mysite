import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SplashCursor = lazy(() => import("./cursurs/SplashCursor"));
const GlobalDotParticles = lazy(() => import("./ButtonClick"));

export default function GlobalPointerEffects() {
  const { pathname, key } = useLocation();
  const [hero, setHero] = useState({ key: null, visible: true });
  const [started, setStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const hasAnimatedHero = pathname === "/" || pathname.replace(/\/$/, "") === "/digitalmarketing";
  // Suppress from the first render, including while the route chunk loads.
  const paused = hasAnimatedHero
    && (hero.key !== key || hero.visible);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReducedMotion(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    if (!hasAnimatedHero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHero({ key, visible: entry.isIntersecting });
    });
    // Lazy routes may commit after this component's effect.
    const mutations = new MutationObserver(observeHero);
    function observeHero() {
      const element = document.querySelector("[data-pause-pointer-effects]");
      if (!element) return false;
      observer.observe(element);
      mutations.disconnect();
      return true;
    }
    if (!observeHero()) mutations.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, [hasAnimatedHero, pathname, key]);

  useEffect(() => {
    if (!paused && !reducedMotion) setStarted(true);
  }, [paused, reducedMotion]);

  // No fluid module download, WebGL setup, or particle canvas on hero entry.
  // After first use keep the fluid context, but stop its loop while paused.
  if (reducedMotion || (!started && paused)) return null;
  return (
    <Suspense fallback={null}>
      <SplashCursor paused={paused} DYE_RESOLUTION={512} SIM_RESOLUTION={96} PRESSURE_ITERATIONS={12} />
      <GlobalDotParticles paused={paused} />
    </Suspense>
  );
}
