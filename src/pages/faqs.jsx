import React, { useState } from 'react';
import { FiChevronDown, FiCode, FiSmartphone, FiSearch, FiPenTool, FiShield, FiCpu,FiCheckCircle, FiAward, FiServer, FiHelpCircle  } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import Footer from '../footer';

const FAQPage = () => {
  // FAQ Data (Category-wise)
  const faqCategories = [
    {
      id: 1,
      title: "Web Development",
      icon: <FiCode style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
      questions: [
        {
          id: 1,
          question: "What technologies do you use for web development?",
          answer: "We use modern stacks like React.js, Node.js, MongoDB, and PHP for custom web applications."
        },
        {
          id: 2,
          question: "How long does a typical website take to build?",
          answer: "A basic website takes 2-4 weeks, while complex web apps may take 2-6 months."
        }
      ]
    },
    {
      id: 2,
      title: "Digital Marketing",
      icon: <FiSearch style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
      questions: [
        {
          id: 1,
          question: "Do you offer SEO services?",
          answer: "Yes, we provide full SEO optimization including keyword research, on-page & off-page SEO."
        },
        {
          id: 2,
          question: "How soon can we see results from marketing campaigns?",
          answer: "PPC shows instant results, while SEO takes 3-6 months for strong rankings."
        }
      ]
    },
    {
      id: 3,
      title: "App Development",
      icon: <FiSmartphone style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
      questions: [
        {
          id: 1,
          question: "Do you build iOS & Android apps?",
          answer: "Yes, we develop cross-platform apps using React Native & Flutter."
        },
        {
          id: 2,
          question: "What’s the cost of a mobile app?",
          answer: "Basic apps start at ₹50,000, while complex apps range from ₹2-10 lakhs."
        }
      ]
    },
    {
      id: 4,
      title: "Security & Maintenance",
      icon: <FiShield style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
      questions: [
        {
          id: 1,
          question: "Do you provide website maintenance?",
          answer: "Yes, we offer monthly maintenance packages including updates, backups & security checks."
        },
        {
          id: 2,
          question: "How do you secure websites from hackers?",
          answer: "We implement SSL, firewalls, regular patches, and security audits."
        }
      ]
    },
     {
    id: 5,
    title: "SEO",
    icon: <FiSearch style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "What does your SEO service include?",
        answer: "It includes keyword research, on-page optimization, backlink building, and monthly reports."
      },
      {
        id: 2,
        question: "How long until we see SEO results?",
        answer: "Typically, it takes 3-6 months to see significant ranking improvements."
      }
    ]
  },
  {
    id: 6,
    title: "Logo Designing",
    icon: <FiPenTool style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "Do you provide multiple logo concepts?",
        answer: "Yes, we provide 2-3 initial concepts with unlimited revisions."
      },
      {
        id: 2,
        question: "What file formats will I receive?",
        answer: "You’ll receive PNG, JPG, SVG, and editable vector files (AI or EPS)."
      }
    ]
  },
  {
    id: 7,
    title: "Software Development",
    icon: <FiCpu style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "Do you develop custom software?",
        answer: "Yes, we build tailored software solutions for desktop, web, and enterprise needs."
      },
      {
        id: 2,
        question: "Which languages or frameworks do you use?",
        answer: "We use Java, .NET, Python, and MERN stack depending on project requirements."
      }
    ]
  },
   {
    id: 8,
    title: "Guarantee & Warranty",
    icon: <FiCheckCircle style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "Do you offer any guarantee or warranty?",
        answer: "Yes, we provide a 3-6 month warranty on all our development and design services."
      },
      {
        id: 2,
        question: "What does the warranty cover?",
        answer: "It covers bug fixes, functionality issues, and compatibility adjustments."
      }
    ]
  },
  {
    id: 9,
    title: "Quality Assurance",
    icon: <FiAward style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "How do you ensure quality?",
        answer: "Our QA team performs rigorous testing, including manual and automated tests before delivery."
      },
      {
        id: 2,
        question: "Do you follow any quality standards?",
        answer: "Yes, we follow industry best practices including agile methodologies and ISO standards where applicable."
      }
    ]
  },
  {
    id: 10,
    title: "Hosting Services",
    icon: <FiServer style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "Do you provide hosting for websites or apps?",
        answer: "Yes, we offer cloud hosting, shared hosting, and dedicated server options."
      },
      {
        id: 2,
        question: "Can you help us migrate our existing site?",
        answer: "Absolutely, we provide full migration support without downtime."
      }
    ]
  },
  {
    id: 11,
    title: "Management & Support",
    icon: <FiHelpCircle style={{ color: '#4facfe', fontSize: '1.5rem' }} />,
    questions: [
      {
        id: 1,
        question: "Do you offer ongoing support?",
        answer: "Yes, we offer support and management plans ranging from monthly to annual contracts."
      },
      {
        id: 2,
        question: "What kind of support do you provide?",
        answer: "We offer bug fixes, performance optimization, security updates, and technical assistance."
      }
    ]
  }
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
        <Header/>
  
    <div className="container-fluid py-5" style={{ 
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
       background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',

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
          fontSize:"4.5rem"
        }}>
          Frequently Asked Questions
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6c757d',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Find answers to common questions about our services.
        </p>
      </div>

      <div className="row">
        {faqCategories.map((category) => (
          <div key={category.id} className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ 
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              ':hover': { transform: 'translateY(-5px)' }
            }}>
              <div className="card-header bg-white" style={{ 
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                padding: '1.5rem',
                 background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',
              }}>
                <div className="d-flex align-items-center">
                  {category.icon}
                  <h3 className="mb-0 ms-3" style={{ 
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="card-body" style={{ padding: '0', background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)', }}>
                {category.questions.map((item) => (
                  <div key={item.id} className="border-bottom" style={{ 
                    borderColor: 'rgba(0,0,0,0.05)',
                    padding: '1.5rem',
                    cursor: 'pointer'
                  }} onClick={() => toggleQuestion(`${category.id}-${item.id}`)}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 style={{ 
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        
                        marginBottom: '0',
                        color:'white',
                        fontFamily:'orbitron',
                       
                      }}>
                        {item.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: activeQuestion === `${category.id}-${item.id}` ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown style={{ color: '#6c757d' }} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {activeQuestion === `${category.id}-${item.id}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="mt-3 mb-0" style={{ 
                            color: 'white',
                            lineHeight: '1.6'
                          }}>
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          
          @media (max-width: 768px) {
            .card {
              margin-bottom: 1.5rem;
            }
            
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>

<Footer/>
      </>
  );
};

export default FAQPage;