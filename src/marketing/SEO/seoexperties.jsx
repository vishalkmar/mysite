import React from 'react';
import {
  RiSearchLine,
  RiCodeSSlashLine,
  RiExternalLinkLine,
  RiSettings3Line,
  RiFileTextLine,
  RiMapPinLine,
  RiBarChart2Line,
  RiGoogleLine,
  RiPieChart2Line,
  RiFileList3Line,
  RiShieldCheckLine,
  RiToolsLine,
  RiPenNibLine,
  RiRocketLine,
  RiBugLine,
  RiLightbulbLine,
  RiGlobeLine,
  RiTeamLine,
  RiStackLine,
  RiSeoLine
} from 'react-icons/ri';

const SEOExpertise = () => {
  const seoSkills = [
    { name: "Keyword Research", icon: <RiSearchLine size={30} />, color: "#FF6B6B" },
    { name: "On-Page SEO", icon: <RiCodeSSlashLine size={30} />, color: "#007BFF" },
    { name: "Off-Page SEO", icon: <RiExternalLinkLine size={30} />, color: "#00C49A" },
    { name: "Technical SEO", icon: <RiSettings3Line size={30} />, color: "#F4A261" },
    { name: "SEO Copywriting", icon: <RiFileTextLine size={30} />, color: "#6A4C93" },
    { name: "Local SEO", icon: <RiMapPinLine size={30} />, color: "#2A9D8F" },
    { name: "SEO Audits", icon: <RiBarChart2Line size={30} />, color: "#E76F51" },
    { name: "Google Tools", icon: <RiGoogleLine size={30} />, color: "#4285F4" },
    { name: "Analytics", icon: <RiPieChart2Line size={30} />, color: "#F9AB00" },
    { name: "SEO Reports", icon: <RiFileList3Line size={30} />, color: "#FF5722" },
    { name: "SEO Security", icon: <RiShieldCheckLine size={30} />, color: "#1A73E8" },
    { name: "Optimization Tools", icon: <RiToolsLine size={30} />, color: "#2D9CDB" },
    { name: "Content Strategy", icon: <RiPenNibLine size={30} />, color: "#F72585" },
    { name: "SEO Growth", icon: <RiRocketLine size={30} />, color: "#A7287A" },
    { name: "Bug Fixing", icon: <RiBugLine size={30} />, color: "#78BC1F" },
    { name: "Innovative Ideas", icon: <RiLightbulbLine size={30} />, color: "#E65100" },
    { name: "Global SEO", icon: <RiGlobeLine size={30} />, color: "#0052CC" },
    { name: "Team Collaboration", icon: <RiTeamLine size={30} />, color: "#9C27B0" },
    { name: "SEO Stack", icon: <RiStackLine size={30} />, color: "#3A86FF" },
    { name: "SEO Mastery", icon: <RiSeoLine size={30} />, color: "#C9184A" }
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
          SEO Expertise
        </h2>

        <div className="row g-4">
          {seoSkills.map((skill, index) => (
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

export default SEOExpertise;
