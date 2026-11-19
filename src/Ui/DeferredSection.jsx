import { Suspense, useEffect, useRef, useState } from "react";

// Keep space in the document while expensive, below-fold code waits for scroll.
export default function DeferredSection({ component: Component, minHeight, label, ...props }) {
  const element = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    let nearby = false;
    const update = () => setActive(nearby && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      if (nearby) setLoaded(true);
      update();
    }, { rootMargin: "120px" });
    observer.observe(element.current);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  const placeholder = <div className="deferred-placeholder">{label && <h2>{label}</h2>}</div>;
  return <div ref={element} className="deferred-section" style={{ minHeight }} data-deferred-section={label || "visual"}>
    {loaded ? <Suspense fallback={placeholder}><Component {...props} active={active} /></Suspense> : placeholder}
  </div>;
}
