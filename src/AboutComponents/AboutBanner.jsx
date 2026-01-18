import React from "react";

import aboutbannerone from '../New folder/aboutbanner1.jpg'

const AboutHeroBanner = () => {

  const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaTech Innovation",
  "url": "https://nexatechinnovation.in/",
  "description":
    "IT service provider offering web development, mobile app development, custom software solutions, UI/UX design, SEO and digital marketing.",
  "knowsAbout": [
    "Web Development",
    "App Development",
    "Software Development",
    "UI/UX Design",
    "SEO",
    "Digital Marketing"
  ]
};


  return (
    <>



    <section className="about-hero-section py-5 py-lg-6" style={{marginTop:'60px'}}>
      
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
/>
      <div className="container position-relative">
        {/* subtle background glow */}
        <div className="about-hero-glow" />

        <div className="row align-items-center g-5">
          {/* TEXT SIDE */}
          <div className="col-lg-6">
            <span className="badge rounded-pill border border-primary text-uppercase small text-light fw-semibold bg-transparent mb-3 px-3 py-2">
              About NexaTech Innovation
            </span>

           <h2 className="fw-bold mb-3 gradient-heading" style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}>
  Web Development, App Development & Digital Marketing
  <br />
  <span className="text-info">by NexaTech Innovation</span>
</h2>


            <p className="text-secondary mb-4">
  NexaTech Innovation is an IT service provider delivering{" "}
  <span className="text-light fw-semibold">
    web development, mobile app development, custom software solutions, UI/UX design, SEO optimization, and digital marketing
  </span>
  . We build fast, scalable digital products that look premium, load quickly, and help businesses generate leads and grow.
</p>


            {/* small key points – minimal, neat */}
            <div className="d-flex flex-column gap-2 mb-4">
              <div className="d-flex align-items-center gap-2">
                <span className="about-dot" />
                <p className="mb-0 small text-light">
                Practical design that looks good and works even better.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="about-dot" />
                <p className="mb-0 small text-light">
                  A small, experienced team that you can actually reach and work with.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="about-dot" />
                <p className="mb-0 small text-light">
                 Made for builders and brands who care about clarity, performance and results.
                </p>
              </div>
            </div>

            {/* optional CTA line – minimal */}
            <div className="d-flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "App Development",
                  "Digital Marketing",
                  "SEO & Analytics",
                  "Software Development",
                  "UI/UX Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      backgroundColor: "rgba(0,180,216,0.09)",
                      color: "white",
                      fontWeight: 500,
                      fontSize: "0.78rem",
                      fontFamily: "orbitron",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
          {/* IMAGE SIDE */}
          <div className="col-lg-6">
            <div className="position-relative d-flex justify-content-center">
              {/* glow ring behind image */}
              <div className="about-image-ring" />
              <div className="about-image-frame shadow-lg border border-secondary-subtle rounded-4 overflow-hidden bg-dark">
                <img
                  src={aboutbannerone}
                  alt="NexaTech Innovation team building web and mobile app solutions"

                  className="img-fluid"
                />
              </div>

              {/* small stats card overlay */}
              <div className="about-stats-card rounded-4 bg-dark border border-secondary-subtle shadow-lg p-3">
                <p className="text-uppercase small text-info fw-semibold mb-1">
                  Snapshot
                </p>
                <div className="d-flex flex-column gap-1 small text-secondary">
                  <span>
                    <span className="text-light fw-semibold">50+</span> projects shipped
                  </span>
                  <span>
                    <span className="text-light fw-semibold">6</span> service verticals
                  </span>
                  <span>
                    <span className="text-light fw-semibold">90%</span> work via referrals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* minimal custom CSS */}
      <style>{`
        .about-hero-section {
          background-color: #020617;
          position: relative;
          overflow: hidden;
        }

        

        .gradient-heading {
          background: linear-gradient(90deg, #e5e7eb 0%, #38bdf8 45%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          font-size: clamp(2.1rem, 4vw, 3rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .about-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, #22c55e, #a3e635);
        }

        .about-image-frame {
          max-width: 420px;
          width: 100%;
        }

        .about-image-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(6px);
          pointer-events: none;
        }

        .about-stats-card {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          min-width: 180px;
        }

        @media (max-width: 991.98px) {
          .about-stats-card {
            bottom: 1rem;
            right: 50%;
            transform: translateX(50%);
          }
        }

        @media (max-width: 767.98px) {
          .about-hero-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .gradient-heading {
            font-size: clamp(1.8rem, 6vw, 2.3rem);
            letter-spacing: 0.06em;
          }

          .about-image-frame {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default AboutHeroBanner;
