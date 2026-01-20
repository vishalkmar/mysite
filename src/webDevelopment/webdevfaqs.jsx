import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const WebDevelopmentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between frontend and backend development?",
      answer: "Frontend development focuses on the user interface and experience (what users see and interact with), using technologies like HTML, CSS, and JavaScript frameworks. Backend development handles server-side logic, databases, and application functionality, using languages like Node.js, Python, PHP, or Java."
    },
    {
      question: "How do you decide between custom development and CMS like WordPress?",
      answer: "We recommend WordPress for content-heavy sites needing frequent updates with limited customization needs. Custom development is better for complex web applications, unique functionality, or when you need full control over performance, security, and scalability."
    },
    {
      question: "What's your approach to responsive web design?",
      answer: "We build mobile-first, using flexible grids, responsive images, and CSS media queries to ensure perfect display on all devices. We test across various screen sizes and use modern frameworks like Bootstrap or Tailwind CSS for consistent responsiveness."
    },
    {
      question: "How do you optimize website loading speed?",
      answer: "We implement multiple optimizations: image compression, code minification, lazy loading, efficient caching strategies, CDN integration, and server-side optimizations. Our goal is typically under 2-second load time for most pages."
    },
    {
      question: "What security measures do you implement for websites?",
      answer: "We include HTTPS/SSL, input validation, CSRF protection, secure authentication, regular security patches, DDoS protection, and database security. For e-commerce sites, we implement additional PCI compliance measures."
    },
    {
      question: "Do you provide SEO-optimized websites?",
      answer: "Yes, we build with SEO fundamentals: semantic HTML, proper heading structure, optimized images, fast loading, mobile responsiveness, clean URLs, and meta tags. We can also integrate with analytics and SEO tools for ongoing optimization."
    }
  ];


  return (
    <>
    <div className="container-fluid" style={{background:  "#020617",}}>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4.5rem' ,background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Web Development <span style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
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

export default WebDevelopmentFAQ;