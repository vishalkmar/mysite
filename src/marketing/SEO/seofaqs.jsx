import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const SeoFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const faqs = [
  {
    question: "What is SEO and why is it important for my business?",
    answer: "SEO (Search Engine Optimization) improves your website’s visibility in search engines like Google, helping potential customers find you organically and increasing traffic without paid ads."
  },
  {
    question: "What’s the difference between on-page and off-page SEO?",
    answer: "On-page SEO focuses on optimizing your website content, meta tags, and structure. Off-page SEO involves building backlinks, social signals, and improving your site’s authority externally."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Typically, noticeable improvements in rankings and traffic appear within 3–6 months, depending on competition and effort."
  },
  {
    question: "Do you perform keyword research?",
    answer: "Yes, we conduct thorough keyword research using tools like SEMrush and Google Keyword Planner to target terms your audience is actively searching for."
  },
  {
    question: "Will you optimize my website's speed and mobile usability?",
    answer: "Absolutely. We optimize load speed, mobile responsiveness, and Core Web Vitals to enhance both user experience and SEO rankings."
  },
  {
    question: "Do you provide SEO reports and analytics?",
    answer: "Yes, we provide monthly SEO reports showing keyword rankings, traffic, backlinks, technical issues, and suggested improvements."
  }
];

  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>SEO <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default SeoFAQ;