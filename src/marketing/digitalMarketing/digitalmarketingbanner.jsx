import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import digitalmarketingbanner from '../../serviceImages/software/digitalmarketing.jpg';
import { GridScan } from "../../Ui/background/GridScan";

const GridScanHeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        height: "90vh",
        minHeight: "520px",
        background: "#050b18",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ✅ GridScan Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* ✅ Overlay for readability */}
      <div className="gridscan-overlay" />

      {/* ✅ Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            data-aos="fade-up"
          >
            {/* 🔥 Digital Marketing Headline */}
            <h1
              className="display-3 fw-bold mb-3"
              style={{
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 18px rgba(0,0,0,0.55)",
                fontFamily: "orbitron",
              }}
            >
              Digital Marketing That <br />
              <span className="gridscan-gradient-text">
                Drives Real Business Growth
              </span>
            </h1>

            {/* 🔹 Sub-headline */}
            <p
              className="lead text-white-50 mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Data-driven strategies, high-impact campaigns, and measurable
              results across SEO, social media, and paid advertising.
            </p>

            <button className="btn gridscan-btn btn-lg px-5 py-2">
              Grow Your Brand
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .gridscan-overlay{
          position:absolute;
          inset:0;
          z-index:1;
          background:
            radial-gradient(900px 520px at 50% 40%, rgba(255,159,252,0.12), transparent 60%),
            linear-gradient(rgba(5,11,24,0.88), rgba(5,11,24,0.55));
          pointer-events:none;
        }

        .gridscan-gradient-text{
          background: linear-gradient(90deg, #ffffff 0%, #FF9FFC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gridscan-btn{
          border:none;
          border-radius:999px;
          font-weight:700;
          letter-spacing:0.4px;
          background: linear-gradient(90deg, #FF9FFC, #5227FF);
          box-shadow: 0 16px 40px rgba(255,159,252,0.25);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .gridscan-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 22px 50px rgba(255,159,252,0.35);
        }

        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
        }

        @media (max-width: 576px) {
          .display-3 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default GridScanHeroBanner;
