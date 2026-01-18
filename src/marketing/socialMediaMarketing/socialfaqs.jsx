import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const SocialFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const faqs = [
  {
    question: "What is social media marketing and why is it important?",
    answer: "Social media marketing uses platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your brand, build relationships, and drive targeted traffic to your business."
  },
  {
    question: "Which platforms do you manage?",
    answer: "We manage Facebook, Instagram, LinkedIn, Twitter, Pinterest, and YouTube — based on where your target audience is most active."
  },
  {
    question: "Do you create content for social media posts?",
    answer: "Yes, we handle everything from strategy and content planning to creating graphics, writing captions, and scheduling posts."
  },
  {
    question: "Can you run paid ad campaigns on social media?",
    answer: "Absolutely. We create and manage paid ad campaigns with targeting, A/B testing, and optimization for conversions and engagement."
  },
  {
    question: "How do you measure the effectiveness of campaigns?",
    answer: "We track reach, engagement, follower growth, clicks, and conversions using analytics tools and provide detailed monthly reports."
  },
  {
    question: "Will you help grow my audience organically?",
    answer: "Yes, we use a combination of consistent posting, hashtags, engagement strategies, and community building to grow your audience over time."
  }
];
  return (
    <>
    <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%' }}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Social Media Marketing <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default SocialFAQ;