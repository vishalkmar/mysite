import React from 'react';
import { 
  FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaUsers, FaComments,
  FaGlobe, FaPenNib, FaEye, FaHandHoldingUsd, FaSearchDollar
} from 'react-icons/fa';
import {
  SiGoogleanalytics, SiGoogletagmanager, SiFacebook, SiInstagram,
  SiLinkedin, SiMailchimp, SiSemrush, SiHubspot
} from 'react-icons/si';

const DigitalMarketingExpertise = () => {
  const marketingSkills = [
    { name: "SEO", icon: <FaSearchDollar size={30} />, color: "#0A9396" },
    { name: "Social Media Marketing", icon: <FaComments size={30} />, color: "#3B5998" },
    { name: "Email Marketing", icon: <FaEnvelopeOpenText size={30} />, color: "#F4A261" },
    { name: "PPC Advertising", icon: <FaBullhorn size={30} />, color: "#E63946" },
    { name: "Lead Generation", icon: <FaHandHoldingUsd size={30} />, color: "#2A9D8F" },
    { name: "Audience Targeting", icon: <FaUsers size={30} />, color: "#6D597A" },
    { name: "Google Analytics", icon: <SiGoogleanalytics size={30} />, color: "#F57C00" },
    { name: "Google Tag Manager", icon: <SiGoogletagmanager size={30} />, color: "#1A73E8" },
    { name: "Facebook Ads", icon: <SiFacebook size={30} />, color: "#4267B2" },
    { name: "Instagram Strategy", icon: <SiInstagram size={30} />, color: "#E1306C" },
    { name: "LinkedIn Campaigns", icon: <SiLinkedin size={30} />, color: "#0077B5" },
    { name: "Content Marketing", icon: <FaPenNib size={30} />, color: "#FF6B6B" },
    { name: "Performance Tracking", icon: <FaChartLine size={30} />, color: "#5C4D7D" },
    { name: "Web Traffic Optimization", icon: <FaGlobe size={30} />, color: "#1D3557" },
    { name: "Campaign Analytics", icon: <SiSemrush size={30} />, color: "#FF5722" },
    { name: "Marketing Automation", icon: <SiHubspot size={30} />, color: "#FF7A59" },
    { name: "Email Automation", icon: <SiMailchimp size={30} />, color: "#FFE01B" },
    { name: "Conversion Rate Optimization", icon: <FaEye size={30} />, color: "#7209B7" }
  ];

  return (
    <>
    <div className='container-fluid' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold responsive-text" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'orbitron',
          fontSize: '4.5rem'
        }}>
          Digital Marketing Expertise
        </h2>

        <div className="row g-4">
          {marketingSkills.map((skill, index) => (
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
            font-size: 3rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default DigitalMarketingExpertise;
