import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPenNib, FaBullhorn, FaSearch, FaChartLine } from 'react-icons/fa';
import showcase from '../../serviceImages/software/contentmarketingtwo.jpg'; // Correct path to your image

const ContentMarketingShowcase = () => {
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
          .content-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .content-image:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          }
        `}
      </style>

      <div className='container-fluid py-5' style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6">
              <img
                src={showcase}
                alt="Content Marketing Showcase"
                className="img-fluid content-image"
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
                <span style={{ color: '#6f42c1' }}>Strategic</span> Content Marketing
              </h2>
              <p className="lead mb-5" style={{ color: '#6c757d' }}>
                Drive traffic, engagement, and brand loyalty through powerful content strategies.
              </p>

              <div className="row g-4">
                {/* Feature 1 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#6f42c1' }}>
                      <FaPenNib />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Content Creation</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      High-quality blog posts, articles, and visual content tailored for your audience.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#ff9800' }}>
                      <FaBullhorn />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Content Distribution</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Multi-platform strategies to ensure your content reaches the right audience.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#00bcd4' }}>
                      <FaSearch />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>SEO Optimization</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Optimize content for search engines to increase organic visibility.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="col-md-6">
                  <div className="feature-card p-4 h-100 rounded-3" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
                    <div className="feature-icon" style={{ backgroundColor: '#4caf50' }}>
                      <FaChartLine />
                    </div>
                    <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: 'orbitron' }}>Performance Analytics</h4>
                    <p style={{
                      background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Track performance and adapt strategies using real-time insights.
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

export default ContentMarketingShowcase;
