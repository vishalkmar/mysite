import React from 'react';
import {
  FaPenNib, FaBlogger, FaNewspaper, FaVideo, FaFileAlt,
  FaPhotoVideo, FaQuoteRight, FaPodcast, FaBullhorn
} from 'react-icons/fa';
import {
  SiGrammarly, SiSemrush, SiGoogleanalytics, SiSurveymonkey,
  SiNotion, SiBuzzfeed, SiHubspot, SiTrello
} from 'react-icons/si';

const ContentMarketingExpertise = () => {
  const contentSkills = [
    { name: "Blog Writing", icon: <FaBlogger size={30} />, color: "#F57C00" },
    { name: "SEO Copywriting", icon: <FaPenNib size={30} />, color: "#6A4C93" },
    { name: "Infographics", icon: <FaPhotoVideo size={30} />, color: "#1E90FF" },
    { name: "Video Scripts", icon: <FaVideo size={30} />, color: "#E50914" },
    { name: "Case Studies", icon: <FaFileAlt size={30} />, color: "#009688" },
    { name: "Press Releases", icon: <FaNewspaper size={30} />, color: "#607D8B" },
    { name: "Content Strategy", icon: <SiNotion size={30} />, color: "#000000" },
    { name: "Podcast Content", icon: <FaPodcast size={30} />, color: "#A020F0" },
    { name: "Social Captions", icon: <FaQuoteRight size={30} />, color: "#FF6B6B" },
    { name: "Buzz Marketing", icon: <SiBuzzfeed size={30} />, color: "#EE1C25" },
    { name: "Hubspot CMS", icon: <SiHubspot size={30} />, color: "#FF7A59" },
    { name: "SEO Tools (SEMRush)", icon: <SiSemrush size={30} />, color: "#FF5722" },
    { name: "Google Analytics", icon: <SiGoogleanalytics size={30} />, color: "#F9AB00" },
    { name: "Grammarly Review", icon: <SiGrammarly size={30} />, color: "#15C39A" },
    { name: "Surveys & Polls", icon: <SiSurveymonkey size={30} />, color: "#00BF6F" },
    // { name: "Google Podcasts", icon: <SiGooglepodcasts size={30} />, color: "#4285F4" },
    { name: "Trello Content Plans", icon: <SiTrello size={30} />, color: "#0079BF" },
    { name: "Content Promotion", icon: <FaBullhorn size={30} />, color: "#C9184A" }
  ];

  return (
    <>
    <div className='container-fluid' style={{backgroundColor: '#020617'  }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold responsive-text" style={{
          background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'orbitron',
          fontSize: '4.5rem'
        }}>
          Content Marketing Expertise
        </h2>

        <div className="row g-4">
          {contentSkills.map((skill, index) => (
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
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default ContentMarketingExpertise;
