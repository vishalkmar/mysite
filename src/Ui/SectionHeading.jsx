import { useRef } from "react";
import useReveal from "./useReveal";
import "./SectionHeading.css";

/*
 * Modern section heading in the HomeTwo typography:
 *   eyebrow · index line, big two-tone title, optional side copy.
 *   title = ["First line.", "Accent line."]
 */
export default function SectionHeading({ eyebrow, index, title, accent, copy, as: Tag = "h2", align = "split", id }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <header ref={ref} className={`nx-heading nx-heading--${align}`} id={id}>
      <div className="nx-heading__meta" data-nx-reveal>
        <span className="nx-heading__eyebrow"><i aria-hidden="true">✦</i>{eyebrow}</span>
        {index && <span className="nx-heading__index">{index}</span>}
      </div>
      <div className="nx-heading__body">
        <Tag className="nx-heading__title" data-nx-reveal>
          <span>{title}</span>
          {accent && <span className="nx-heading__accent">{accent}</span>}
        </Tag>
        {copy && <p className="nx-heading__copy" data-nx-reveal>{copy}</p>}
      </div>
    </header>
  );
}
