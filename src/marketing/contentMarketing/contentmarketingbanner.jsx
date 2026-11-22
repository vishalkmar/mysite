import React, { useState, useEffect ,useMemo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from '../../Ui/scrollAnimations';
import LuminousParticleOcean from '../../ApexUI-Kit/LuminousParticleOcean/LuminousParticleOcean.jsx';

const HeroContentMarketingBanner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

    const texts = useMemo(() => [
   "Engaging Blog Content",
    "SEO-Driven Articles",
    "Creative Copywriting",
    "Content Strategy Development",
    "High-Quality Video Scripts",
    "Social Media Content Plans",
    "Infographics & Visual Content",
    "Email Newsletter Copy",
    "Brand Storytelling Experts",
    "Conversion-Focused Writing"
  ], []);
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, !isDeleting && text === texts[loopNum % texts.length] ? 1000 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="content-marketing-hero position-relative overflow-hidden" data-pause-pointer-effects
      style={{
        height: '90vh',
        minHeight: '500px',
        backgroundColor: 'var(--site-bg)',
        isolation: 'isolate',
        display: 'flex',
        alignItems: 'center'
      }}>
      <LuminousParticleOcean
        sphereCount={100}
        sphereColor="#67d9ed"
        interactionStrength={15}
        separation={4}
        bgColor1="var(--site-bg)"
        bgColor2="#050915"
      />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h1 className="display-3 fw-bold mb-4" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}>
              <span className="gradient-text" style={{
                background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderRight: '0.15em solid #4facfe',
                animation: 'blink-caret 0.75s step-end infinite',
                paddingRight: '5px',
                fontFamily: "orbitron",
                fontSize: 'clamp(1.75rem, 5vw, 4rem)'
              }}>
                {text}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Cursor animation */}
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4facfe; }
        }
        
        .content-marketing-hero .gradient-text {
          display: inline-block;
        }
        @media (prefers-reduced-motion: reduce) {
          .content-marketing-hero .gradient-text {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroContentMarketingBanner;
