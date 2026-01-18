import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMobileAlt, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import showcase from '../serviceImages/app/apptwo.jpg'
const AppDevelopmentShowcase = () => {
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
          .app-dev-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .app-dev-image:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>


<div className='container-fluid py-5' style={{backgroundColor: '#020617'  }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-6">
            <img 
              src={showcase} 
              alt="App Development Process" 
              className="img-fluid app-dev-image"
              style={{
                // border: '2px solid #f8f9fa',
                maxHeight: '800px',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4" style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', fontFamily:'orbitron'}}>
              <span style={{ color: '#6f42c1' }}>Premium</span> App Development Services
            </h2>
            <p className="lead mb-5" style={{ color: '#6c757d' }}>
              We craft high-performance mobile applications that drive engagement and business growth.
            </p>

            <div className="row g-4">
              {/* Feature 1 */}
              <div className="col-md-6">
                <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#6f42c1' }}>
                    <FaMobileAlt />
                  </div>
                  <h4 className="fw-bold mb-3 text-white" style={{ fontFamily:'orbitron'}}>Cross-Platform Apps</h4>
                  <p style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>
                    Build once, deploy everywhere with React Native and Flutter.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-6">
                <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#6610f2' }}>
                    <FaCode />
                  </div>
                  <h4 className="fw-bold mb-3 text-white" style={{ fontFamily:'orbitron'}}>Clean Code</h4>
                  <p style={{ background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>
                    Maintainable, scalable code following best practices.
                  </p>
                </div>
              </div>


              {/* Feature 5 */}
              <div className="col-md-6">
                <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#20c997' }}>
                    <FaRocket />
                  </div>
                  <h4 className="fw-bold mb-3 text-white" style={{ fontFamily:'orbitron'}}>Fast Performance</h4>
                  <p style={{ background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>
                    Optimized apps that load quickly and run smoothly.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="col-md-6">
                <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                  <div className="feature-icon" style={{ backgroundColor: '#dc3545' }}>
                    <FaShieldAlt />
                  </div>
                  <h4 className="fw-bold mb-3 text-white" style={{ fontFamily:'orbitron'}}>Security</h4>
                  <p style={{ background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>
                    Enterprise-grade security and data protection.
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

export default AppDevelopmentShowcase;