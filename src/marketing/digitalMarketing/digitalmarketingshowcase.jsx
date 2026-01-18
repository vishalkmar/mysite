import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBullseye, FaGlobe, FaEnvelopeOpenText, FaPoll } from 'react-icons/fa';
import showcase from '../../serviceImages/software/digitalmarketingtwo.jpg'; // Update the path as per your project

const DigitalMarketingShowcase = () => {
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

      <div className='container-fluid py-5' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6">
              <img
                src={showcase}
                alt="Digital Marketing"
                className="img-fluid dm-image"
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
                <span style={{ color: '#6f42c1' }}>Result-Driven</span> Digital Marketing
              </h2>
              <p className="lead mb-5" style={{ color: '#6c757d' }}>
                Maximize your online visibility and ROI with targeted marketing strategies.
              </p>

              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#6f42c1' }}>
                      <FaBullseye />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Targeted Campaigns</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Reach your ideal audience through data-driven targeting.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#28a745' }}>
                      <FaGlobe />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>SEO & SEM</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Boost organic traffic and manage Google Ads effectively.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#ff5722' }}>
                      <FaEnvelopeOpenText />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Email Marketing</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Engage your audience with compelling and personalized email campaigns.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#17a2b8' }}>
                      <FaPoll />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Analytics & Reporting</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Track, measure, and optimize campaign performance in real time.
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

export default DigitalMarketingShowcase;
