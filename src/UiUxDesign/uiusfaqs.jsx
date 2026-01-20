import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const UiUxFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const faqs = [
  {
    question: "What’s your approach to UI/UX design?",
    answer: "We focus on user-centered design, beginning with research, wireframes, and prototypes, then final UI using modern design systems."
  },
  {
    question: "Which tools do you use for designing?",
    answer: "We use Figma, Adobe XD, Sketch, and InVision for UI/UX design and collaboration."
  },
  {
    question: "Do you conduct user testing?",
    answer: "Yes, we conduct usability testing sessions to ensure the design meets user expectations before finalizing."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Definitely. We incorporate your branding, color schemes, and fonts to ensure consistency across all platforms."
  },
  {
    question: "Will the design be responsive and mobile-friendly?",
    answer: "Yes, we design mobile-first and ensure responsiveness across all devices using grids and adaptive layouts."
  },
  {
    question: "Do you provide interactive prototypes?",
    answer: "Yes, our designs are shared as interactive prototypes so stakeholders can review and give feedback before development."
  }
];

  return (
    <div className="container-fluid" style={{background:  "#020617",}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Ui / Ux Design <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default UiUxFAQ;