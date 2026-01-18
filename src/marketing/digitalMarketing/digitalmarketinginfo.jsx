import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBullhorn, FaGlobe, FaUsers, FaChartPie } from 'react-icons/fa';
import dmImg from '../../serviceImages/software/digitalmarketingthree.jpg'; // Replace with actual path

const DigitalMarketingInfoSection = () => {
  const [active, setActive] = useState('overview');

  const content = {
    overview: {
      title: 'What is Digital Marketing?',
      desc: 'Digital Marketing promotes brands through online channels — websites, social media, search engines, email, and mobile apps — to reach and engage your target audience.',
    },
    benefits: {
      title: 'Why Digital Marketing?',
      desc: '• Global reach\n• Real-time results\n• Cost-effective campaigns\n• Better audience targeting\n• Higher ROI and conversions',
    },
    strategies: {
      title: 'Our DM Strategies',
      desc: '• SEO and SEM\n• Social Media Ads\n• Influencer Campaigns\n• Email & Automation\n• Content Marketing',
    },
    tools: {
      title: 'Top Tools We Use',
      desc: '• Google Ads\n• Meta Business Suite\n• HubSpot\n• Mailchimp\n• Canva & Buffer',
    },
  };

  return (
    <>
      <style>
        {`
          .dm-btn {
            font-family: orbitron;
            margin-right: 0.5rem;
            margin-bottom: 1rem;
          }
          .dm-btn.active {
            background-color: #00f2fe;
            color: #0a1a2e;
          }
          .dm-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .dm-image:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>

      <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'orbitron'
            }}>
              <span style={{ color: '#6f42c1' }}>Powerful</span> Digital Marketing
            </h2>
            <p className="lead" style={{ color: '#ced4da' }}>
              Discover how we help your brand thrive online with modern marketing.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={dmImg} alt="Digital Marketing" className="img-fluid dm-image" />
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <button className={`btn btn-outline-info dm-btn ${active === 'overview' ? 'active' : ''}`} onClick={() => setActive('overview')}>
                  <FaBullhorn className="me-2" /> Overview
                </button>
                <button className={`btn btn-outline-info dm-btn ${active === 'benefits' ? 'active' : ''}`} onClick={() => setActive('benefits')}>
                  <FaGlobe className="me-2" /> Benefits
                </button>
                <button className={`btn btn-outline-info dm-btn ${active === 'strategies' ? 'active' : ''}`} onClick={() => setActive('strategies')}>
                  <FaUsers className="me-2" /> Strategies
                </button>
                <button className={`btn btn-outline-info dm-btn ${active === 'tools' ? 'active' : ''}`} onClick={() => setActive('tools')}>
                  <FaChartPie className="me-2" /> Tools
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

export default DigitalMarketingInfoSection;
