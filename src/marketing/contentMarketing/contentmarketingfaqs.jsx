import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ContentMarketingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const faqs = [
  {
    question: "What is your approach to content marketing?",
    answer: "We develop a strategy based on your brand goals, target audience, and channels. Then we create SEO-optimized content tailored for engagement and conversion."
  },
  {
    question: "What types of content do you create?",
    answer: "We create blogs, articles, social media posts, infographics, videos, email newsletters, and case studies based on your business objectives."
  },
  {
    question: "Do you handle content planning and scheduling?",
    answer: "Yes, we offer complete editorial planning, including content calendars, topic research, and scheduled publishing across platforms."
  },
  {
    question: "Can you optimize content for SEO?",
    answer: "Absolutely. We ensure all content includes relevant keywords, proper structure, and meta tags to improve search engine visibility."
  },
  {
    question: "Do you offer content writing only in English?",
    answer: "While English is our primary language, we can accommodate content in other languages depending on project requirements."
  },
  {
    question: "How do you measure content marketing success?",
    answer: "We track performance through metrics like traffic, engagement, lead generation, and conversions using tools like Google Analytics and social insights."
  }
];
  return (
    <>
    <div className="container-fluid" style={{background: 'linear-gradient(135deg, #0a1a2e 0%)'}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Content Marketing <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default ContentMarketingFAQ;