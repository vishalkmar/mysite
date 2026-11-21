import { useEffect } from "react";

/*
 * Calm scroll reveal: marks [data-nx-reveal] children of rootRef as shown once they enter
 * the viewport. Only opacity + a small vertical offset are animated (see SectionHeading.css),
 * so nothing ever pushes the page sideways or changes layout while scrolling.
 */
export default function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = [...root.querySelectorAll("[data-nx-reveal]")];
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => (el.dataset.nxIn = "true"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.nxIn = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootRef]);
}
