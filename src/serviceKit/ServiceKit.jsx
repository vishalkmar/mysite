import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Minus, Sparkles } from "lucide-react";
import useReveal from "../Ui/useReveal";
import "../Ui/SectionHeading.css";
import "./ServiceKit.css";

/*
 * Modern section kit for the service + marketing pages (HomeTwo / sweet-tape language).
 * Every section is self-contained: <SkSection> scopes the styles and runs the calm reveal.
 */

export function SkSection({ className = "", tone = "dark", id, label, children }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <section ref={ref} id={id} aria-label={label} className={`sk sk--${tone} ${className}`}>
      {children}
    </section>
  );
}

export function SkHead({ eyebrow, index, title, accent, copy, as: Tag = "h2" }) {
  return (
    <header className="sk-head">
      <div className="sk-head__meta" data-nx-reveal>
        <span className="sk-eyebrow"><i aria-hidden="true">✦</i>{eyebrow}</span>
        {index && <span className="sk-head__index">{index}</span>}
      </div>
      <div className="sk-head__body">
        <Tag className="sk-title" data-nx-reveal style={{ "--nx-delay": "80ms" }}>
          <span>{title}</span>
          {accent && <span className="sk-title__accent">{accent}</span>}
        </Tag>
        {copy && <p className="sk-head__copy" data-nx-reveal style={{ "--nx-delay": "160ms" }}>{copy}</p>}
      </div>
    </header>
  );
}

/* ---------- Skills / tech stack: two counter-moving marquee rails + count ---------- */
export function SkSkills({ heading, skills }) {
  const half = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, half), skills.slice(half)];
  return (
    <SkSection className="sk-skills" label={heading.eyebrow}>
      <SkHead index={`${String(skills.length).padStart(2, "0")} capabilities`} {...heading} />
      <div className="sk-rails" data-nx-reveal>
        {rows.map((row, r) => (
          <div className={`sk-rail ${r ? "sk-rail--rev" : ""}`} key={r}>
            <ul>
              {[...row, ...row].map((skill, i) => (
                <li key={`${skill.name}-${i}`} aria-hidden={i >= row.length || undefined} style={{ "--chip": skill.color || "#82d8ff" }}>
                  <span className="sk-chip__icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SkSection>
  );
}

/* ---------- Feature cards: numbered bento ---------- */
export function SkFeatures({ heading, items }) {
  return (
    <SkSection className="sk-features" label={heading.eyebrow}>
      <SkHead index={`${String(items.length).padStart(2, "0")} essentials`} {...heading} />
      <div className="sk-feature-grid">
        {items.map((item, i) => (
          <article key={item.title} className={`sk-feature ${i === 0 ? "sk-feature--lead" : ""}`} data-nx-reveal style={{ "--nx-delay": `${(i % 3) * 80}ms` }}>
            <div className="sk-feature__top">
              <span className="sk-feature__num">{String(i + 1).padStart(2, "0")}</span>
              {item.image ? <img src={item.image} alt="" loading="lazy" decoding="async" /> : <span className="sk-feature__icon" style={{ "--chip": item.color || "#82d8ff" }}>{item.icon}</span>}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </SkSection>
  );
}

/* ---------- Info tabs: numbered list on the left, live panel on the right ---------- */
export function SkTabs({ heading, tabs, image, imageAlt = "" }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const lines = String(tab.desc).split("\n").map((l) => l.replace(/^•\s*/, "").trim()).filter(Boolean);
  const isList = String(tab.desc).includes("•");
  return (
    <SkSection className="sk-tabs" label={heading.eyebrow}>
      <SkHead {...heading} />
      <div className="sk-tabs__grid">
        <div className="sk-tabs__list" role="tablist" aria-label={heading.eyebrow} data-nx-reveal>
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              id={`sk-tab-${t.key}`}
              aria-selected={i === active}
              aria-controls="sk-tabpanel"
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}
            >
              <span className="sk-tabs__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sk-tabs__label">{t.label}</span>
              <span className="sk-tabs__icon" aria-hidden="true">{t.icon}</span>
            </button>
          ))}
        </div>
        <div className="sk-tabs__panel" id="sk-tabpanel" role="tabpanel" aria-labelledby={`sk-tab-${tab.key}`} data-nx-reveal style={{ "--nx-delay": "120ms" }}>
          {image && <div className="sk-tabs__media"><img src={image} alt={imageAlt} loading="lazy" decoding="async" /></div>}
          <div className="sk-tabs__body" key={tab.key}>
            <h3>{tab.title}</h3>
            {isList ? (
              <ul>{lines.map((l) => <li key={l}><Sparkles size={14} aria-hidden="true" />{l}</li>)}</ul>
            ) : (
              <p>{tab.desc}</p>
            )}
          </div>
        </div>
      </div>
    </SkSection>
  );
}

/* ---------- Showcase: sticky visual + feature rows ---------- */
export function SkShowcase({ heading, image, imageAlt = "", tag, features }) {
  return (
    <SkSection className="sk-showcase" label={heading.eyebrow}>
      <div className="sk-showcase__grid">
        <div className="sk-showcase__media" data-nx-reveal>
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
          {tag && <span className="sk-floating-tag"><span className="sk-dot" />{tag}</span>}
        </div>
        <div className="sk-showcase__copy">
          <SkHead {...heading} />
          <div className="sk-rows">
            {features.map((f, i) => (
              <article key={f.title} data-nx-reveal style={{ "--nx-delay": `${i * 70}ms` }}>
                <span className="sk-rows__icon" style={{ "--chip": f.color || "#368bff" }}>{f.icon}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SkSection>
  );
}

/* ---------- FAQ ---------- */
export function SkFAQ({ heading, faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <SkSection className="sk-faq" label={heading.eyebrow}>
      <div className="sk-faq__grid">
        <div className="sk-faq__intro">
          <SkHead {...heading} />
          <Link className="sk-link" to="/contact" data-nx-reveal>Still curious? Ask us anything <ArrowUpRight size={16} /></Link>
        </div>
        <div className="sk-faq__list" data-nx-reveal>
          {faqs.map(({ question, answer }, i) => (
            <article key={question} className={open === i ? "is-open" : ""}>
              <h3>
                <button type="button" aria-expanded={open === i} aria-controls={`sk-faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                  <span className="sk-faq__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sk-faq__q">{question}</span>
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </h3>
              <div id={`sk-faq-${i}`} className="sk-faq__a" hidden={open !== i}><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </SkSection>
  );
}

/* ---------- Closing CTA band ---------- */
export function SkCTA({ eyebrow = "Your next chapter starts here", title = "Have a", accent = "what if?", copy = "Let’s turn it into something real." }) {
  return (
    <SkSection className="sk-cta" tone="blue" label="Contact">
      <p className="sk-eyebrow" data-nx-reveal><i aria-hidden="true">✦</i>{eyebrow}</p>
      <h2 data-nx-reveal>{title}<br /><span>{accent}</span></h2>
      <div className="sk-cta__row" data-nx-reveal>
        <p>{copy}</p>
        <Link className="sk-button sk-button--light" to="/contact">Let’s make it happen <Sparkles size={18} /></Link>
      </div>
    </SkSection>
  );
}

/* ---------- Testimonials ---------- */
export function SkTestimonials({ heading, items }) {
  return (
    <SkSection className="sk-quotes" label={heading.eyebrow}>
      <SkHead {...heading} />
      <div className="sk-quotes__grid">
        {items.map((c, i) => (
          <figure key={c.name} data-nx-reveal style={{ "--nx-delay": `${(i % 2) * 90}ms` }}>
            <span className="sk-quotes__mark" aria-hidden="true">“</span>
            <blockquote>{c.review}</blockquote>
            <figcaption>
              {c.image && <img src={c.image} alt="" loading="lazy" decoding="async" />}
              <span><strong>{c.name}</strong>{c.role && <small>{c.role}</small>}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SkSection>
  );
}
