import { useEffect, useRef } from 'react';
import './ScrollMarquee.css';

export default function ScrollMarquee({ scrollRef }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const tracks = [...root.querySelectorAll('[data-marquee-track]')];
    const scrollTarget = scrollRef?.current || window;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const getScroll = () => scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;
    let lastScroll = getScroll();
    let lastTime = 0;
    let frame = 0;
    let visible = false;
    let hovered = false;
    let speed = 0;
    let direction = 1;
    const offsets = [0, 0];
    const widths = [0, 0];

    function measure() {
      tracks.forEach((track, index) => {
        widths[index] = track.firstElementChild.getBoundingClientRect().width;
      });
    }

    function tick(now) {
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      speed *= Math.exp(-delta * 6);
      tracks.forEach((track, index) => {
        const width = widths[index];
        if (!width) return;
        const movement = (22 * direction + speed) * delta * (index === 0 ? 1 : -0.65);
        offsets[index] = ((offsets[index] + movement) % width + width) % width;
        track.style.transform = `translate3d(${-offsets[index]}px, 0, 0)`;
      });
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastScroll = getScroll();
      speed = 0;
      if (visible && !document.hidden && !motion.matches && !hovered) {
        lastTime = performance.now();
        frame = requestAnimationFrame(tick);
      }
    }

    function onScroll() {
      const position = getScroll();
      const delta = position - lastScroll;
      lastScroll = position;
      if (!visible || motion.matches || hovered || document.hidden || !delta) return;
      direction = delta > 0 ? 1 : -1;
      speed = Math.max(-650, Math.min(650, speed + delta * 3));
    }

    function onEnter(event) {
      if (event.pointerType !== 'mouse') return;
      hovered = true;
      sync();
    }
    function onLeave() { hovered = false; sync(); }

    const resizeObserver = new ResizeObserver(measure);
    tracks.forEach(track => resizeObserver.observe(track.firstElementChild));
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(root);
    measure();
    scrollTarget.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      scrollTarget.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, [scrollRef]);

  return (
    <div className="stats-scroll-marquee" ref={rootRef}>
      <h2 className="visually-hidden">Stats that speak. Real value.</h2>
      <div className="stats-scroll-marquee__row" aria-hidden="true">
        <div className="stats-scroll-marquee__track" data-marquee-track>
          {[0, 1, 2].map(copy => (
            <div className="stats-scroll-marquee__group" key={copy}>
              <span>Stats that speak</span><span className="stats-scroll-marquee__star">✦</span>
              <span className="stats-scroll-marquee__outline">Real value</span><span className="stats-scroll-marquee__star">✦</span>
            </div>
          ))}
        </div>
      </div>
      <div className="stats-scroll-marquee__row stats-scroll-marquee__row--details" aria-hidden="true">
        <div className="stats-scroll-marquee__track" data-marquee-track>
          {[0, 1, 2].map(copy => (
            <div className="stats-scroll-marquee__group" key={copy}>
              <span><strong>50+</strong> happy clients</span><i>✦</i>
              <span><strong>60+</strong> projects delivered</span><i>✦</i>
              <span><strong>4+</strong> years of experience</span><i>✦</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
