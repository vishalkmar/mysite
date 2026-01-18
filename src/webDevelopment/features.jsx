import React from 'react';
import responsive from '../serviceImages/webdevelopment/reponsive.png'
import chat from '../serviceImages/webdevelopment/chat-social-integration.png'
import seo from '../serviceImages/webdevelopment/seo-friendly.png'
import payment from '../serviceImages/webdevelopment/payment.webp'
import speed from '../serviceImages/webdevelopment/speed.png'
import security from '../serviceImages/webdevelopment/security.webp'



const FeatureSection = () => {


 const services = [
  {
    id: 1,
    title: "Responsive Design",
    description: "We ensure your website looks and works flawlessly on all devices—desktops, tablets, and smartphones.",
    image: responsive,  // import or URL for responsive image
    color: "#4facfe",
    url: 'responsive-design'
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Boost your site’s visibility on search engines with our technical and on-page SEO strategies.",
    image: seo,  // import or URL for SEO image
    color: "#4facfe",
    url: 'seo-optimization'
  },
  {
    id: 3,
    title: "Live Chat Integration",
    description: "Engage visitors instantly and improve support with real-time chat and chatbot features on your site.",
    image: chat,  // import or URL for chat integration image
    color: "#4facfe",
    url: 'chat-integration'
  },
  {
    id: 4,
    title: "Payment Gateway Setup",
    description: "Secure and seamless online payment integrations including Razorpay, Stripe, PayPal, and more.",
    image: payment,  // import or URL for payment image
    color: "#4facfe",
    url: 'payment-integration'
  },
  {
    id: 5,
    title: "Site Speed Optimization",
    description: "We optimize your site’s performance for lightning-fast load times, better UX, and higher search rankings.",
    image: speed,  // import or URL for speed image
    color: "#4facfe",
    url: 'site-speed-optimization'
  },
  {
    id: 6,
    title: "Advanced Security",
    description: "Protect your website with robust security layers including SSL, firewalls, and malware protection.",
    image: security,  // import or URL for security image
    color: "#4facfe",
    url: 'website-security'
  }
];

  return (
    <>
    <section className="py-5" style={{
     background: 'linear-gradient(135deg, #0a1a2e 0%)'
    }}>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 text-center fw-bold mb-3 responsive-text" style={{
              // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize:'5rem',
              fontFamily:'orbitron'
            }}>
              Our Services
            </h2>
            <p className="lead text-white-50">
              Professional solutions for your business needs
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0" style={{
                background: 'Transparent',
                border: `2px solid gray`,
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                // Very subtle hover effect
                ':hover': {
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <div className="card-body text-center p-4 d-flex flex-column">
                  <div className="mb-4 mx-auto" style={{ 
                    width: '120px', 
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: `2px solid ${service.color}`
                      }}
                    />
                  </div>
                  
                  <h3 className="h4 mb-3 text-white" style={{fontFamily:'orbitron'}}>{service.title}</h3>
                  
                  <p className="mb-4 text-white-50 flex-grow-1">
                    {service.description}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 3.8rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default FeatureSection;