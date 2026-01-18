import React, { useState, useEffect ,useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import webdesignbanner from '../serviceImages/software/webdesign.jpg'; // Replace with your actual Web Design banner image path
// import webdesignbanner from  '../serviceImages/software/webdesigntwo.jpg'

const HeroWebDesignBanner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = useMemo(() => [
 "Responsive Website Design",
    "Landing Pages That Convert",
    "SEO-Friendly Layouts",
    "Clean & Modern Interfaces",
    "Cross-Browser Compatibility",
    "Fast Loading Websites",
    "CMS Integration Experts",
    "Custom Theme Development",
    "User-Centered Design",
    "Mobile-Optimized Sites"
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
        backgroundImage: `linear-gradient(rgba(10, 26, 46, 0.6), rgba(26, 58, 106, 0.1)), url(${webdesignbanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
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
                fontSize: '4rem'
              }}>
                {text}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Animation for text cursor */}
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
          
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroWebDesignBanner;
