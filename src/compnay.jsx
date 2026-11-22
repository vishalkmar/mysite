import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

import one from "../src/serviceImages/office/one.jpg";
import two from "../src/serviceImages/office/two.jpg";
import three from "../src/serviceImages/office/three.jpg";
import four from "../src/serviceImages/office/four.jpg";

import MaskView from "./ApexUI-Kit/MaskView/MaskView";
import SectionHeading from "./Ui/SectionHeading";
import useReveal from "./Ui/useReveal";
import "./compnay.css";

const companyIntroSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaTech Innovation",
  url: "https://nexatechinnovation.in/",
  description:
    "IT service provider offering web development, mobile app development, UI/UX design, SEO, digital marketing and branding.",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO",
    "Digital Marketing",
    "Brand Identity",
  ],
};

const gallery = [
  { src: one, label: "Open studio", tag: "Where ideas start" },
  { src: two, label: "Build floor", tag: "Design + code" },
  { src: three, label: "Strategy room", tag: "Plan together" },
  { src: four, label: "Client lounge", tag: "Ship with you" },
];

const capabilities = [
  { name: "Web Development", path: "/webdevelopment" },
  { name: "Mobile App Development", path: "/appdevelopment" },
  { name: "UI/UX Design", path: "/uiuxdesign" },
  { name: "SEO", path: "/seo" },
  { name: "Digital Marketing", path: "/digitalmarketing" },
];

const CompanyIntro = () => {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <>
      <SectionHeading
        eyebrow="Inside NexaTech"
        index="Our space · Our people"
        title="Empowering brands"
        accent="with digital excellence."
        copy="A studio built for focus and collaboration, where strategy, design and engineering sit at the same table."
      />

      <section className="nx-company" ref={ref} aria-label="About NexaTech Innovation">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyIntroSchema) }}
        />

        <div className="nx-company__grid">
          <div className="nx-company__gallery">
            {gallery.map(({ src, label, tag }, i) => (
              <figure
                key={label}
                className={`nx-company__shot nx-company__shot--${i + 1}`}
                data-nx-reveal
                style={{ "--nx-delay": `${i * 90}ms` }}
              >
                <img
                  src={src}
                  alt={`NexaTech Innovation workspace – ${label.toLowerCase()}`}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <small>{tag}</small>
                  <span>{label}</span>
                </figcaption>
              </figure>
            ))}
            <div className="nx-company__badge" aria-hidden="true">
              <Sparkles size={18} />
              <span>Made in<br />our studio</span>
            </div>
          </div>

          <div className="nx-company__copy">
            <h3 data-nx-reveal>
              Building digital futures <span>with creative innovation.</span>
            </h3>

            <p className="nx-company__lead" data-nx-reveal style={{ "--nx-delay": "80ms" }}>
              We help businesses grow with tailored solutions that combine creativity with
              modern technology to build fast, scalable and conversion-focused digital experiences.
            </p>

            <ul className="nx-company__caps" data-nx-reveal style={{ "--nx-delay": "140ms" }}>
              {capabilities.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}>
                    {name} <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nx-company__quote" data-nx-reveal style={{ "--nx-delay": "200ms" }}>
              <MaskView
                variant="spotlight"
                animationSpeed={0.4}
                text="Whether you're launching a startup or scaling an enterprise, we deliver reliable software and marketing execution that improves visibility, user experience, and lead generation."
              />
            </div>

            <div className="nx-company__foot" data-nx-reveal style={{ "--nx-delay": "260ms" }}>
              <dl>
                <div><dt>50+</dt><dd>Happy clients</dd></div>
                <div><dt>60+</dt><dd>Projects shipped</dd></div>
                <div><dt>4+</dt><dd>Years building</dd></div>
              </dl>
              <Link className="nx-company__cta" to="/about">
                Meet the team <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntro;
