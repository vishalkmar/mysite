import React from 'react';
import {
  FaPencilRuler, FaShapes, FaLightbulb, FaCogs, FaFont, FaDrawPolygon,
  FaPalette, FaMagic, FaObjectGroup, FaRocket, FaSketch, FaAdjust
} from 'react-icons/fa';
import {
  SiAdobeillustrator, SiAdobexd, SiFigma, SiInkscape
} from 'react-icons/si';

const LogoDesignExpertise = () => {
  const logoDesignSkills = [
    { name: "Creative Concepting", icon: <FaLightbulb size={30} />, color: "#FFD166" },
    { name: "Sketching & Drafting", icon: <FaPencilRuler size={30} />, color: "#EF476F" },
    { name: "Vector Design", icon: <FaDrawPolygon size={30} />, color: "#06D6A0" },
    { name: "Typography", icon: <FaFont size={30} />, color: "#118AB2" },
    { name: "Brand Identity", icon: <FaObjectGroup size={30} />, color: "#073B4C" },
    { name: "Color Theory", icon: <FaPalette size={30} />, color: "#A633FF" },
    { name: "Geometric Logos", icon: <FaShapes size={30} />, color: "#F72585" },
    { name: "Minimalist Logos", icon: <FaAdjust size={30} />, color: "#4361EE" },
    { name: "Logo Refinement", icon: <FaCogs size={30} />, color: "#FB5607" },
    { name: "Figma Design", icon: <SiFigma size={30} />, color: "#0ACF83" },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={30} />, color: "#FF9F1C" },
    { name: "Adobe XD", icon: <SiAdobexd size={30} />, color: "#FF2E63" },
    { name: "Inkscape", icon: <SiInkscape size={30} />, color: "#1E1E1E" },
    { name: "Creative Tools", icon: <FaMagic size={30} />, color: "#8338EC" },
    { name: "Logo Prototypes", icon: <FaSketch size={30} />, color: "#FB8500" },
    { name: "Final Logo Delivery", icon: <FaRocket size={30} />, color: "#219EBC" }
  ];

  return (
    <>
    <div className='container-fluid' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold responsive-text" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '4.5rem'
        }}>
          Logo Design Expertise
        </h2>

        <div className="row g-4">
          {logoDesignSkills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div
                className="tech-card p-3 text-center shadow-sm rounded h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  border: `1px solid ${skill.color}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px ${skill.color}40`;
                  e.currentTarget.style.backgroundColor = `${skill.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div
                  className="icon-wrapper mb-3 p-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                   background: `white`,
                    width: '70px',
                    height: '70px'
                  }}
                >
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                </div>
                <h5 className="mb-0" style={{
                  color: 'white',
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1px'
                }}>
                  {skill.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default LogoDesignExpertise;
