import { Link } from "react-router-dom";
import { Target, Users, ShieldCheck, Trophy, Sparkles, Layers } from "lucide-react";
import MaskView from "./ApexUI-Kit/MaskView/MaskView";
import Orb from "./Ui/Orbit";
import "./homeTwo/HomeTwo.css";
import "./homeTwo/HomeOneSections.css";

const whoWeAreSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaTech Innovation",
  url: "https://nexatechinnovation.in/",
  description:
    "IT service provider offering web development, app development, custom software, UI/UX design, SEO and digital marketing.",
  makesOffer: [
    "Web Development",
    "App Development",
    "Software Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

const services = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "SEO & Analytics",
  "Software Development",
  "UI/UX Design",
];

const pillars = [
  { label: "Mission", title: "Our Mission", Icon: Target, copy: "To deliver innovative software solutions that transform businesses and create lasting value for our clients." },
  { label: "Team", title: "Our Team", Icon: Users, copy: "A talented group of developers, designers and strategists passionate about creating exceptional digital experiences." },
  { label: "Values", title: "Our Values", Icon: ShieldCheck, copy: "Integrity, innovation and excellence guide everything we do. We believe in building trust through transparency." },
  { label: "Achievements", title: "Achievements", Icon: Trophy, copy: "Recognized as top developers with 50+ successful projects and a 98% client satisfaction rate across global industries." },
];

/* Rendered inside <HomeTwoScope> on the home page, so h2-* styles and [data-reveal] motion apply. */
const WhoWeAre = () => (
  <section className="h2-section h1-who" id="who-we-are">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(whoWeAreSchema) }}
    />

    <div className="h2-section-meta" data-reveal>
      <p className="h2-eyebrow">WHO WE ARE</p>
      <span>Software · Digital · Experience</span>
    </div>

    <div className="h1-who-grid">
      <div className="h1-who-copy" data-reveal>
        <MaskView as="h2" variant="window" text={"NexaTech\nInnovation"} image="/stateimages/whoweare.jpg" />
        <MaskView
          variant="wipe"
          className="h1-who-lead"
          text="NexaTechInnovation is a future-ready software startup focused on building smart, scalable and user-centric digital products. We craft web applications, mobile apps, custom software and digital experiences that help brands grow faster and operate smarter."
        />
        <span className="h2-interaction-note">Move across the words. See things differently.</span>

        <h3 className="h1-who-subhead">What we do</h3>
        <div className="h2-tags">
          {services.map((item) => <span key={item}>{item}</span>)}
        </div>

        <div className="h2-hero-actions">
          <Link className="h2-button" to="/about">Discover our work <Sparkles size={17} /></Link>
          <Link className="h2-text-link" to="/contact">Start a project</Link>
        </div>
      </div>

      <div className="h1-who-visual" data-reveal>
        <div className="h2-art-glow" />
        <div className="h1-who-portrait">
          <img src="/stateimages/whoweare.jpg" alt="NexaTech Innovation team member" loading="lazy" decoding="async" />
          <div className="h1-who-orb" aria-hidden="true">
            <Orb hoverIntensity={0.5} rotateOnHover hue={0} forceHoverState />
          </div>
        </div>
        <span className="h2-art-tag h2-art-tag-top"><Layers size={15} /> Strategy. Design. Code.</span>
        <span className="h2-art-tag h2-art-tag-bottom"><span className="h2-live-dot" /> One connected team.</span>
      </div>
    </div>

    <div className="h1-pillars">
      {pillars.map(({ label, title, Icon, copy }) => (
        <article key={label} data-reveal>
          <span className="h2-step-label"><Icon size={13} /> {label}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default WhoWeAre;
