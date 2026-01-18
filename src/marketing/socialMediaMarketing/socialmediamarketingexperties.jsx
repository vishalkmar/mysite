import React from 'react';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube,
  FaPinterest, FaHashtag, FaPoll, FaRegClock, FaCamera, FaBullhorn
} from 'react-icons/fa';
import {
  SiMeta, SiHootsuite, SiBuffer, SiCanva, SiTiktok, SiSnapchat,
  SiSocialblade
} from 'react-icons/si';

const SocialMediaMarketingExpertise = () => {
  const socialSkills = [
    { name: "Facebook Marketing", icon: <FaFacebookF size={30} />, color: "#1877F2" },
    { name: "Instagram Growth", icon: <FaInstagram size={30} />, color: "#E1306C" },
    { name: "LinkedIn Outreach", icon: <FaLinkedinIn size={30} />, color: "#0077B5" },
    { name: "Twitter Engagement", icon: <FaTwitter size={30} />, color: "#1DA1F2" },
    { name: "YouTube SEO", icon: <FaYoutube size={30} />, color: "#FF0000" },
    { name: "Pinterest Boards", icon: <FaPinterest size={30} />, color: "#E60023" },
    { name: "TikTok Strategy", icon: <SiTiktok size={30} />, color: "#69C9D0" },
    { name: "Snapchat Ads", icon: <SiSnapchat size={30} />, color: "#FFFC00" },
    { name: "Hashtag Research", icon: <FaHashtag size={30} />, color: "#FF6B6B" },
    { name: "Content Scheduling", icon: <FaRegClock size={30} />, color: "#F4A261" },
    { name: "Live Engagement", icon: <FaPoll size={30} />, color: "#3A86FF" },
    { name: "Influencer Collab", icon: <FaBullhorn size={30} />, color: "#FF9F1C" },
    { name: "Canva Design", icon: <SiCanva size={30} />, color: "#00C4CC" },
    { name: "Meta Ads Manager", icon: <SiMeta size={30} />, color: "#4267B2" },
    { name: "Hootsuite Automation", icon: <SiHootsuite size={30} />, color: "#000000" },
    { name: "Buffer Analytics", icon: <SiBuffer size={30} />, color: "#168EEA" },
    { name: "Social Blade Tracking", icon: <SiSocialblade size={30} />, color: "#DB4437" },
    { name: "Reels/Shorts Creation", icon: <FaCamera size={30} />, color: "#C9184A" }
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
          Social Media Marketing Expertise
        </h2>

        <div className="row g-4">
          {socialSkills.map((skill, index) => (
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
            font-size: 2.8rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default SocialMediaMarketingExpertise;
