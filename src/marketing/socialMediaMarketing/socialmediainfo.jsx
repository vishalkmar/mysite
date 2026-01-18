import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHashtag, FaHeart, FaComments, FaSearch } from 'react-icons/fa';
import smmImg from '../../serviceImages/software/socialmediathree.jpg'; // Replace with actual image path

const SocialMediaMarketingInfoSection = () => {
  const [active, setActive] = useState('overview');

  const content = {
    overview: {
      title: 'What is Social Media Marketing?',
      desc: 'Social Media Marketing (SMM) uses platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your brand, connect with your audience, and drive traffic and sales.',
    },
    benefits: {
      title: 'Key Benefits of SMM',
      desc: '• Boost brand awareness\n• Drive targeted traffic\n• Foster customer engagement\n• Improve brand loyalty\n• Cost-effective promotion',
    },
    strategies: {
      title: 'Our SMM Strategies',
      desc: '• Content Calendars\n• Paid Campaigns (Meta, LinkedIn, Twitter)\n• Storytelling & Reels\n• Influencer Collaborations\n• Hashtag Research',
    },
    platforms: {
      title: 'Top Platforms We Target',
      desc: '• Facebook\n• Instagram\n• Twitter (X)\n• LinkedIn\n• Pinterest\n• YouTube & Snapchat',
    },
  };

  return (
    <>
      <style>
        {`
          .smm-btn {
            font-family: orbitron;
            margin-right: 0.5rem;
            margin-bottom: 1rem;
          }
          .smm-btn.active {
            background-color: #00f2fe;
            color: #0a1a2e;
          }
          .smm-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .smm-image:hover {
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
              <span style={{ color: '#6f42c1' }}>Engaging</span> Social Media Marketing
            </h2>
            <p className="lead" style={{ color: '#ced4da' }}>
              Elevate your brand with powerful campaigns on top social platforms.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={smmImg} alt="Social Media Marketing" className="img-fluid smm-image" />
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <button className={`btn btn-outline-info smm-btn ${active === 'overview' ? 'active' : ''}`} onClick={() => setActive('overview')}>
                  <FaHashtag className="me-2" /> Overview
                </button>
                <button className={`btn btn-outline-info smm-btn ${active === 'benefits' ? 'active' : ''}`} onClick={() => setActive('benefits')}>
                  <FaHeart className="me-2" /> Benefits
                </button>
                <button className={`btn btn-outline-info smm-btn ${active === 'strategies' ? 'active' : ''}`} onClick={() => setActive('strategies')}>
                  <FaComments className="me-2" /> Strategies
                </button>
                <button className={`btn btn-outline-info smm-btn ${active === 'platforms' ? 'active' : ''}`} onClick={() => setActive('platforms')}>
                  <FaSearch className="me-2" /> Platforms
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

export default SocialMediaMarketingInfoSection;
