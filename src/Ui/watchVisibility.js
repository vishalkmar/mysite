/*
 * Calls onChange(true/false) when `el` enters/leaves the viewport or the tab is hidden/shown.
 * Animation loops use it to stop drawing off-screen — the main cause of scroll jank on
 * low-end phones is canvases that keep rendering while nobody can see them.
 * Returns a cleanup function.
 */
export default function watchVisibility(el, onChange, rootMargin = "100px") {
  let inView = true;
  const emit = () => onChange(inView && !document.hidden);
  let io;
  if ("IntersectionObserver" in window && el) {
    io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      emit();
    }, { rootMargin });
    io.observe(el);
  } else {
    emit();
  }
  document.addEventListener("visibilitychange", emit);
  return () => {
    io?.disconnect();
    document.removeEventListener("visibilitychange", emit);
  };
}
