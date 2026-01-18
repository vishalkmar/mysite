import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const SoftwareDevFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const faqs = [
  {
    question: "What types of software solutions do you develop?",
    answer: "We build web apps, mobile apps, custom enterprise solutions, SaaS platforms, and APIs tailored to your business requirements."
  },
  {
    question: "What is your development process?",
    answer: "Our process includes requirement gathering, UI/UX design, agile development, testing, deployment, and ongoing support."
  },
  {
    question: "Which technologies do you use?",
    answer: "We use modern stacks like React, Angular, Node.js, Python, .NET, Java, and cloud services like AWS, Azure, and Firebase."
  },
  {
    question: "How do you ensure the quality of the software?",
    answer: "We conduct rigorous QA testing, code reviews, and automated testing to ensure high performance, security, and reliability."
  },
  {
    question: "Can you integrate the software with our existing systems?",
    answer: "Yes, we specialize in integrating with third-party tools, CRMs, ERPs, and legacy systems through secure APIs and middleware."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We provide ongoing support, updates, performance monitoring, and feature enhancements after the software goes live."
  }
];

  return (
    <>
    <div className="container-fluid" style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Software Development <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default SoftwareDevFAQ;