import React, { useState } from 'react';
import { FiChevronDown, FiFileText, FiAlertCircle, FiShoppingBag, FiDollarSign, FiTerminal, FiShield } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import Footer from '../footer';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  // Terms & Conditions Data
  const termsSections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <FiFileText style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>By accessing or using Software Solution's services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Services Description",
      icon: <FiTerminal style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>Software Solution provides:</p>
          <ul>
            <li>Custom software development</li>
            <li>Web and mobile application development</li>
            <li>Digital marketing services</li>
            <li>IT consulting</li>
            <li>Cloud solutions</li>
          </ul>
          <p>All services are subject to availability and may be modified without notice.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "User Responsibilities",
      icon: <FiAlertCircle style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information when registering</li>
            <li>Maintain confidentiality of your account credentials</li>
            <li>Not use our services for illegal activities</li>
            <li>Not reverse engineer or decompile our software</li>
            <li>Comply with all applicable laws</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Payments & Refunds",
      icon: <FiDollarSign style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <h5>Payment Terms:</h5>
          <ul>
            <li>50% advance payment required for project commencement</li>
            <li>Balance due upon project completion</li>
            <li>Payment methods: Bank transfer, UPI, Credit Card</li>
          </ul>
          
          <h5 className="mt-4">Refund Policy:</h5>
          <ul>
            <li>No refunds after project development begins</li>
            <li>Advance payment is non-refundable if project is cancelled</li>
            <li>Bug fixes covered under 30-day warranty period</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: <FiShoppingBag style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>Unless otherwise agreed in writing:</p>
          <ul>
            <li>We retain ownership of all proprietary software and tools</li>
            <li>Client receives license to use deliverables for intended purpose</li>
            <li>All copyright notices must remain intact</li>
            <li>Unauthorized distribution is prohibited</li>
          </ul>
          <p>Open-source components are governed by their respective licenses.</p>
        </div>
      )
    },
    {
      id: 6,
      title: "Limitation of Liability",
      icon: <FiShield style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>Software Solution shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental or consequential damages</li>
            <li>Loss of profits or business opportunities</li>
            <li>Data loss or corruption</li>
            <li>Third-party service interruptions</li>
          </ul>
          <p>Our total liability shall not exceed fees paid for the specific service.</p>
        </div>
      )
    },
    {
      id: 7,
      title: "Termination",
      icon: <FiAlertCircle style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>We may terminate services if:</p>
          <ul>
            <li>You breach these terms</li>
            <li>Required by law</li>
            <li>For non-payment of fees</li>
          </ul>
          <p>Upon termination:</p>
          <ul>
            <li>All outstanding fees become immediately due</li>
            <li>Access to services will be revoked</li>
            <li>Client data will be available for 30 days</li>
          </ul>
        </div>
      )
    },
    {
      id: 8,
      title: "Governing Law",
      icon: <FiFileText style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>These Terms shall be governed by Indian law. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore.</p>
          <p>We comply with the Information Technology Act, 2000 and other applicable Indian regulations.</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Contact Information",
      icon: <FiFileText style={{ color: '#4facfe', fontSize: '1.2rem' }} />,
      content: (
        <div>
          <p>For questions about these Terms:</p>
          <ul>
            <li>Email: vk722413@gmail.com</li>
            <li>Phone: +91 9540792427</li>
            <li>Address: 123 Tech Park, Bangalore, Karnataka - 560001</li>
          </ul>
          <p><strong>Last Updated:</strong> January 2023</p>
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
          fontSize:'4.5rem',
          fontFamily:'orbitron'
        }}>
          Terms & Conditions
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6c757d',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Legal terms governing your use of Software Solution services.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {termsSections.map((section) => (
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
                    fontFamily:'orbitron'

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
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="card-body" style={{ 
                      padding: '1.5rem',
                      color: 'white',
                      lineHeight: '1.7',
                      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
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

export default TermsAndConditions;