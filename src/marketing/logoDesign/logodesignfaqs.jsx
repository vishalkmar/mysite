import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const LogoDesignFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const  faqs = [
  {
    question: "Why is a professional logo important for my brand?",
    answer: "A professional logo builds trust, reflects your brand identity, and helps create a strong, memorable impression in the minds of your customers."
  },
  {
    question: "What is your logo design process?",
    answer: "We start with a design brief and competitor analysis, followed by multiple concept drafts, revisions based on feedback, and final delivery in multiple formats."
  },
  {
    question: "How many logo concepts will I receive?",
    answer: "We typically provide 2–4 initial logo concepts depending on your package, and then refine the one you like best through revision rounds."
  },
  {
    question: "Do I get full ownership of the logo after it’s designed?",
    answer: "Yes, once the project is completed, you’ll receive full ownership rights and source files for the final logo design."
  },
  {
    question: "What file formats will I get?",
    answer: "You’ll receive your logo in various formats including AI, EPS, SVG, PNG, and JPG, suitable for both print and digital use."
  },
  {
    question: "Can you design logos for specific industries or niches?",
    answer: "Yes, we customize each logo based on your industry, target audience, and brand tone to ensure it aligns perfectly with your business."
  }
];

  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Logo Design <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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
  );
};

export default LogoDesignFAQ;