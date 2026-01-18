import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPenNib, FaBullhorn, FaChartBar, FaLightbulb } from 'react-icons/fa';
import cmImg from '../../serviceImages/software/contentmarketingthree.jpg'; // Replace with actual image path

const ContentMarketingInfoSection = () => {
  const [active, setActive] = useState('overview');

  const content = {
    overview: {
      title: 'What is Content Marketing?',
      desc: 'Content Marketing focuses on creating, publishing, and distributing valuable content to attract, engage, and retain your audience — ultimately driving profitable customer action.',
    },
    benefits: {
      title: 'Key Benefits of Content Marketing',
      desc: '• Build trust & authority\n• Boost SEO & visibility\n• Generate quality leads\n• Support every stage of the funnel\n• Long-term ROI',
    },
    strategies: {
      title: 'Our Content Strategies',
      desc: '• Blogging & Articles\n• Video Scripts & Reels\n• Infographics & Visuals\n• Case Studies & Whitepapers\n• E-books & Guides',
    },
    formats: {
      title: 'Formats We Deliver',
      desc: '• Web Content\n• Email Sequences\n• Social Media Posts\n• Landing Page Copy\n• Press Releases',
    },
  };

  return (
    <>
      <style>
        {`
          .cm-btn {
            font-family: orbitron;
            margin-right: 0.5rem;
            margin-bottom: 1rem;
          }
          .cm-btn.active {
            background-color: #00f2fe;
            color: #0a1a2e;
          }
          .cm-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .cm-image:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>

      <div className="container-fluid py-5"  style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'orbitron'
            }}>
              <span style={{ color: '#6f42c1' }}>Strategic</span> Content Marketing
            </h2>
            <p className="lead" style={{ color: '#ced4da' }}>
              Empower your brand with storytelling that drives results.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={cmImg} alt="Content Marketing" className="img-fluid cm-image" />
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <button className={`btn btn-outline-info cm-btn ${active === 'overview' ? 'active' : ''}`} onClick={() => setActive('overview')}>
                  <FaPenNib className="me-2" /> Overview
                </button>
                <button className={`btn btn-outline-info cm-btn ${active === 'benefits' ? 'active' : ''}`} onClick={() => setActive('benefits')}>
                  <FaBullhorn className="me-2" /> Benefits
                </button>
                <button className={`btn btn-outline-info cm-btn ${active === 'strategies' ? 'active' : ''}`} onClick={() => setActive('strategies')}>
                  <FaChartBar className="me-2" /> Strategies
                </button>
                <button className={`btn btn-outline-info cm-btn ${active === 'formats' ? 'active' : ''}`} onClick={() => setActive('formats')}>
                  <FaLightbulb className="me-2" /> Formats
                </button>
              </div>

              <div style={{ background: '#0f2b4c', padding: '1.5rem', borderRadius: '15px', color: 'white' }}>
                <h4 style={{ fontFamily: 'orbitron', color: '#00f2fe' }}>{content[active].title}</h4>
                <p style={{ whiteSpace: 'pre-line', color: '#adb5bd' }}>
                  {content[active].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMarketingInfoSection;
