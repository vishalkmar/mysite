import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaChartLine, FaLink, FaBullseye } from 'react-icons/fa';
import seoImg from '../../serviceImages/software/seothree.png'; // replace with actual image

const SEOInfoSection = () => {
  const [active, setActive] = useState('overview');

  const content = {
    overview: {
      title: 'What is SEO?',
      desc: 'SEO (Search Engine Optimization) improves your website visibility in search engines like Google. Higher visibility leads to more traffic, leads, and growth.',
    },
    benefits: {
      title: 'Benefits of SEO',
      desc: '• Increased organic traffic\n• Better user experience\n• Higher brand credibility\n• Long-term marketing strategy',
    },
    techniques: {
      title: 'Our SEO Techniques',
      desc: '• On-Page Optimization\n• Technical SEO\n• Link Building\n• Content Strategy\n• Mobile Optimization',
    },
    tools: {
      title: 'Tools We Use',
      desc: '• Google Search Console\n• Ahrefs\n• SEMrush\n• Yoast SEO\n• Screaming Frog',
    },
  };

  return (
    <>
      <style>
        {`
          .seo-btn {
            font-family: orbitron;
            margin-right: 0.5rem;
            margin-bottom: 1rem;
          }
          .seo-btn.active {
            background-color: #00f2fe;
            color: #0a1a2e;
          }
          .seo-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .seo-image:hover {
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
              <span style={{ color: '#6f42c1' }}>In-Depth</span> SEO Insights
            </h2>
            <p className="lead" style={{ color: '#ced4da' }}>
              Explore everything about SEO — benefits, methods, and tools we use.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={seoImg} alt="SEO Information" className="img-fluid seo-image" />
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <button className={`btn btn-outline-info seo-btn ${active === 'overview' ? 'active' : ''}`} onClick={() => setActive('overview')}>
                  <FaSearch className="me-2" /> Overview
                </button>
                <button className={`btn btn-outline-info seo-btn ${active === 'benefits' ? 'active' : ''}`} onClick={() => setActive('benefits')}>
                  <FaChartLine className="me-2" /> Benefits
                </button>
                <button className={`btn btn-outline-info seo-btn ${active === 'techniques' ? 'active' : ''}`} onClick={() => setActive('techniques')}>
                  <FaLink className="me-2" /> Techniques
                </button>
                <button className={`btn btn-outline-info seo-btn ${active === 'tools' ? 'active' : ''}`} onClick={() => setActive('tools')}>
                  <FaBullseye className="me-2" /> Tools
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

export default SEOInfoSection;
