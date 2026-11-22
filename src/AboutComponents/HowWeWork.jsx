import React from "react"

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "Understand goals and define the right plan.",
  },
  {
    id: "02",
    title: "Build",
    description: "Design, develop, and bring the solution to life.",
  },
  {
    id: "03",
    title: "Launch",
    description: "Go live and create real impact.",
  },
]

const HowWeWorkStrip = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Work: NexaTech Innovation Project Delivery Process",
    "description": "Our three-step process from discovery to launch.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
    })),
  }

  return (
    <section className="nexa-work-section" style={{ backgroundColor: "var(--site-bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="nexa-work-container">
        <header className="nexa-work-heading">
          <p>03 moments. One clear direction.</p>
          <h2>How we <em>work.</em></h2>
        </header>

        <div className="nexa-work-grid">
          {steps.map((step, index) => (
            <article className="nexa-work-card" key={step.id}>
              <div className="nexa-work-card-top">
                <span>{step.id}</span>
                <i aria-hidden="true">{index === 0 ? "◯" : index === 1 ? "⌁" : "↗"}</i>
              </div>
              <div className="nexa-work-card-copy">
                <p>{index === 0 ? "First things first" : index === 1 ? "From thought to form" : "Ready for the real world"}</p>
                <h3>{step.title}</h3>
                <span>{step.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .nexa-work-section {
          position: relative;
          padding: 110px 0 120px;
          color: #f8fafc;
          overflow: hidden;
          border-top:1px solid rgba(170,202,224,.12);
          background:
            radial-gradient(circle at 78% 12%,rgba(103,216,245,.07),transparent 22%),
            var(--site-bg)!important;
        }
        .nexa-work-section::after {
          content:"";
          position:absolute;
          inset:0;
          opacity:.1;
          background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
          background-size:72px 72px;
          mask-image:linear-gradient(to bottom,#000,transparent 78%);
          pointer-events:none;
        }
        .nexa-work-container {
          width:min(1120px,calc(100% - 40px));
          margin-inline:auto;
          position:relative;
          z-index:2;
        }
        .nexa-work-heading {
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          margin-bottom:48px;
          border-bottom:1px solid rgba(170,202,224,.14);
          padding-bottom:28px;
        }
        .nexa-work-heading p {
          order:2;
          margin:0 0 12px;
          color:#91a7b8;
          font-size:.76rem;
          font-weight:800;
          letter-spacing:.14em;
          text-transform:uppercase;
        }
        .nexa-work-heading h2 {
          order:1;
          margin:0;
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(3.8rem,7vw,6.8rem);
          line-height:.88;
          letter-spacing:-.055em;
          font-weight:500;
        }
        .nexa-work-heading h2 em {
          color:#67d8f5;
          font-weight:400;
        }
        .nexa-work-grid {
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
        }
        .nexa-work-card {
          position:relative;
          min-height:330px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          padding:22px;
          border:1px solid rgba(170,202,224,.16);
          border-radius:8px;
          background:linear-gradient(145deg,rgba(255,255,255,.035),rgba(255,255,255,.008));
          transition:transform .45s cubic-bezier(.2,.8,.2,1),border-color .45s ease,background .45s ease;
        }
        .nexa-work-card:hover {
          transform:translateY(-10px);
          border-color:rgba(103,216,245,.42);
          background:linear-gradient(145deg,rgba(103,216,245,.09),rgba(255,255,255,.012));
        }
        .nexa-work-card-top { display:flex;justify-content:space-between;align-items:flex-start; }
        .nexa-work-card-top span { color:#67d8f5;font-size:.78rem;font-weight:800;letter-spacing:.12em; }
        .nexa-work-card-top i { width:54px;height:54px;display:grid;place-items:center;border:1px solid rgba(170,202,224,.18);border-radius:50%;color:#a9bed0;font-family:Georgia,serif;font-size:1.35rem;font-style:normal; }
        .nexa-work-card-copy p { margin:0 0 12px;color:#8299aa;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em; }
        .nexa-work-card-copy h3 {
          margin:0 0 14px;
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(2.5rem,4vw,3.6rem);
          line-height:.95;
          letter-spacing:-.04em;
          font-weight:500;
        }
        .nexa-work-card-copy>span { display:block;max-width:270px;color:#adbdc9;font-size:.96rem;line-height:1.6; }
        .nexa-work-card:nth-child(2) { margin-top:38px; }
        .nexa-work-card:nth-child(3) { margin-top:76px; }
        @media (max-width:767px) {
          .nexa-work-section { padding:76px 0 82px; }
          .nexa-work-container { width:min(100% - 32px,1120px); }
          .nexa-work-heading { align-items:flex-start;flex-direction:column-reverse;gap:14px; }
          .nexa-work-heading p { order:1;margin:0; }
          .nexa-work-heading h2 { order:2;font-size:clamp(3.2rem,15vw,5rem); }
          .nexa-work-grid { grid-template-columns:1fr; }
          .nexa-work-card,.nexa-work-card:nth-child(2),.nexa-work-card:nth-child(3) { min-height:280px;margin-top:0; }
        }
        @media (max-width:767px) {
          .nexa-work-section { padding:58px 0 72px; }
          .nexa-work-container { width:min(100% - 28px,1120px); }
          .nexa-work-heading { min-height:125px; margin-bottom:20px; }
          .nexa-work-heading h2 { font-size:3.7rem; }
          .nexa-work-grid { grid-template-columns:1fr; max-width:420px; margin-inline:auto; gap:24px; }
          .nexa-work-card { min-height:245px; }
        }
      `}</style>
    </section>
  )
}

export default HowWeWorkStrip
