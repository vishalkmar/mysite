import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode, FaCogs, FaNetworkWired, FaBug } from 'react-icons/fa';
import showcase from '../serviceImages/software/softwaretwo.jpg'; // Apne image ka path yahan adjust karen

const SoftwareDevelopmentShowcase = () => {
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
          .software-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .software-image:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>

      <div className='container-fluid py-5' style={{ background: 'linear-gradient(135deg, #0a1a2e 0%)' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6">
              <img
                src={showcase}
                alt="Software Development Showcase"
                className="img-fluid software-image"
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
                <span style={{ color: '#6f42c1' }}>Custom</span> Software Development
              </h2>
              <p className="lead mb-5" style={{ color: '#6c757d' }}>
                Scalable, secure, and high-performance software solutions tailored to your business needs.
              </p>

              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#007bff' }}>
                      <FaLaptopCode />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Full-Stack Development</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Frontend and backend excellence with modern tech stacks.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#6610f2' }}>
                      <FaCogs />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Custom Solutions</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Tailored software to solve your specific business challenges.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#20c997' }}>
                      <FaNetworkWired />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>System Integration</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Smooth integration across platforms and APIs.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#dc3545' }}>
                      <FaBug />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>QA & Testing</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Rigorous testing ensures quality and reliability at every step.
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

export default SoftwareDevelopmentShowcase;
