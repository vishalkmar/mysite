import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Galaxy from "../Ui/background/Galaxy";

const GalaxyHeroBanner = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(140);

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
      {/* 🌌 Galaxy Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={2.7}
          glowIntensity={0.7}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="galaxy-overlay" />

      {/* Content */}
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
                textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                fontFamily: "orbitron",
              }}
            >
            
    Custom Software Solutions
             
  <br />
              <span className="galaxy-gradient-text">{text}</span>
            </h1>

            <button className="btn galaxy-btn btn-lg px-5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes blink {
          0%,100%{border-color:transparent}
          50%{border-color:#00f2fe}
        }

        .galaxy-overlay{
          position:absolute;
          inset:0;
          z-index:1;
          background: linear-gradient(
            rgba(5,11,24,0.85),
            rgba(5,11,24,0.45)
          );
        }

        .galaxy-gradient-text{
          display:inline-block;
          background: linear-gradient(90deg, #ffffff 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-right: 0.15em solid #00f2fe;
          animation: blink 0.8s step-end infinite;
          padding-right: 6px;
          font-size: 3.8rem;
        }

        .galaxy-btn{
          border:none;
          border-radius:999px;
          font-weight:700;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          box-shadow: 0 16px 40px rgba(0,242,254,0.25);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .galaxy-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 22px 50px rgba(0,242,254,0.35);
        }

        @media(max-width:768px){
          .galaxy-gradient-text{font-size:2.8rem}
        }
        @media(max-width:576px){
          .galaxy-gradient-text{font-size:2.3rem}
        }
      `}</style>
    </section>
  );
};

export default GalaxyHeroBanner;
