import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SplashCursor = lazy(() => import("./cursurs/SplashCursor"));
const GlobalDotParticles = lazy(() => import("./ButtonClick"));

// These pages run ApexUI FluidCursor instead (see ./cursurs/RouteCursorEffects.jsx).
const FLUID_CURSOR_ROUTES = ["/seo", "/socialmediamarketing", "/contentmarketing", "/digitalmarketing"];

export default function GlobalPointerEffects() {
  const { pathname, key } = useLocation();
  const [hero, setHero] = useState({ key: null, visible: true });
  const [started, setStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const hasAnimatedHero = ["/", "/digitalmarketing", "/contentmarketing"].includes(pathname.replace(/\/$/, "") || "/");
  // Suppress from the first render, including while the route chunk loads.
  const route = pathname.replace(/\/$/, "") || "/";
  const isHomeTwo = route === "/hometwo";
  const hasOwnFluid = FLUID_CURSOR_ROUTES.includes(route);
  const paused = isHomeTwo || hasOwnFluid || (hasAnimatedHero
    && (hero.key !== key || hero.visible));

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReducedMotion(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    if (!hasAnimatedHero) return;
    const visibleSections = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      setHero({ key, visible: visibleSections.size > 0 });
    });
    // Lazy routes may commit after this component's effect.
    const mutations = new MutationObserver(observeHero);
    function observeHero() {
      const elements = document.querySelectorAll("[data-pause-pointer-effects]");
      if (!elements.length) return false;
      elements.forEach(element => observer.observe(element));
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
  if (isHomeTwo || hasOwnFluid || reducedMotion || (!started && paused)) return null;
  return (
    <Suspense fallback={null}>
      <SplashCursor paused={paused} DYE_RESOLUTION={512} SIM_RESOLUTION={96} PRESSURE_ITERATIONS={12} />
      <GlobalDotParticles paused={paused} />
    </Suspense>
  );
}
