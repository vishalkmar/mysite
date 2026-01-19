import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Plasma from "../Ui/background/Plazma";

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

  const texts = useMemo(
    () => [
      "Custom Web Applications",
      "Responsive Website Design",
      "Full Stack Development",
      "Enterprise-Grade Solutions",
      "Scalable Web Architecture",
      "Next.js & React Experts",
      "Modern UI/UX Experiences",
      "Digital Solutions that Convert",
    ],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((p) => p + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        height: "90vh",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        background: "#050b18",
      }}
    >
      {/* ✅ Plasma Background Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Plasma
          color="#edf6f7"
          speed={0.6}
          direction="forward"
          scale={1.15}
          opacity={0.9}
          mouseInteractive={true}
        />
      </div>

      {/* ✅ Dark overlay for readability (important) */}
      <div className="hero-overlay" />

      {/* ✅ Content layer */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            data-aos="fade-up"
          >
            <h1
              className="display-3 fw-bold mb-4"
              style={{
                color: "rgba(255, 255, 255, 0.92)",
                textShadow: "0 2px 12px rgba(0, 0, 0, 0.35)",
                fontFamily: "orbitron",
              }}
            >
              Web Development That Accelerates Growth <br />
              <span className="gradient-text">{text}</span>
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
            rgba(5,11,24,0.78),
            rgba(5,11,24,0.35)
          );
        }

        .gradient-text{
          display:inline-block;
          background: linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%);
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
          background: linear-gradient(90deg, #ecf1f5 0%, #bac4c4 100%);
          box-shadow: 0 12px 30px rgba(0,242,254,0.18);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .hero-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(0,242,254,0.22);
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
