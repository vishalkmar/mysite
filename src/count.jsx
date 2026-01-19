import CurvedLoop from "./Ui/CurveLoop";
import ShinyText from "./Ui/ShinyText";
import TilteCard from "./Ui/cards/TitleCards";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const NexaStatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
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
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10",
    },
  };

  // Reusable wrapper style for all image cards
  const imageCardStyle = {
    border: "1px solid rgba(148,163,184,0.35)",
    backgroundColor: "#020617",
  };

  // Reusable Tilted card props (tweak once, affects all)
  const tiltedCommon = {
    rotateAmplitude: 12,
    scaleOnHover: 1.15,
    showMobileWarning: false,
    showTooltip: false,
    displayOverlayContent: false,
  };

  return (
    <>
      <section
        className="py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#020617", color: "#e5e7eb" }}
      >
     
        <div style={{ position: "relative", zIndex: 1 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
        />

        <div className="container">
          {/* TOP HEADING */}
          <div className="text-center mb-5">
            <h2
              className="display-4 fw-bold mb-3 responsive-text"
              style={{
                background:
                  "linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "4.3rem",
                fontFamily: "orbitron",
              }}
            >
              <div style={{ marginTop: "150px" }}>
                <CurvedLoop
                  marqueeText="VALUE ✦ STATS ✦ THAT ✦ SPEAK ✦ TRUE"
                  height={130}
                  fontSize={70}
                  curveAmount={-380}
                />
              </div>
            </h2>

            <p className="mb-1">
              <span className="fw-semibold">NexaTech Innovation</span> is an IT
              service provider specializing in web development, mobile app
              development, and custom software solutions.
            </p>
            <p className="mb-0">
              We also deliver UI/UX design, SEO optimization, and digital
              marketing to help businesses grow with scalable, conversion-focused
              digital products.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT BIG IMAGE CARD */}
            <div className="col-lg-5" data-aos="fade-right">
              <div
                className="h-100 rounded-4 overflow-hidden"
                style={{
                  ...imageCardStyle,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.7)",
                  minHeight: "420px", // keeps it tall like a feature card
                }}
              >
                <TilteCard
                  imageSrc="/stateimages/statemain.jpg"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  {...tiltedCommon}
                />
              </div>
            </div>

            {/* RIGHT GRID: 2 ROW x 3 COL */}
            <div className="col-lg-7">
              <div className="row g-4">
                {/* ROW 1 - COL 1 : TEXT CARD */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="0">
                  <div
                    className="h-100 rounded-4 d-flex flex-column align-items-center text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
                      border: "1px solid rgba(148,163,184,0.35)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.6)",
                    }}
                  >
                    <div
                      className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        border: "1px solid rgba(56,189,248,0.6)",
                        background:
                          "radial-gradient(circle, rgba(15,23,42,1) 0%, rgba(15,23,42,0.2) 100%)",
                        color: "#00e0ff",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
                        50+
                      </span>
                    </div>

                    <h3
                      className="fw-semibold mb-2 text-white"
                      style={{ fontFamily: "orbitron", fontSize: "1.1rem" }}
                    >
                      Satisfied Customers
                    </h3>

                    <p className="mb-0" style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                      <ShinyText
                        text="Brands and startups who trusted us for their digital growth."
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                  </div>
                </div>

                {/* ROW 1 - COL 2 : IMAGE (Tilted) */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="100">
                  <div
                    className="h-100 rounded-4 overflow-hidden"
                    style={{ ...imageCardStyle, minHeight: "220px" }}
                  >
                    <TilteCard
                      imageSrc="/stateimages/sixtyplus.jpg"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      {...tiltedCommon}
                    />
                  </div>
                </div>

                {/* ROW 1 - COL 3 : TEXT CARD */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="200">
                  <div
                    className="h-100 rounded-4 d-flex flex-column align-items-center text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #020617 0%, #0b1120 100%)",
                      border: "1px solid rgba(148,163,184,0.35)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.6)",
                    }}
                  >
                    <div
                      className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        border: "1px solid rgba(56,189,248,0.6)",
                        background:
                          "radial-gradient(circle, rgba(15,23,42,1) 0%, rgba(15,23,42,0.2) 100%)",
                        color: "#00e0ff",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
                        4+
                      </span>
                    </div>

                    <h5 className="fw-semibold mb-2 text-white" style={{ fontFamily: "orbitron" }}>
                      Years of Experience
                    </h5>

                    <p className="mb-0" style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                      <ShinyText
                        text="Consistently delivering modern, reliable digital solutions."
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                  </div>
                </div>

                {/* ROW 2 - COL 1 : IMAGE (Tilted) */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="300">
                  <div
                    className="h-100 rounded-4 overflow-hidden"
                    style={{ ...imageCardStyle, minHeight: "220px" }}
                  >
                    <TilteCard
                      imageSrc="/stateimages/fifyplus.jpg"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      {...tiltedCommon}
                    />
                  </div>
                </div>

                {/* ROW 2 - COL 2 : TEXT CARD */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="400">
                  <div
                    className="h-100 rounded-4 d-flex flex-column align-items-center text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #0b1120 0%, #111827 100%)",
                      border: "1px solid rgba(148,163,184,0.35)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.6)",
                    }}
                  >
                    <div
                      className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        border: "1px solid rgba(56,189,248,0.6)",
                        background:
                          "radial-gradient(circle, rgba(15,23,42,1) 0%, rgba(15,23,42,0.2) 100%)",
                        color: "#00e0ff",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>
                        60+
                      </span>
                    </div>

                    <h5 className="fw-semibold mb-2 text-white" style={{ fontFamily: "orbitron" }}>
                      Projects Completed
                    </h5>

                    <p className="mb-0" style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                      <ShinyText
                        text="Websites, web apps, mobile apps, and campaigns delivered across industries."
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                  </div>
                </div>

                {/* ROW 2 - COL 3 : IMAGE (Tilted) */}
                <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="500">
                  <div
                    className="h-100 rounded-4 overflow-hidden"
                    style={{ ...imageCardStyle, minHeight: "220px" }}
                  >
                    <TilteCard
                      imageSrc="/stateimages/exp.jpg"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="100%"
                      imageWidth="100%"
                      {...tiltedCommon}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT GRID */}
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default NexaStatsSection;
