import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
gsap.registerPlugin(ScrollTrigger);

const ContactUsBanner = () => {
  const apiUrl = "/.netlify/functions/sendEmail/sendEmail";


  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      const result = await res.json();

      if (res.ok) {
        toast.success("Email sent successfully!");
        setData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Failed to send email!");
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    // Animations
    gsap.from(".contact-banner", {
      backgroundPosition: '0% 50%',
      duration: 2,
      ease: 'power2.inOut'
    });

    gsap.from(".form-element", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".contact-banner",
        start: 'top center'
      }
    });

    gsap.to(".contact-item", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      stagger: 0.2,
      ease: 'sine.inOut'
    });
  }, []);

  const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaTech Innovation",
  "url": "https://nexatechinnovation.in/",
  "email": "mailto:vk722413@gmail.com",
  "telephone": "+91-9540792427",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R-11 Welcome Shahdara",
    "addressLocality": "North East Delhi",
    "postalCode": "110053",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+91-9540792427",
      "email": "vk722413@gmail.com",
      "availableLanguage": ["English", "Hindi"]
    }
  ]
};


  return (
    <section
      className="contact-banner position-relative min-vh-90 d-flex align-items-center py-5 px-3 px-md-5 text-white"
      style={{
        backgroundColor: "#020617",
        backgroundSize: '200% 200%',
        overflow: 'hidden',
        marginTop: '60px'
      }}
    ><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
/>
      {/* Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 40%)'
        }}
      ></div>

      <div className="container position-relative z-2">
        <div className="row g-4">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <h2 className="fs-2 fw-semibold mb-3 opacity-90" style={{ fontFamily: 'Orbitron' }}>Ready to Transform</h2>
              <h1
                className="display-4 fw-bold mb-4 lh-sm"
                style={{
                  fontFamily: 'Orbitron',
                  background: 'linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Contact NexaTech Innovation
              </h1>
                <p className="fs-5 opacity-80 mb-4" style={{ maxWidth: "90%" }}>
                Get a free consultation for web development, app development,
                SEO and digital marketing. Share your requirements and we’ll
                respond quickly.
              </p>
              <div className="d-flex flex-column gap-4">
                {/* Contact Item 1 */}
                <Link
                  href="mailto:info@nexatechinnovation.in"
                  className="contact-item d-flex align-items-center gap-3 p-4 rounded-3 text-decoration-none text-white"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    className="icon-wrapper rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'rgba(255,255,255,0.2)',
                      fontSize: '1.8rem',
                      padding: '0.8rem'
                    }}
                  >
                    <FiMail />
                  </div>
                  <div>
                    <span
                      className="d-block fw-semibold fs-5 mb-1"
                      style={{ fontFamily: 'Orbitron' }}
                    >
                      Email Us
                    </span>
                    <p className="m-0 opacity-90">info@nexatechinnovation.in</p>
                  </div>
                </Link>

                {/* Contact Item 2 */}
                <Link
                  to="tel:+919540792427"
                  className="contact-item d-flex align-items-center gap-3 p-4 rounded-3 text-decoration-none text-white"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    className="icon-wrapper rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'rgba(255,255,255,0.2)',
                      fontSize: '1.8rem',
                      padding: '0.8rem'
                    }}
                  >
                    <FiPhone />
                  </div>
                  <div>
                    <span
                      className="d-block fw-semibold fs-5 mb-1"
                      style={{ fontFamily: 'Orbitron' }}
                    >
                      Call Us
                    </span>
                    <p className="m-0 opacity-90">+91 9540 792 427</p>
                  </div>
                </Link>

                
                {/* Contact Item 3 */}
                <div className="contact-item d-flex align-items-center gap-3 p-4 rounded-3"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="icon-wrapper rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'rgba(255,255,255,0.2)',
                      fontSize: '1.8rem',
                      padding: '0.8rem'
                    }}
                  >
                    <FiMapPin />
                  </div>
                  <div>
                    <span className="d-block fw-semibold fs-5 mb-1" style={{ fontFamily: 'Orbitron' }}>Visit Us</span>
                    <p className="m-0 opacity-90">R-11 Welcome Shahdara North East Delhi-110053 , India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div
              className="form-wrapper p-4 p-md-5 rounded-4 h-100"
              style={{
                background: 'rgba(10, 26, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
              }}
            >
              <h3
                className="fs-2 fw-bold mb-4 form-element"
                style={{
                  fontFamily: 'Orbitron',
                  background: 'linear-gradient(90deg, #ffffff 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Send Us a Message
              </h3>

              <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="form-element position-relative">
                  <input
                    type="text"
                    className="w-100 py-3 bg-transparent border-0 border-bottom border-white-30 text-white"
                    placeholder="Your Name"
                    required
                    name="name"
                    value={data.name}
                    onChange={handlechange}
                    style={{
                      fontFamily: 'Orbitron',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div className="underline position-absolute bottom-0 start-0 w-0 h-2 bg-cyan"
                    style={{ transition: 'width 0.3s ease' }}
                  ></div>
                </div>

                {/* Email Input */}
                <div className="form-element position-relative">
                  <input
                    type="email"
                    className="w-100 py-3 bg-transparent border-0 border-bottom border-white-30 text-white"
                    placeholder="Your Email"
                    required
                    name="email"
                    value={data.email}
                    onChange={handlechange}
                    style={{
                      fontFamily: 'Orbitron',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div className="underline position-absolute bottom-0 start-0 w-0 h-2 bg-cyan"
                    style={{ transition: 'width 0.3s ease' }}
                  ></div>
                </div>
                <div className="form-element position-relative">
                  <input
                    type="text"
                    className="w-100 py-3 bg-transparent border-0 border-bottom border-white-30 text-white"
                    placeholder="Phone No"
                    required
                    name="phone"
                    onChange={handlechange}
                    value={data.phone}
                    style={{
                      fontFamily: 'Orbitron',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <div className="underline position-absolute bottom-0 start-0 w-0 h-2 bg-cyan"
                    style={{ transition: 'width 0.3s ease' }}
                  ></div>
                </div>

                {/* Message Textarea */}
                <div className="form-element position-relative">
                  <textarea
                    className="w-100 py-3 bg-transparent border-0 border-bottom border-white-30 text-white"
                    placeholder="Your Project Details"
                    rows="4"
                    required
                    name="message"
                    value={data.message}
                    onChange={handlechange}
                    style={{
                      fontFamily: 'Orbitron',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'none'
                    }}
                  ></textarea>
                  <div className="underline position-absolute bottom-0 start-0 w-0 h-2 bg-cyan"
                    style={{ transition: 'width 0.3s ease' }}
                  ></div>
                </div>

                {/* Submit Button */}
          <button type="submit" className="nexa-btn nexa-btn--cta">
  <svg className="nexa-btn-svg" viewBox="0 0 300 80" aria-hidden="true">
    <rect
      className="nexa-btn-line nexa-btn-line--outer"
      strokeWidth="8"
      stroke="#00f2fe"
      strokeLinecap="round"
      fill="none"
      x="4"
      y="4"
      width="292"
      height="72"
      rx="36"
    />
    <rect
      className="nexa-btn-line nexa-btn-line--inner"
      strokeWidth="4"
      stroke="#4facfe"
      strokeLinecap="round"
      fill="none"
      x="4"
      y="4"
      width="292"
      height="72"
      rx="36"
    />
  </svg>

  <span className="nexa-btn-content">Send</span>

  <style>{`
    .nexa-btn {
      background: none;
      padding: 0;
      border: none;
      display: block;
      position: relative;
      height: 56px;
      width: 260px; /* yahi se width control karo */
      margin: 18px 0 0;
      cursor: pointer;
      color: #e5e7eb;
      font-size: 14px;
      transition: transform 300ms, color 300ms;
      backface-visibility: hidden;
    }

    .nexa-btn-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .nexa-btn-line {
      stroke-dasharray: 336.05 336.05;
      stroke-dashoffset: 0;
    }

    @keyframes nexa-outer-dashoffset {
      0% { stroke-dashoffset: 0; stroke-dasharray: 336.05 336.05; }
      50% { stroke-dasharray: 224.03 448.06; }
      100% { stroke-dashoffset: 672.1; stroke-dasharray: 336.05 336.05; }
    }

    .nexa-btn-line--outer {
      animation: nexa-outer-dashoffset 6s linear infinite;
    }

    @keyframes nexa-inner-dashoffset {
      0% { stroke-dashoffset: 0; stroke-dasharray: 336.05 336.05; }
      50% { stroke-dasharray: 224.03 448.06; }
      100% { stroke-dashoffset: -672.1; stroke-dasharray: 336.05 336.05; }
    }

    .nexa-btn-line--inner {
      animation: nexa-inner-dashoffset 5s linear infinite;
    }

    .nexa-btn-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-family: "Orbitron", sans-serif;
      font-weight: 700;
    }

    .nexa-btn:hover,
    .nexa-btn:focus {
      color: #f9fafb;
      transform: scale(1.05);
      outline: none;
    }

    .nexa-btn:hover .nexa-btn-line,
    .nexa-btn:focus .nexa-btn-line {
      animation-play-state: paused;
    }
  `}</style>
</button>


              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS in JSX */}
      <style jsx>{`
        .min-vh-90 {
          min-height: 90vh;
        }
        .border-white-30 {
          border-color: rgba(255,255,255,0.3) !important;
        }
        .bg-cyan {
          background-color: #00f2fe;
        }
        .contact-item:hover {
          transform: translateY(-5px) !important;
          background: rgba(255,255,255,0.15) !important;
        }
        input:focus, textarea:focus {
          border-bottom-color: #00f2fe !important;
        }
        input:focus ~ .underline, textarea:focus ~ .underline {
          width: 100% !important;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.6) !important;
          font-family: 'Orbitron', sans-serif;
        }
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 500px; height: 500px; opacity: 0; }
        }
      `}</style>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
      `}</style>
    </section>
  );
};

export default ContactUsBanner;