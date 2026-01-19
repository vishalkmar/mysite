import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Ballpit from "../Ui/background/Balloon";

const BallpitHeroBanner = () => {
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

// const texts = useMemo(
//   () => [
//     "UI/UX Design That Drives Engagement",
//     "Intuitive Interfaces for Modern Users",
//     "User-Centered Design Experiences",
//     "Beautiful, Functional & Scalable UI",
//   ],
//   []
// );


  // useEffect(() => {
  //   const current = loopNum % texts.length;
  //   const fullText = texts[current];

  //   const timer = setTimeout(() => {
  //     setText((prev) =>
  //       isDeleting
  //         ? fullText.substring(0, prev.length - 1)
  //         : fullText.substring(0, prev.length + 1)
  //     );

  //     setTypingSpeed(isDeleting ? 30 : 140);

  //     if (!isDeleting && text === fullText) {
  //       setTimeout(() => setIsDeleting(true), 900);
  //     } else if (isDeleting && text === "") {
  //       setIsDeleting(false);
  //       setLoopNum((p) => p + 1);
  //     }
  //   }, typingSpeed);

  //   return () => clearTimeout(timer);
  // }, [text, isDeleting, loopNum, typingSpeed, texts]);

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
      {/* ✅ Ballpit Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Ballpit
          count={50}
          gravity={0.01}
          friction={0.987}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>

      {/* ✅ Overlay for readability */}
      <div className="ballpit-overlay" />

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
                textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                fontFamily: "orbitron",
              }}
            >
             Design Eye Shine Graphic <br />
              {/* <span className="ballpit-gradient-text">{text}</span> */}
            </h1>

            <button className="btn ballpit-btn btn-lg px-5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%,100%{border-color:transparent}
          50%{border-color:#00f2fe}
        }

        // .ballpit-overlay{
        //   position:absolute;
        //   inset:0;
        //   z-index:1;
        //   background:
        //     radial-gradient(900px 520px at 50% 40%, rgba(0,242,254,0.10), transparent 60%),
        //     linear-gradient(rgba(5,11,24,0.86), rgba(5,11,24,0.55));
        //   pointer-events:none;
        // }

        .ballpit-gradient-text{
          display:inline-block;
          background: linear-gradient(90deg, #ffffff 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-right: 0.15em solid #00f2fe;
          animation: blink 0.8s step-end infinite;
          padding-right: 6px;
          font-size: 3.8rem;
        }

        .ballpit-btn{
          border:none;
          border-radius:999px;
          font-weight:700;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          box-shadow: 0 16px 40px rgba(0,242,254,0.25);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .ballpit-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 22px 50px rgba(0,242,254,0.35);
        }

        @media(max-width:768px){
          .ballpit-gradient-text{font-size:2.8rem}
        }
        @media(max-width:576px){
          .ballpit-gradient-text{font-size:2.3rem}
        }
      `}</style>
    </section>
  );
};

export default BallpitHeroBanner;
