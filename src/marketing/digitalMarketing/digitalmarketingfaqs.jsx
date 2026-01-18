import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const DigitalFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const faqs= [
  {
    question: "What services are included in your digital marketing package?",
    answer: "Our digital marketing services include SEO, social media marketing, email marketing, PPC campaigns, and analytics tracking."
  },
  {
    question: "How do you develop a digital marketing strategy?",
    answer: "We analyze your business, competitors, and target audience to create a tailored digital strategy that aligns with your goals."
  },
  {
    question: "Do you manage social media accounts?",
    answer: "Yes, we handle content creation, posting schedules, audience engagement, and performance monitoring across all major platforms."
  },
  {
    question: "Can you help with paid ad campaigns?",
    answer: "Definitely. We manage PPC campaigns on Google Ads, Facebook, Instagram, and LinkedIn to drive targeted traffic and conversions."
  },
  {
    question: "How often do you report campaign performance?",
    answer: "We provide detailed monthly reports with insights on traffic, engagement, ad performance, and actionable recommendations."
  },
  {
    question: "Will I have access to campaign data?",
    answer: "Yes, we ensure full transparency. You’ll have access to dashboards and data, and we walk you through the results regularly."
  }
];
  return (
    <>
    <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Digital Marketing <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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
            font-size: 3.5rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default DigitalFAQ;