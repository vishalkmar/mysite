import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import GradientBlinds from "../Ui/background/GradientBliend";

const HeroBanner = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);



  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        height: "90vh",
        minHeight: "520px",
        display: "flex",
        alignItems: "center",
        background: "#050b18",
      }}
    >
      {/* ✅ GradientBlinds Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* ✅ Dark overlay for text readability */}
      <div className="hero-overlay" />

      {/* ✅ Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            data-aos="fade-up"
          >
            <h1
              className="display-3 fw-bold mb-4"
              style={{
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 14px rgba(0,0,0,0.45)",
                fontFamily: "orbitron",
              }}
            >
             High-Performance Mobile Apps for Modern Businesses<br />
              {/* <span className="gradient-text">{text}</span> */}
            </h1>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn hero-btn btn-lg px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4facfe; }
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          z-index:1;
          background: linear-gradient(
            rgba(5,11,24,0.82),
            rgba(5,11,24,0.45)
          );
        }

        .gradient-text{
          display:inline-block;
          background: linear-gradient(90deg, rgb(242,244,247) 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-right: 0.15em solid #4facfe;
          animation: blink-caret 0.75s step-end infinite;
          padding-right: 6px;
          font-size: 4rem;
        }

        .hero-btn{
          border: none;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: .4px;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          box-shadow: 0 14px 36px rgba(0,242,254,0.22);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .hero-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 20px 44px rgba(0,242,254,0.28);
        }

        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
          .gradient-text{ font-size: 2.8rem; }
        }

        @media (max-width: 576px) {
          .display-3 { font-size: 2rem; }
          .gradient-text{ font-size: 2.3rem; }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
