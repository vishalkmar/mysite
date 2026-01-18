import React from "react";
import { Link } from "react-router-dom";

const SocialSidebar = () => {
  // ---- yaha apne real links / number / email daal dena ----
//   const phoneNumber = "+91 9540792427"; // call ke liye
  const phoneHref = "tel:+919540792427";

  const email = "info@nexatechinnovation.in";
  const emailHref = `mailto:${email}`;

  const whatsappNumber = "919540792427"; // country code + number, space nahi
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=Hi%20NexaTech%2C%20I%20would%20like%20to%20discuss%20a%20project.`;

  const instagramHref = "https://www.instagram.com/nexatechinnovation"; // apna insta
  const facebookHref = "https://www.facebook.com/nexatechinnovation";   // apna fb

  return (
    <>
      <div className="social-sidebar d-none d-sm-flex flex-column align-items-center">
        {/* Facebook */}
        <Link
          to={facebookHref}
          className="social-icon-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 21V12.8H16.3L16.8 9.5H13.5V7.4C13.5 6.5 13.8 5.8 15.1 5.8H17V2.9C16.7 2.9 15.7 2.8 14.5 2.8C11.9 2.8 10.1 4.3 10.1 7.1V9.5H7.3V12.8H10.1V21H13.5Z"
              fill="#e5e7eb"
            />
          </svg>
        </Link>

        {/* Instagram */}
        <Link
          to={instagramHref}
          className="social-icon-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="5"
              stroke="#e5e7eb"
              strokeWidth="1.4"
            />
            <circle cx="12" cy="12" r="3.4" stroke="#e5e7eb" strokeWidth="1.4" />
            <circle cx="17" cy="7" r="1" fill="#e5e7eb" />
          </svg>
        </Link>

        {/* WhatsApp */}
        <Link
          href={whatsappHref}
          className="social-icon-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19L5.8 16.3C4.9 15.1 4.4 13.7 4.4 12.3C4.4 8.8 7.3 6 10.9 6C14.4 6 17.3 8.8 17.3 12.3C17.3 15.8 14.4 18.6 10.9 18.6C9.6 18.6 8.4 18.2 7.4 17.5L5 19Z"
              stroke="#e5e7eb"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M9.3 10.4C9.4 10.4 9.8 11.1 9.9 11.2C10 11.4 10 11.5 9.9 11.7C9.7 12 9.4 12.2 9.6 12.5C9.8 12.8 10.4 13.5 10.9 13.8C11.6 14.2 11.7 14.1 12 13.9C12.3 13.7 12.4 13.6 12.7 13.7C13 13.8 13.9 14.2 14.1 14.4C14.3 14.5 14.4 14.6 14.4 14.7C14.4 14.8 14.4 15.1 14.2 15.4C14 15.7 13.4 16.2 12.4 16.1C11.4 16.1 10.4 15.6 9.6 14.9C8.8 14.3 8.1 13.3 7.9 12.8C7.7 12.3 7.7 11.7 7.7 11.5C7.7 11.3 7.8 10.9 7.9 10.7C8 10.5 8.2 10.3 8.3 10.2C8.4 10.1 8.5 10.1 8.6 10.1C8.7 10.1 9.2 10.3 9.3 10.4Z"
              fill="#e5e7eb"
            />
          </svg>
        </Link>

        {/* Phone call */}
        <Link
          to={phoneHref}
          className="social-icon-btn"
          aria-label="Call us"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.7 4.3L6.6 4.7C6 4.8 5.6 5.3 5.5 5.8C5.3 7.1 5.3 10.1 8.2 13C11.1 15.9 14.1 15.9 15.4 15.7C15.9 15.6 16.4 15.2 16.5 14.6L16.9 12.5C17.1 11.7 16.3 11 15.6 11.3L14.2 11.8C13.7 12 13.1 11.8 12.8 11.4L11.7 10.2C11.3 9.9 11.1 9.3 11.3 8.8L11.8 7.4C12.1 6.7 11.4 5.9 10.6 6.1L8.7 6.5"
              stroke="#e5e7eb"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Email */}
        <Link
          to={emailHref}
          className="social-icon-btn"
          aria-label="Email us"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="14"
              rx="2"
              stroke="#e5e7eb"
              strokeWidth="1.4"
            />
            <path
              d="M6 7L12 11L18 7"
              stroke="#e5e7eb"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <style>{`
        .social-sidebar {
          position: fixed;
          top: 50%;
          right: 1.2rem;
          transform: translateY(-50%);
          z-index: 9000;
          gap: 0.65rem;
        }

        .social-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 0%, #0ea5e9, #1d4ed8);
          box-shadow:
            0 0 0 2px rgba(15,23,42,1),
            0 0 18px rgba(56,189,248,0.7);
          color: #e5e7eb;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
          animation: social-float 3.2s ease-in-out infinite;
        }

        .social-icon-btn:nth-child(2) {
          animation-delay: 0.2s;
        }
        .social-icon-btn:nth-child(3) {
          animation-delay: 0.4s;
        }
        .social-icon-btn:nth-child(4) {
          animation-delay: 0.6s;
        }
        .social-icon-btn:nth-child(5) {
          animation-delay: 0.8s;
        }

        .social-icon-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow:
            0 0 0 2px rgba(15,23,42,1),
            0 0 26px rgba(56,189,248,0.95);
          opacity: 1;
        }

        @keyframes social-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 575.98px) {
          /* mobile pe bottom-right chhota sa */
          .social-sidebar {
            top: auto;
            bottom: 1rem;
            right: 0.7rem;
            transform: none;
          }
          .social-icon-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default SocialSidebar;
