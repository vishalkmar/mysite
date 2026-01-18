import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaBullhorn } from 'react-icons/fa';
import showcase from '../../serviceImages/software/socialmediatwo.jpg'; // Replace with your actual image path

const SMMShowcase = () => {
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

      <div className='container-fluid py-5' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6">
              <img
                src={showcase}
                alt="Social Media Marketing"
                className="img-fluid smm-image"
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
                <span style={{ color: '#6f42c1' }}>Smart</span> Social Media Marketing
              </h2>
              <p className="lead mb-5" style={{ color: '#6c757d' }}>
                Build your brand and engage your audience through strategic social platforms.
              </p>

              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#3b5998' }}>
                      <FaFacebookF />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Facebook Campaigns</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Reach your target audience with smart ad spend.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#e4405f' }}>
                      <FaInstagram />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Instagram Growth</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Visually appealing content to boost engagement.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#1da1f2' }}>
                      <FaTwitter />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Twitter Strategy</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Real-time communication with trending content.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#ffc107' }}>
                      <FaBullhorn />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Brand Promotion</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Build brand identity with engaging campaigns and stories.
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

export default SMMShowcase;
