import { forwardRef, useMemo, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";

function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

const ParagraphText3 = forwardRef((props, forwardedRef) => {
  const {
    label = "",
    fromFontVariationSettings = "'wght' 400",
    toFontVariationSettings = "'wght' 900",
    containerRef, // optional
    radius = 80,
    falloff = "linear",
    className = "",
    onClick,
    style,

    scrollEffect = true,
    scrollThrottle = 70,

    ...restProps
  } = props;

  const selfRef = useRef(null);
  const setRefs = useCallback(
    (node) => {
      selfRef.current = node;

      // forwardRef support
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  const getContainerEl = useCallback(() => {
    return containerRef?.current || selfRef.current;
  }, [containerRef]);

  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);

  const isInViewRef = useRef(false);
  const lastScrollTsRef = useRef(0);

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr
          .split(",")
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = useCallback(
    (distance) => {
      const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
      switch (falloff) {
        case "exponential":
          return norm ** 2;
        case "gaussian":
          return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
        case "linear":
        default:
          return norm;
      }
    },
    [radius, falloff]
  );

  const applyEffectAtPoint = useCallback(
    (clientX, clientY) => {
      const containerEl = getContainerEl();
      if (!containerEl) return;

      const containerRect = containerEl.getBoundingClientRect();

      // convert pointer coords -> container local coords
      const px = clientX - containerRect.left;
      const py = clientY - containerRect.top;

      letterRefs.current.forEach((letterRef) => {
        if (!letterRef) return;

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

        const distance = calculateDistance(px, py, letterCenterX, letterCenterY);

        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
          return;
        }

        const falloffValue = calculateFalloff(distance);

        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue =
              fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(", ");

        letterRef.style.fontVariationSettings = newSettings;
      });
    },
    [
      getContainerEl,
      radius,
      fromFontVariationSettings,
      parsedSettings,
      calculateFalloff,
    ]
  );

  // ✅ Hover / pointermove works even without passing containerRef
  useEffect(() => {
    const onMove = (e) => applyEffectAtPoint(e.clientX, e.clientY);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [applyEffectAtPoint]);

  // ✅ Scroll effect (when in view)
  useEffect(() => {
    if (!scrollEffect) return;

    const containerEl = getContainerEl();
    if (!containerEl) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    io.observe(containerEl);

    const onScroll = () => {
      if (!isInViewRef.current) return;

      const now = Date.now();
      if (now - lastScrollTsRef.current < scrollThrottle) return;
      lastScrollTsRef.current = now;

      const rect = containerEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      applyEffectAtPoint(cx, cy);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [scrollEffect, scrollThrottle, applyEffectAtPoint, getContainerEl]);

  const words = label.split(" ");
  let letterIndex = 0;

  return (
    <>
      <style>{`
        .variable-proximity {}

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      <span
        ref={setRefs}
        className={`${className} variable-proximity`}
        onClick={onClick}
        style={{ display: "inline", ...style }}
        {...restProps}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((letter) => {
              const idx = letterIndex++;
              return (
                <motion.span
                  key={idx}
                  ref={(el) => {
                    letterRefs.current[idx] = el;
                  }}
                  style={{
                    display: "inline-block",
                    fontVariationSettings:
                      interpolatedSettingsRef.current[idx],
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span style={{ display: "inline-block" }}>&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    </>
  );
});


export default ParagraphText3;
