import React, { useEffect, useMemo } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import responsive from "../serviceImages/webdevelopment/reponsive.png";
import chat from "../serviceImages/webdevelopment/chat-social-integration.png";
import seo from "../serviceImages/webdevelopment/seo-friendly.png";
import payment from "../serviceImages/webdevelopment/payment.webp";
import speed from "../serviceImages/webdevelopment/speed.png";
import security from "../serviceImages/webdevelopment/security.webp";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // ✅ premium, tech-focused descriptions
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "Pixel-perfect layouts that adapt seamlessly across mobile, tablet, and desktop for a consistently premium experience.",
        image: responsive,
      },
      {
        id: 2,
        title: "SEO Optimization",
        description:
          "Search-first architecture with on-page and technical SEO that improves crawlability, indexing, and visibility on Google.",
        image: seo,
      },
      {
        id: 3,
        title: "Live Chat Integration",
        description:
          "Real-time chat and smart automation to convert visitors faster and provide instant support without friction.",
        image: chat,
      },
      {
        id: 4,
        title: "Payment Gateway Setup",
        description:
          "Secure payment integrations with trusted gateways, smooth checkout flows, and proper transaction handling end-to-end.",
        image: payment,
      },
      {
        id: 5,
        title: "Site Speed Optimization",
        description:
          "Performance tuning for faster load times, better Core Web Vitals, and a smoother user journey that ranks better.",
        image: speed,
      },
      {
        id: 6,
        title: "Advanced Security",
        description:
          "Hardened security layers including SSL, best-practice headers, malware protection, and proactive safeguards.",
        image: security,
      },
    ],
    []
  );

  return (
    <>
      <section
        className="py-5"
        style={{
          backgroundColor: "#020617",
        }}
      >
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2
                className="display-4 text-center fw-bold mb-3 responsive-text"
                data-aos="zoom-in"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "5rem",
                  fontFamily: "orbitron",
                }}
              >
                Our Services
              </h2>

              <p className="lead text-white-50" data-aos="fade-up">
                Premium web features engineered for performance, growth, and trust.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="col-12 col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                {/* ✅ Long/Tall premium card */}
                <div className="card h-100 border-0 glass-card">
                  <div className="card-body text-center p-4 d-flex flex-column">
                    {/* ✅ Circle stays circle, not square */}
                    <div className="icon-wrap mb-4 mx-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="icon-img"
                        loading="lazy"
                      />
                    </div>

                    <h3
                      className="h4 mb-3 text-white"
                      style={{ fontFamily: "orbitron" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-white-50 flex-grow-1 mb-0 service-desc">
                      {service.description}
                    </p>

                    {/* ✅ makes card feel longer + premium spacing */}
                    <div className="card-spacer" />
                  </div>

                  <div className="bottom-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ✅ card glass + neon border glow */
        .glass-card{
          background: rgba(255,255,255,0.03) !important;
          border: 1px solid rgba(255,255,255,0.16) !important;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow:
            0 0 0 1px rgba(0,242,254,0.05),
            inset 0 0 18px rgba(0,242,254,0.04);
          position: relative;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
          min-height: 430px; /* ✅ LONG card */
        }

        .glass-card:hover{
          transform: translateY(-6px);
          border-color: rgba(0,242,254,0.55) !important;
          box-shadow:
            0 18px 45px rgba(0,0,0,0.35),
            0 0 32px rgba(0,242,254,0.18),
            inset 0 0 28px rgba(0,242,254,0.07);
        }

        /* ✅ circle remains circle */
        .icon-wrap{
          width: 120px;
          height: 120px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(0,242,254,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 28px rgba(0,242,254,0.10);
          transition: box-shadow .35s ease, transform .35s ease, border-color .35s ease;
        }

        .glass-card:hover .icon-wrap{
          border-color: rgba(0,242,254,0.6);
          box-shadow: 0 0 30px rgba(0,242,254,0.25);
          transform: scale(1.02);
        }

        .icon-img{
          width: 92px;
          height: 92px;
          object-fit: contain;
          border-radius: 50%;
          filter: drop-shadow(0 10px 16px rgba(0,242,254,0.12));
        }

        .service-desc{
          font-size: 1.02rem;
          line-height: 1.6;
        }

        /* extra spacing at bottom to make it feel premium/tall */
        .card-spacer{
          height: 18px;
        }

        /* bottom neon line */
        .bottom-glow{
          position:absolute;
          left: 18px;
          right: 18px;
          bottom: 14px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(79,172,254,0));
          opacity: 0.5;
          transition: opacity .35s ease;
        }
        .glass-card:hover .bottom-glow{ opacity: 1; }

        @media (max-width: 575.98px) {
          .responsive-text { font-size: 3.6rem !important; }
          .glass-card{ min-height: 410px; }
        }
      `}</style>
    </>
  );
};

export default FeatureSection;