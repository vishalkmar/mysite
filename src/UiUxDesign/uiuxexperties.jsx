import React from 'react';
import { 
  FaUserFriends, FaSitemap, FaMousePointer, FaEye, FaProjectDiagram,
  FaMobileAlt, FaTabletAlt, FaLaptop, FaLightbulb, FaPencilRuler
} from 'react-icons/fa';
import {
  SiFigma, SiAdobe, SiSketch, SiInvision,SiFramer
} from 'react-icons/si';

const UIUXExpertise = () => {
  const uiuxSkills = [
    { name: "User Research", icon: <FaUserFriends size={30} />, color: "#FF6B6B" },
    { name: "Information Architecture", icon: <FaSitemap size={30} />, color: "#4ECDC4" },
    { name: "Wireframing", icon: <FaProjectDiagram size={30} />, color: "#1A535C" },
    { name: "Interactive Prototypes", icon: <FaEye size={30} />, color: "#5C4D7D" },
    { name: "Usability Testing", icon: <FaMousePointer size={30} />, color: "#FF9F1C" },
    { name: "Mobile UX Design", icon: <FaMobileAlt size={30} />, color: "#06B6D4" },
    { name: "Tablet UX Design", icon: <FaTabletAlt size={30} />, color: "#3A86FF" },
    { name: "Web UX Design", icon: <FaLaptop size={30} />, color: "#7209B7" },
    { name: "Creative Direction", icon: <FaLightbulb size={30} />, color: "#F72585" },
    { name: "Design Systems", icon: <FaPencilRuler size={30} />, color: "#FFBE0B" },
    { name: "Figma", icon: <SiFigma size={30} />, color: "#0ACF83" },
    // { name: "Adobe XD", icon: <SiXd size={30} />, color: "#FF61F6" },
    { name: "Sketch", icon: <SiSketch size={30} />, color: "#F7B500" },
    { name: "InVision", icon: <SiInvision size={30} />, color: "#FF3366" },
    { name: "Framer", icon: <SiFramer size={30} />, color: "#0055FF" },
    { name: "Adobe Creative Suite", icon: <SiAdobe size={30} />, color: "#FF0000" }
  ];

  return (
    <>
    <div className='container-fluid' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%)' }}>
      <div className="container py-5">
        <h2 className="text-center responsive-text mb-5 fw-bold" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'orbitron',
          fontSize: '4.5rem'
        }}>
          UI/UX Design Expertise
        </h2>

        <div className="row g-4">
          {uiuxSkills.map((skill, index) => (
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
                  fontFamily: 'orbitron',
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
            font-size: 3.8rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default UIUXExpertise;
