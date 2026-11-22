import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import "./serviceHero.css";

/*
 * Shared hero typography for service and marketing pages.
 * Each page keeps its own animated background (passed as `background`);
 * this only renders the copy: a staggered headline, a sliding keyword
 * (no typewriter), a short description, actions and capability chips.
 */
export default function ServiceHero({
  background,
  shade = "soft",
  eyebrow,
  title,
  accent,
  words = [],
  wordsLabel = "We build",
  description,
  chips = [],
  primary = { label: "Start your project", to: "/contact" },
  secondary,
  className = "",
  heroProps = {},
}) {
  const [index, setIndex] = useState(0);
  const host = useRef(null);

  useEffect(() => {
    if (words.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const io = new IntersectionObserver(([entry]) => {
      clearInterval(timer);
      if (entry.isIntersecting) timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    });
    io.observe(host.current);
    return () => { io.disconnect(); clearInterval(timer); };
  }, [words.length]);

  return (
    <section ref={host} className={`svh svh--${shade} ${className}`} {...heroProps}>
      {background && <div className="svh__bg">{background}</div>}
      <div className="svh__shade" aria-hidden="true" />
      <div className="svh__inner">
        {eyebrow && <p className="svh__eyebrow"><span aria-hidden="true" />{eyebrow}</p>}
        <h1 className="svh__title">
          <span className="svh__line">{title}</span>
          {accent && <span className="svh__line svh__line--accent">{accent}</span>}
        </h1>
        {words.length > 0 && (
          <p className="svh__rotator" aria-label={`${wordsLabel}: ${words.join(", ")}`}>
            <span className="svh__rotator-label" aria-hidden="true">{wordsLabel}</span>
            <span className="svh__rotator-window" aria-hidden="true">
              <span key={index} className="svh__word">{words[index]}</span>
            </span>
          </p>
        )}
        {description && <p className="svh__description">{description}</p>}
        <div className="svh__actions">
          {primary && <Link className="svh__button" to={primary.to}>{primary.label} <ArrowRight size={17} /></Link>}
          {secondary && <a className="svh__link" href={secondary.href}>{secondary.label} <ArrowDown size={15} /></a>}
        </div>
        {chips.length > 0 && <ul className="svh__chips">{chips.map((c) => <li key={c}>{c}</li>)}</ul>}
      </div>
    </section>
  );
}
