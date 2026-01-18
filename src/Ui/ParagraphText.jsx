import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ParagraphText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
  scrollScramble = true,     // ✅ new
  scrollThrottle = 80,       // ✅ ms (less = more frequent)
}) => {
  const pRef = useRef(null);
  const charsRef = useRef([]);
  const inViewRef = useRef(false);
  const lastScrollTs = useRef(0);

  useEffect(() => {
    if (!pRef.current) return;

    const split = SplitText.create(pRef.current, {
      type: 'chars',
      charsClass: 'char',
    });

    charsRef.current = split.chars;

    charsRef.current.forEach((c) => {
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML },
      });
    });

    const runScrambleNearPoint = (clientX, clientY) => {
      charsRef.current.forEach((c) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = clientX - (left + width / 2);
        const dy = clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed,
            },
            ease: 'none',
          });
        }
      });
    };

    // ✅ Hover/pointer move (same as before)
    const onPointerMove = (e) => runScrambleNearPoint(e.clientX, e.clientY);

    // ✅ Scroll scramble (auto) when in view
    const onScroll = () => {
      if (!scrollScramble) return;
      if (!inViewRef.current) return;

      const now = Date.now();
      if (now - lastScrollTs.current < scrollThrottle) return;
      lastScrollTs.current = now;

      const rect = pRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // scramble around center while scrolling
      runScrambleNearPoint(cx, cy);
    };

    // ✅ Detect when paragraph enters viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    io.observe(pRef.current);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars, scrollScramble, scrollThrottle]);

  return (
    <>
      <style>{`
        .paragraph-text {
        
          max-width: 800px;
          font-family:arial, sans-serif;
          font-size: clamp(1.3rem, 1.6vw, 2rem);
          color: #fff;
        }
        .paragraph-text .char {
          will-change: transform;
          display: inline-block;
        }
      `}</style>

      <p ref={pRef} className={`paragraph-text ${className}`} style={style}>
        {children}
      </p>
    </>
  );
};

export default ParagraphText;
