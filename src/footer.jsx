import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-5 pb-4 position-relative" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Decorative Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234facfe' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        opacity: 0.3
      }}></div>

      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          {/* About Company */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="mb-4 d-flex align-items-center" style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
                    fontFamily:'orbitron'
            }}>
              <FiArrowRight className="me-2" /> About Us
            </h5>
            <p className="text-white">
             We are a growing software and digital solutions company, building thoughtful products and experiences since early 2025. Our compact team combines design, engineering and marketing expertise to help brands launch faster, operate smoother and scale confidently.
            </p>
            <div className="d-flex mt-4">
              <Link to="https://www.linkedin.com/in/vishal-kumar-839490327/" className="me-3" style={{ color: '#4facfe', fontSize: '2rem' }}>
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/vishalkmar" className="me-3" style={{ color: '#4facfe', fontSize: '2rem' }}>
                <FaGithub />
              </Link>
              <Link to="https://wa.me/919540792427" style={{ color: '#4facfe', fontSize: '2rem' }}>
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-4 d-flex align-items-center" style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              fontFamily:'orbitron'
            }}>
              <FiArrowRight className="me-2" /> Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="termsandconditions" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-white text-decoration-none">privacy polacy</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li className="mb-2"><Link to="/faqs" className="text-white text-decoration-none">faqs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-4 d-flex align-items-center" style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              fontFamily:'orbitron'
            }}>
              <FiArrowRight className="me-2" /> Services
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/webdevelopment" className="text-white text-decoration-none">Website Development</Link></li>
              <li className="mb-2"><Link to="/appdevelopment" className="text-white  text-decoration-none">Mobile App Development</Link></li>
              <li className="mb-2"><Link to="/softwaredevelopment" className="text-white  text-decoration-none">Software Development</Link></li>
              <li className="mb-2"><Link to="/webdesign" className="text-white  text-decoration-none">Web Designing</Link></li>
              <li className="mb-2"><Link to="/seo" className="text-white small text-decoration-none">SEO Services</Link></li>
              <li className="mb-2"><Link to="/digitalmarketing" className="text-white  text-decoration-none">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h5 className="mb-4 d-flex align-items-center" style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              fontFamily:'orbitron'
            }}>
              <FiArrowRight className="me-2" /> Get in Touch
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaEnvelope className="me-3 mt-1" style={{ color: '#4facfe', minWidth: '20px' }} />
                <span className="text-white">info@nexatechinnovation.in</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaPhone className="me-3 mt-1" style={{ color: '#4facfe', minWidth: '20px' }} />
                <span className="text-white">+91 95407 92427</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1" style={{ color: '#4facfe', minWidth: '20px' }} />
                <span className="text-white">R-11 Welcome Shahdara North East Delhi-110053 , India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5 pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            <p className="text-white-50 small mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;