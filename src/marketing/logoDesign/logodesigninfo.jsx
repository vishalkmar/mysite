import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPaintBrush, FaStar, FaEye, FaFeatherAlt } from 'react-icons/fa';
import logoImg from '../../serviceImages/software/logodesignthree.jpg'; // replace with actual image path

const LogoDesignInfoSection = () => {
  const [active, setActive] = useState('overview');

  const content = {
    overview: {
      title: 'What is Logo Design?',
      desc: 'Logo design is the art of creating a unique symbol or mark that represents your brand’s identity, values, and mission in a memorable visual form.',
    },
    importance: {
      title: 'Why Logo Design Matters',
      desc: '• Builds strong brand identity\n• Creates first impressions\n• Improves brand recognition\n• Establishes trust & professionalism',
    },
    styles: {
      title: 'Design Styles We Offer',
      desc: '• Minimalist Logos\n• Typography-based Logos\n• Abstract & Geometric\n• Mascot or Illustrated Logos',
    },
    features: {
      title: 'What Sets Us Apart',
      desc: '• 100% custom designs\n• High-resolution formats\n• Multiple concepts\n• Unlimited revisions',
    },
  };

  return (
    <>
      <style>
        {`
          .logo-btn {
            font-family: orbitron;
            margin-right: 0.5rem;
            margin-bottom: 1rem;
          }
          .logo-btn.active {
            background-color: #00f2fe;
            color: #0a1a2e;
          }
          .logo-image {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
          }
          .logo-image:hover {
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
              <span style={{ color: '#6f42c1' }}>Creative</span> Logo Design Services
            </h2>
            <p className="lead" style={{ color: '#ced4da' }}>
              Make your brand stand out with memorable, professional logo designs.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img src={logoImg} alt="Logo Design" className="img-fluid logo-image" />
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <button className={`btn btn-outline-info logo-btn ${active === 'overview' ? 'active' : ''}`} onClick={() => setActive('overview')}>
                  <FaPaintBrush className="me-2" /> Overview
                </button>
                <button className={`btn btn-outline-info logo-btn ${active === 'importance' ? 'active' : ''}`} onClick={() => setActive('importance')}>
                  <FaStar className="me-2" /> Importance
                </button>
                <button className={`btn btn-outline-info logo-btn ${active === 'styles' ? 'active' : ''}`} onClick={() => setActive('styles')}>
                  <FaFeatherAlt className="me-2" /> Styles
                </button>
                <button className={`btn btn-outline-info logo-btn ${active === 'features' ? 'active' : ''}`} onClick={() => setActive('features')}>
                  <FaEye className="me-2" /> Features
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

export default LogoDesignInfoSection;
