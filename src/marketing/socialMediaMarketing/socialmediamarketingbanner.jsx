import React, { useState, useEffect ,useMemo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import WarpSpeed from '../../Ui/background/WarpSpeed';

const HeroSocialMediaBanner = () => {
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
    "Social Media Strategy",
    "Creative Content Campaigns",
    "Brand Awareness Boost",
    "Instagram & Facebook Ads",
    "Audience Engagement Experts",
    "Trend-Driven Reels & Shorts",
    "Cross-Platform Branding",
    "Influencer Collaborations",
    "Community Management",
    "Social Analytics & Reporting"
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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="position-relative overflow-hidden"
      style={{
        height: '90vh',
        minHeight: '500px',
        backgroundColor: 'var(--site-bg)',
        display: 'flex',
        alignItems: 'center',
        isolation: 'isolate'
      }}>
      <WarpSpeed style={{ zIndex: -2 }} />
      {/* Soft centre shade so the heading stays crisp over the streaks */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 45% 35% at 50% 50%, rgba(var(--site-bg-rgb), 0.55), transparent 70%), linear-gradient(0deg, var(--site-bg), transparent 18%)'
      }} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h1 className="display-3 fw-bold mb-4" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}>
              <span className="gradient-text" style={{
                background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderRight: '0.15em solid #4facfe',
                animation: 'blink-caret 0.75s step-end infinite',
                paddingRight: '5px',
                fontFamily: 'orbitron',
                fontSize: '4rem'
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

        .gradient-text {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSocialMediaBanner;
