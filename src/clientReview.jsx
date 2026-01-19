import React, { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const reviews = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Founder, Anaya Boutique",
    service: "Website Redesign & Web Development",
    rating: 5,
    location: "Delhi, India",
    image: "https://i.pravatar.cc/400?img=45",
    text: "NexaTech Innovation redesigned our website and improved the loading speed significantly. The layout is clean, mobile-friendly, and our enquiry submissions increased after the new website went live.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Operations Lead, Verma Logistics",
    service: "Mobile App Development",
    rating: 5,
    location: "Gurugram, India",
    image: "https://i.pravatar.cc/400?img=32",
    text: "They delivered a stable Android app with smooth UI and reliable backend integration. Our internal tracking workflow is faster now, and the app performance is consistent even with high usage.",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Marketing Manager, Nair Wellness Studio",
    service: "SEO & Local SEO",
    rating: 5,
    location: "Mumbai, India",
    image: "https://i.pravatar.cc/400?img=12",
    text: "Within a few months, our SEO rankings improved for key services. Organic traffic increased and we started getting more qualified calls and form leads from Google search.",
  },
  {
    id: 4,
    name: "Karan Malhotra",
    role: "Product Manager, SaaS Startup",
    service: "UI/UX Design for Product Flow",
    rating: 5,
    location: "Bengaluru, India",
    image: "https://i.pravatar.cc/400?img=59",
    text: "Their UI/UX improvements made our onboarding much simpler. Users now understand the product faster, and drop-offs reduced after the redesigned screens and user journeys.",
  },
  {
    id: 5,
    name: "Simran Kaur",
    role: "Owner, Simran Fashion House",
    service: "Social Media Marketing & Content",
    rating: 5,
    location: "Chandigarh, India",
    image: "https://i.pravatar.cc/400?img=27",
    text: "The social media strategy feels on-brand and consistent. Creatives, reels and captions are well planned, and we are getting better engagement and enquiries on Instagram and LinkedIn.",
  },
  {
    id: 6,
    name: "Aditya Mehta",
    role: "Co-Founder, Mehta Tech Supplies",
    service: "Brand Identity & Logo Design",
    rating: 5,
    location: "Ahmedabad, India",
    image: "https://i.pravatar.cc/400?img=7",
    text: "From logo to colors and typography, NexaTech delivered a modern brand identity. Everything looks professional and consistent across our website and marketing materials.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaTech Innovation",
  "url": "https://nexatechinnovation.in/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": String(reviews.length)
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(r.rating),
      "bestRating": "5"
    },
    "author": { "@type": "Person", "name": r.name },
    "name": r.service,
    "reviewBody": r.text
  }))
};




const ClientReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // middle se start

  const len = reviews.length;
  const prevIndex = (activeIndex - 1 + len) % len;
  const nextIndex = (activeIndex + 1) % len;

  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + len) % len);

  const handleNext = () =>
    setActiveIndex((i) => (i + 1) % len);

  // auto rotate
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % len);
    }, 7000);
    return () => clearInterval(id);
  }, [len]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const renderCard = (review, variant) => (
    <article
      key={review.id + variant}
      className={`review-card review-card--${variant}`}
    >
      <div className="review-img-wrap">
        <img src={review.image} alt={review.name} className="review-img" />
      </div>
      <h3
        className="review-name"
        style={{
          fontFamily: "Orbitron, system-ui, sans-serif",
          fontSize: "1.2rem",
        }}
      >
        {review.name}
      </h3>

      {/* ye 3 cheeze mobile par hide ho jayengi */}
     
      <p className="review-role">{review.role}</p>
<p className="review-role">{review.location}</p>

      <div className="review-rating">
        {"★".repeat(review.rating)}
        <span className="review-rating-count"> ({review.rating}.0)</span>
      </div>

      <p className="review-text">“{review.text}”</p>
    </article>
  );

  return (
    <>



      <section
        className="reviews-wrapper"
        style={{ backgroundColor: "#020617", color: "#0f172a" }}
      >
        <script type="application/ld+json">
  {JSON.stringify(reviewSchema)}
</script>

        <div className="reviews-inner">
          <h2 className="reviews-title" data-aos="zoom-in">
            What Our Clients Say
          </h2>

          <p className="reviews-subtitle" data-aos="fade-up">
            Honest feedback from clients who partnered with{" "}
            <span className="accent">NexaTech Innovation</span> for web, app,
            SEO, UI/UX and social media growth.
          </p>

          <div className="reviews-carousel" data-aos="fade-up" data-aos-delay="100">
            <button className="nav-btn nav-btn-prev" onClick={handlePrev}>
              ❮
            </button>

            <div className="reviews-strip">
              {renderCard(reviews[prevIndex], "side")}
              {renderCard(reviews[activeIndex], "center")}
              {renderCard(reviews[nextIndex], "side")}
            </div>

            <button className="nav-btn nav-btn-next" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>

        <style>{`
          .reviews-wrapper {
            padding: 4rem 1.5rem;
            display: flex;
            justify-content: center;
          }

          .reviews-inner {
            max-width: 960px;
            width: 100%;
            text-align: center;
          }

          .reviews-title {
            font-family: "Orbitron", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-weight: 700;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            background: linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            font-size: clamp(2rem, 4vw, 3rem);
          }

          .reviews-subtitle {
            margin: 0 auto 2.5rem;
            max-width: 640px;
            font-size: 0.95rem;
            color: #9ca3af;
          }

          .accent {
            color: #38bdf8;
            font-weight: 600;
          }

          .reviews-carousel {
            position: relative;
          }

          .reviews-strip {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            padding: 2.5rem 3.5rem;
          }

          .review-card {
            text-align: center;
            color: #111827;
            transition: all 350ms ease;
          }

          .review-card--center {
            width: 280px;
          }

          .review-card--side {
            width: 170px;
            opacity: 0.5;
            transform: scale(0.9);
          }

          .review-img-wrap {
            width: 100%;
            aspect-ratio: 3/4;
            border-radius: 32px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
            background: #f9fafb;
            transition: inherit;
          }

          .review-card--side .review-img-wrap {
            filter: grayscale(0.9);
            box-shadow: 0 14px 28px rgba(15, 23, 42, 0.15);
          }

          .review-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .review-name {
            margin: 0.85rem 0 0.15rem;
            font-size: 1.05rem;
            font-weight: 600;
            color: #f9fafb;
          }

          .review-role {
            margin: 0;
            font-size: 0.85rem;
            color: #9ca3af;
          }

          .review-service {
            margin: 0.25rem 0 0.4rem;
            font-size: 0.9rem;
            color: #38bdf8;
            font-weight: 500;
          }

          .review-rating {
            margin-bottom: 0.75rem;
            font-size: 0.9rem;
            color: #facc15;
          }

          .review-rating-count {
            font-size: 0.8rem;
            color: #9ca3af;
          }

          .review-text {
            margin: 0;
            font-size: 0.9rem;
            color: #e5e7eb;
            max-width: 260px;
            margin-inline: auto;
          }

          .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: none;
            background: #0f172a;
            color: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 14px 35px rgba(15, 23, 42, 0.9);
            transition: transform 0.2s ease, opacity 0.2s ease,
              box-shadow 0.2s ease;
            opacity: 0.85;
            font-size: 1.2rem;
          }

          .nav-btn-prev {
            left: 0;
          }

          .nav-btn-next {
            right: 0;
          }

          .nav-btn:hover {
            transform: translateY(-50%) scale(1.08);
            opacity: 1;
            box-shadow: 0 18px 45px rgba(15, 23, 42, 1);
          }

          /* tablet */
          @media (max-width: 768px) {
            .reviews-strip {
              padding-inline: 1.5rem;
              gap: 1.75rem;
            }

            .review-card--center {
              width: 240px;
            }

            .review-card--side {
              width: 150px;
            }

            .review-text {
              max-width: 230px;
            }
          }

          /* mobile: side cards chhote + sirf name + description */
          @media (max-width: 576px) {
            .reviews-wrapper {
              padding: 3rem 1rem;
            }

            .reviews-strip {
              padding-inline: 0.25rem;
              gap: 0.75rem;
            }

            .reviews-title {
              font-size: clamp(1.6rem, 7vw, 2.2rem);
              letter-spacing: 0.06em;
            }

            .reviews-subtitle {
              font-size: 0.85rem;
              margin-bottom: 2rem;
            }

            .review-card--center {
              width: 220px;
            }

            .review-card--side {
              width: 110px;
              transform: scale(0.8);
            }

            .review-role,
            .review-service,
            .review-rating {
              display: none;
            }

            .review-text {
              font-size: 0.8rem;
              max-width: 200px;
            }

            .nav-btn {
              width: 36px;
              height: 36px;
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ClientReviewsCarousel;
