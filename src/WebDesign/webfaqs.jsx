import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const WebDesignFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const faqs = [
  {
    question: "What type of websites do you design?",
    answer: "We design corporate websites, landing pages, e-commerce platforms, blogs, and custom web portals tailored to your goals."
  },
  {
    question: "Are your websites SEO-friendly?",
    answer: "Yes, we follow SEO best practices such as semantic HTML, fast loading speeds, mobile responsiveness, and clean URLs."
  },
  {
    question: "Can you redesign our old website?",
    answer: "Absolutely. We offer complete website revamps that improve both visuals and performance metrics."
  },
  {
    question: "Do you provide custom or template-based designs?",
    answer: "We offer both options — fully custom designs as well as faster, cost-effective template-based solutions."
  },
  {
    question: "Will the design be responsive?",
    answer: "Yes, we follow mobile-first design and ensure full responsiveness using Bootstrap or Tailwind CSS."
  },
  {
    question: "How long does it take to design a website?",
    answer: "Typical design projects take 2-4 weeks depending on complexity and number of pages."
  }
];
  return (
    <div className="container-fluid" style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Web Design <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default WebDesignFAQ;