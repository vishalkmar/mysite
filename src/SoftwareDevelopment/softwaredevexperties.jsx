import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { 
  FaCloud, FaUsersCog, FaChartLine, FaExchangeAlt, FaDatabase,
  FaPhp, FaHtml5, FaShopify, FaMicrosoft, FaWordpress
} from 'react-icons/fa';
import { 
  SiMysql, SiMagento, SiDrupal, SiJavascript, SiPython,SiDotnet, SiTableau
} from 'react-icons/si';

const SoftwareDevelopmentExpertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  const expertiseAreas = [
    { name: "SAAS Development", icon: <FaCloud size={30} />, color: "#3a86ff" },
    { name: "CRM Development", icon: <FaUsersCog size={30} />, color: "#8338ec" },
    { name: "BI Apps Development", icon: <FaChartLine size={30} />, color: "#ff006e" },
    { name: "Integration Development", icon: <FaExchangeAlt size={30} />, color: "#fb5607" },
    { name: "Database Development", icon: <FaDatabase size={30} />, color: "#00b4d8" },
    { name: "PHP/MySQL Development", icon: <FaPhp size={30} />, color: "#777bb4" },
    { name: "HTML5/CSS", icon: <FaHtml5 size={30} />, color: "#e34f26" },
    { name: "Magento Ecommerce", icon: <SiMagento size={30} />, color: "#ee672f" },
    { name: "Microsoft Development", icon: <FaMicrosoft size={30} />, color: "#0078d7" },
    { name: "Drupal CMS", icon: <SiDrupal size={30} />, color: "#0678be" },
    { name: "JavaScript Solutions", icon: <SiJavascript size={30} />, color: "#f7df1e" },
    { name: "Python Applications", icon: <SiPython size={30} />, color: "#3776ab" },
    // { name: "Java Systems", icon: <SiJava size={30} />, color: "#007396" },
    // { name: "C# Development", icon: <SiCsharp size={30} />, color: "#239120" },
    { name: ".NET Framework", icon: <SiDotnet size={30} />, color: "#512bd4" },
    // { name: "Power BI Solutions", icon: <SiPowerbi size={30} />, color: "#f2c811" },
    { name: "Tableau Analytics", icon: <SiTableau size={30} />, color: "#1f377c" },
    { name: "Shopify Stores", icon: <FaShopify size={30} />, color: "#95bf47" },
    { name: "WordPress CMS", icon: <FaWordpress size={30} />, color: "#21759b" },
    { name: "MySQL Solutions", icon: <SiMysql size={30} />, color: "#4479a1" }
  ];

  return (
    <>
    <div className='container-fluid' style={{background: 'linear-gradient(135deg, #0a1a2e 0%'}}>
      <div className="container py-5">
        <h2 className="text-center responsive-text mb-5 fw-bold" data-aos="zoom-in" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'orbitron',
          fontSize: '4.5rem'
        }}>
          Our Software Development Expertise
        </h2>
        
        <div className="row g-4">
          {expertiseAreas.map((tech, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay={`${(index % 6) * 80}`}>
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
            font-size: 2.8rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareDevelopmentExpertise;