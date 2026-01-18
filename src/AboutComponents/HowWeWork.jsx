import React from "react";

const HowWeWorkStrip = () => {

  
  const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "We understand your business goals, target users, competitors and project requirements.",
  },
  {
    id: "02",
    title: "Define",
    desc: "We finalize scope, features, user flows, tech stack, milestones and delivery timeline.",
  },
  {
    id: "03",
    title: "Design",
    desc: "We create UI/UX wireframes, prototypes and final screens for a smooth user experience.",
  },
  {
    id: "04",
    title: "Build",
    desc: "We develop frontend, backend, APIs and integrations in agile sprints with regular updates.",
  },
  {
    id: "05",
    title: "Launch",
    desc: "We test, optimize performance, deploy to production and ensure a stable release.",
  },
  {
    id: "06",
    title: "Grow",
    desc: "We improve SEO, UX, conversion funnels and plan upgrades based on analytics and feedback.",
  },
];


  const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How We Work: NexaTech Innovation Project Delivery Process",
  "description":
    "A clear 6-step workflow used by NexaTech Innovation to deliver web development, app development and custom software projects— from discovery to launch and growth.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "NexaTech Innovation",
    "url": "https://nexatechinnovation.in/"
  },
 
  "step": steps.map((s, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": s.title,
    "text": s.desc
  }))
};



  return (
    <>
 
    <section
      className="py-5"
      style={{ backgroundColor: "#020617", color: "#e5e7eb" }}
    >   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
/>
      <div className="container py-4">
        {/* Center heading + description */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3 text-uppercase"
            style={{
              fontFamily: "Orbitron, system-ui, sans-serif",
              letterSpacing: "0.12em",
              fontSize: "clamp(2rem, 3vw, 2.5rem)",
              background:
                "linear-gradient(90deg,rgb(242,244,247) 0%, #00f2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          How We Work – Web, App & Software Development Process

          </h2>
         <p className="mx-auto text-secondary" style={{ maxWidth: "620px", fontSize: "0.96rem" }}>
  Our proven workflow at <span className="text-info fw-semibold">NexaTech Innovation</span> covers
  discovery, planning, UI/UX design, development, testing, deployment and growth.
  This process helps deliver fast, scalable web apps, mobile apps, and custom software with clear timelines and measurable results.
</p>

        </div>

        {/* Step strip */}
        <div className="position-relative">
          {/* connecting line (desktop only) */}
          <div className="process-line d-none d-md-block" />

          <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="d-flex flex-column align-items-center text-center flex-fill process-step"
              >
                <div className="process-circle mb-3">
                  <span className="process-circle-number">{step.id}</span>
                </div>
                <h5
                  className="mb-1"
                  style={{ fontSize: "0.98rem", color: "#f9fafb" }}
                >
                  {step.title}
                </h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ fontSize: "0.84rem", maxWidth: "200px" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* styles */}
      <style>{`
        .process-line {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 45px; /* approx centre of circles */
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(56,189,248,0.15),
            rgba(56,189,248,0.8),
            rgba(56,189,248,0.15)
          );
          z-index: 1;
        }

        .process-step {
          position: relative;
          z-index: 2; /* above line */
        }

        .process-circle {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 0%, #0ea5e9, #1d4ed8);
          box-shadow:
            0 0 0 2px rgba(15,23,42,1),
            0 0 22px rgba(56,189,248,0.75);
        }

        .process-circle-number {
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #e5e7eb;
          font-weight: 700;
        }

        @media (max-width: 767.98px) {
          .process-line {
            display: none;
          }

          .process-step {
            align-items: flex-start;
            text-align: left;
          }

          .process-step p {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default HowWeWorkStrip;
