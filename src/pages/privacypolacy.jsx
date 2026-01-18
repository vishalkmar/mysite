import React, { useState } from 'react';
import { FiChevronDown, FiShield, FiLock, FiDatabase, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import Footer from '../footer';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  // Privacy Policy Data
  const policySections = [
    {
      id: 1,
      title: "Introduction",
      icon: <FiUser style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>At Software Solution, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: <FiDatabase style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <h5>We may collect the following information:</h5>
          <ul>
            <li>Personal identification information (Name, email address, phone number)</li>
            <li>Business information (Company name, job title)</li>
            <li>Technical data (IP address, browser type, operating system)</li>
            <li>Usage data (Pages visited, time spent on site)</li>
            <li>Cookies and tracking data</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "How We Use Your Information",
      icon: <FiLock style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
            <li>To monitor usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Data Security",
      icon: <FiShield style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          <p>Our security measures include:</p>
          <ul>
            <li>SSL/TLS encryption for data transmission</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication procedures</li>
            <li>Data minimization principles</li>
          </ul>
          <p>While we strive to protect your personal information, no method of transmission over the Internet is 100% secure.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Cookies Policy",
    //   icon: <FiCookie style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We use cookies and similar tracking technologies to track activity on our website.</p>
          <p>Types of cookies we use:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact</li>
            <li><strong>Preference Cookies:</strong> Remember your preferences</li>
            <li><strong>Marketing Cookies:</strong> Track effectiveness of campaigns</li>
          </ul>
          <p>You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>
        </div>
      )
    },
    {
      id: 6,
      title: "Third-Party Services",
      icon: <FiUser style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We may employ third-party companies and individuals to:</p>
          <ul>
            <li>Facilitate our services</li>
            <li>Provide services on our behalf</li>
            <li>Perform service-related services</li>
            <li>Assist in analyzing how our services are used</li>
          </ul>
          <p>These third parties have access to your personal information only to perform these tasks and are obligated not to disclose or use it for any other purpose.</p>
        </div>
      )
    },
    {
      id: 7,
      title: "Data Retention",
      icon: <FiDatabase style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
          <p>We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
          <p>Usage data is generally retained for a shorter period, except when used to strengthen security or improve functionality.</p>
        </div>
      )
    },
    {
      id: 8,
      title: "Your Rights",
      icon: <FiLock style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>Depending on your location, you may have certain rights regarding your personal data:</p>
          <ul>
            <li>The right to access, update or delete your information</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: <FiUser style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>Our services are not directed to anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.</p>
          <p>If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
        </div>
      )
    },
    {
      id: 10,
      title: "Changes to This Policy",
      icon: <FiShield style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted.</p>
          <p><strong>Last updated:</strong> January 2023</p>
        </div>
      )
    },
    {
      id: 11,
      title: "Contact Us",
      icon: <FiUser style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: privacy@softwaresolution.com</li>
            <li>By phone: +91 9876543210</li>
            <li>By mail: 123 Tech Park, Bangalore, India - 560001</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
    <Header/>

    <div className="container-fluid py-5" style={{ 
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
           background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      <div className="text-center mb-5">
        <h1 style={{ 
         
          fontWeight: 'bold',
          color: '#0a1a2e',
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily:'orbitron',
          fontSize:'3.5rem'
        }}>
          Privacy Policy
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6c757d',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          This Privacy Policy describes how Software Solution collects, uses, and discloses your information when you use our services.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {policySections.map((section) => (
            <div key={section.id} className="card mb-3 border-0 shadow-sm" style={{ 
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <div 
                className="card-header bg-white d-flex justify-content-between align-items-center" 
                style={{ 
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                    background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
                }}
                onClick={() => toggleSection(section.id)}
              >
                <div className="d-flex align-items-center">
                  {section.icon}
                  <h3 className="mb-0 ms-3" style={{ 
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'white',
                    fontFamily:'orbitron',
                   
                  }}>
                    {section.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown style={{ color: '#6c757d' }} />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' ,  background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'}}
                  >
                    <div className="card-body" style={{ 
                      padding: '1.5rem',
                    
                      lineHeight: '1.7',
                        background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',
                        color:"white"
                    }}>
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
            
            .card-header h3 {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;