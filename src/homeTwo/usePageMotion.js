import { useEffect } from 'react';

export default function usePageMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const reveals = [...root.querySelectorAll('[data-reveal]')];
    const lines = [...root.querySelectorAll('[data-scroll-copy]')].map(element => ({ element, words: [...element.querySelectorAll('[data-word]')], last: -1 }));
    const parallax = [...root.querySelectorAll('[data-parallax]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.dataset.in = 'true'; observer.unobserve(entry.target); }
      });
    }, { threshold: .12 });
    reveals.forEach(element => observer.observe(element));
    const ambientObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { entry.target.dataset.motionActive = String(entry.isIntersecting); });
    });
    root.querySelectorAll('.h2-ticker').forEach(element => ambientObserver.observe(element));
    function visibility() { root.dataset.pageHidden = String(document.hidden); }
    document.addEventListener('visibilitychange', visibility);
    visibility();
    let frame = 0;
    function paint() {
      frame = 0;
      const pageHeight = document.documentElement.scrollHeight - innerHeight;
      root.style.setProperty('--page-progress', `${pageHeight > 0 ? scrollY / pageHeight * 100 : 0}%`);
      // Read geometry together before any word styles are written.
      const bounds = lines.map(({ element }) => element.getBoundingClientRect());
      const positions = parallax.map(element => element.getBoundingClientRect());
      lines.forEach((line, i) => {
        const progress = motion.matches ? 1 : Math.max(0, Math.min(1, (innerHeight * .9 - bounds[i].top) / (innerHeight * .65)));
        if (line.last === progress) return;
        line.last = progress;
        const { words } = line;
        words.forEach((word, index) => {
          const local = Math.max(0, Math.min(1, (progress - index / words.length * .7) / .3));
          word.style.setProperty('--word-reveal', local);
        });
      });
      parallax.forEach((element, i) => {
        const offset = motion.matches ? 0 : Math.max(-30, Math.min(30, (positions[i].top - innerHeight / 2) * .06));
        element.style.setProperty('--parallax', `${offset}px`);
      });
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule); motion.addEventListener('change', schedule);
    paint();
    return () => {
      observer.disconnect(); ambientObserver.disconnect(); cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, [rootRef]);
}
