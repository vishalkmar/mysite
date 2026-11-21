import ScrollMarquee from "./ApexUI-Kit/ScrollMarquee/ScrollMarquee.jsx";
import "./homeTwo/HomeTwo.css";
import "./homeTwo/HomeOneSections.css";

const statsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaTech Innovation",
  url: "https://nexatechinnovation.in/",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "SEO",
    "Digital Marketing",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
};

/* Bento grid: one feature image + alternating stat and image tiles. */
const tiles = [
  { type: "stat", value: "50+", title: "Satisfied Customers", copy: "Brands and startups who trusted us for their digital growth." },
  { type: "image", src: "/stateimages/sixtyplus.jpg", alt: "NexaTech developer in the office" },
  { type: "stat", value: "4+", title: "Years of Experience", copy: "Consistently delivering modern, reliable digital solutions.", tone: "blue" },
  { type: "image", src: "/stateimages/fifyplus.jpg", alt: "NexaTech team member celebrating a launch" },
  { type: "stat", value: "60+", title: "Projects Completed", copy: "Websites, web apps, mobile apps, and campaigns delivered across industries.", tone: "light" },
  { type: "image", src: "/stateimages/exp.jpg", alt: "NexaTech project lead" },
];

/* Rendered inside <HomeTwoScope> on the home page, so h2-* styles and [data-reveal] motion apply. */
const NexaStatsSection = () => (
  <section className="h1-stats" aria-labelledby="h1-stats-title">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
    />

    <ScrollMarquee />

    <div className="h2-section">
      <div className="h2-section-meta" data-reveal>
        <p className="h2-eyebrow">BY THE NUMBERS</p>
        <span>Small team. Real results.</span>
      </div>

      <div className="h1-stats-intro" data-reveal>
        <h2 id="h1-stats-title">
          An IT partner for <span>web, apps</span> and custom software.
        </h2>
        <p>
          We also deliver UI/UX design, SEO optimization, and digital marketing to help
          businesses grow with scalable, conversion-focused digital products.
        </p>
      </div>

      <div className="h1-bento">
        <figure className="h1-bento-feature" data-reveal>
          <img src="/stateimages/statemain.jpg" alt="NexaTech Innovation presenting digital solutions" loading="lazy" decoding="async" />
          <figcaption>BUILT FOR<br />WHAT’S NEXT.</figcaption>
        </figure>

        {tiles.map((tile, i) =>
          tile.type === "stat" ? (
            <article key={tile.title} className={`h1-stat${tile.tone ? ` h1-stat--${tile.tone}` : ""}`} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <strong>{tile.value}</strong>
              <div>
                <h3>{tile.title}</h3>
                <p>{tile.copy}</p>
              </div>
            </article>
          ) : (
            <figure key={tile.src} className="h1-bento-image" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <img src={tile.src} alt={tile.alt} loading="lazy" decoding="async" />
            </figure>
          )
        )}
      </div>
    </div>
  </section>
);

export default NexaStatsSection;
