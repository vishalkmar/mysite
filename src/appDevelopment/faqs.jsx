import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AppDevelopmentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between native and cross-platform app development?",
      answer: "Native apps are built specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). Cross-platform apps use frameworks like React Native or Flutter to build for multiple platforms with a single codebase, offering faster development but sometimes with performance trade-offs."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "App development timelines vary based on complexity. A simple app may take 2-3 months, medium complexity 4-6 months, and complex apps with backend systems 6+ months. Factors include features, platforms, design complexity, and testing requirements."
    },
    {
      question: "What's the cost range for developing a mobile app?",
      answer: "Costs range from $10,000 for basic apps to $100,000+ for complex solutions. Factors affecting cost include platform choice, features, design complexity, developer rates, and maintenance. We provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Which is better: React Native or Flutter?",
      answer: "React Native (JavaScript) has a larger community and more third-party libraries, while Flutter (Dart) offers better performance and more consistent UI across platforms. The choice depends on your team's expertise, project requirements, and long-term maintenance plans."
    },
    {
      question: "Do you provide app maintenance after launch?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, OS updates compatibility, and feature enhancements. We recommend at least 3-6 months of post-launch support to ensure app stability."
    },
    {
      question: "How do you ensure app security?",
      answer: "We implement multiple security layers: data encryption, secure API communication, OAuth for authentication, regular security audits, and compliance with platform-specific security guidelines. We also conduct penetration testing before launch."
    }
  ];

  return (
     <>
    <div className="container-fluid" style={{backgroundColor: '#020617'}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>App Development <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>FAQs</span></h2>
        <p className="lead text-white">Answers to common questions about our mobile app services</p>
      </div>

      <div className="accordion" id="appFAQAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm" style={{}}>
            <h3 className="accordion-header">
              <button 
                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'} fw-semibold`}
                type="button"
                onClick={() => toggleAccordion(index)}
                style={{
                  background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',
                  color: 'white',
                  fontFamily:'orbitron'
                }}
              >
                {activeIndex === index ? <FiMinus className="me-2" /> : <FiPlus className="me-2" />}
                {faq.question}
              </button>
            </h3>
            <div 
              className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
            style={{background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'}}>
              <div className="accordion-body bg-light">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
      <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 2.8rem !important;
          }
        }
      `}</style>
     </>
  );
};

export default AppDevelopmentFAQ;