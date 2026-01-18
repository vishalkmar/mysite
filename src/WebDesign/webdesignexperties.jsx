import React from 'react';
import { 
  FaPaintBrush, FaMobile, FaDesktop, FaSearch, FaShoppingCart,
  FaPalette, FaServer, FaEye, FaLightbulb, FaRocket
} from 'react-icons/fa';
import { 
  SiFigma, SiAdobe, SiWordpress, SiShopify, SiWebflow,
  SiSquarespace, SiWix, SiElementor, SiTailwindcss, SiBootstrap
} from 'react-icons/si';

const WebDesignExpertise = () => {
  const expertiseAreas = [
    { name: "UI/UX Design", icon: <FaPaintBrush size={30} />, color: "#FF6B6B" },
    { name: "Responsive Design", icon: <FaMobile size={30} />, color: "#4ECDC4" },
    { name: "Landing Pages", icon: <FaDesktop size={30} />, color: "#45B7D1" },
    { name: "SEO-Optimized Design", icon: <FaSearch size={30} />, color: "#FFBE0B" },
    { name: "E-Commerce Design", icon: <FaShoppingCart size={30} />, color: "#FF9F1C" },
    { name: "Color Theory", icon: <FaPalette size={30} />, color: "#A663CC" },
    { name: "Prototyping", icon: <FaEye size={30} />, color: "#B5179E" },
    { name: "Creative Direction", icon: <FaLightbulb size={30} />, color: "#F72585" },
    { name: "Performance Design", icon: <FaRocket size={30} />, color: "#7209B7" },
    { name: "Figma Design", icon: <SiFigma size={30} />, color: "#0ACF83" },
    { name: "Adobe Creative Suite", icon: <SiAdobe size={30} />, color: "#FF0000" },
    { name: "WordPress Design", icon: <SiWordpress size={30} />, color: "#21759B" },
    { name: "Shopify Themes", icon: <SiShopify size={30} />, color: "#95BF47" },
    { name: "Webflow Design", icon: <SiWebflow size={30} />, color: "#4353FF" },
    { name: "Squarespace Design", icon: <SiSquarespace size={30} />, color: "#222222" },
    { name: "Wix Design", icon: <SiWix size={30} />, color: "#0C6EFC" },
    { name: "Elementor", icon: <SiElementor size={30} />, color: "#92003B" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, color: "#06B6D4" },
    { name: "Bootstrap Design", icon: <SiBootstrap size={30} />, color: "#7952B3" },
    { name: "Frontend Development", icon: <FaServer size={30} />, color: "#3A86FF" }
  ];

  return (
    <>
    <div className='container-fluid' style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
      <div className="container py-5">
        <h2 className="text-center responsive-text mb-5 fw-bold" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'orbitron',
          fontSize: '4.5rem'
        }}>
          Our Web Design Expertise
        </h2>
        
        <div className="row g-4">
          {expertiseAreas.map((tech, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div 
                className="tech-card p-3 text-center shadow-sm rounded h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  border: `1px solid ${tech.color}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 20px ${tech.color}40`;
                  e.currentTarget.style.backgroundColor = `${tech.color}15`;
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
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                </div>
                <h5 className="mb-0" style={{ 
                  color: 'white',
                  fontFamily: 'orbitron',
                  fontWeight: '500',
                  letterSpacing: '1px'
                }}>
                  {tech.name}
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
            font-size: 3.8rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default WebDesignExpertise;