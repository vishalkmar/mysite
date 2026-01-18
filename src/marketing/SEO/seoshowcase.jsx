import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaChartLine, FaGlobe, FaThumbsUp } from 'react-icons/fa';
import showcase from '../../serviceImages/software/seotwo.jpg'; // Replace with your actual SEO image path

const SEOShowcase = () => {
  return (
    <>
      <style>
        {`
          .feature-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
          }
          .feature-card:hover .feature-icon {
            transform: rotate(10deg) scale(1.1);
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

      <div className='container-fluid py-5' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6">
              <img
                src={showcase}
                alt="SEO Services"
                className="img-fluid seo-image"
                style={{
                  maxHeight: '800px',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4" style={{
                background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'orbitron'
              }}>
                <span style={{ color: '#6f42c1' }}>Targeted</span> SEO Strategies
              </h2>
              <p className="lead mb-5" style={{ color: '#6c757d' }}>
                Increase your online visibility and drive qualified traffic to your website.
              </p>

              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#6f42c1' }}>
                      <FaSearch />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Keyword Research</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Find the best keywords to target your ideal audience.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#20c997' }}>
                      <FaChartLine />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>On-Page Optimization</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Optimize content, tags, and structure for better rankings.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#dc3545' }}>
                      <FaGlobe />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Global & Local SEO</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Rank high globally or dominate your local search.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#ffc107' }}>
                      <FaThumbsUp />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Authority Building</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Earn trust and credibility with strong backlinks and trust signals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  );
};

export default SEOShowcase;
