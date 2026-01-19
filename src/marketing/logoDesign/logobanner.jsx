import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

// ✅ Either import your image like this:
// import logobanner from "../assets/logobanner.jpg";

const HeroLogoBanner = ({ logobanner }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // ✅ FIX: texts array correctly defined with useMemo
  const texts = useMemo(
    () => [
      "Creative Logo Designs",
      "Brand Identity Solutions",
      "Minimal & Timeless Logos",
      "Custom Vector Creations",
      "Modern Typography Logos",
      "Business & Startup Branding",
      "Symbol & Iconic Logos",
      "High-Impact Logo Concepts",
      "Logo Revamp & Redesign",
      "Versatile Branding Assets",
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const current = loopNum % texts.length;
    const fullText = texts[current];

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      // ✅ use prevText logic via current state "text" is okay, but keep simple:
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        height: "90vh",
        minHeight: "500px",
        backgroundImage: `linear-gradient(rgba(10, 26, 46, 0.6), rgba(26, 58, 106, 0.1)), url(${logobanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            data-aos="fade-up"
          >
            <h1
              className="display-3 fw-bold mb-4"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span
                className="gradient-text"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRight: "0.15em solid #4facfe",
                  animation: "blink-caret 0.75s step-end infinite",
                  paddingRight: "5px",
                  fontFamily: "orbitron",
                  fontSize: "4rem",
                }}
              >
                {text}
              </span>
            </h1>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4facfe; }
        }

        .gradient-text { display: inline-block; }

        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
        }

        @media (max-width: 576px) {
          .display-3 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default HeroLogoBanner;
