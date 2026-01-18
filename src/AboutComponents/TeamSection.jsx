import React, { useState, useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Lead Software Architect",
    specialization: "Scalable Back-End & Cloud",
    image: "https://i.pravatar.cc/400?img=33",
    bio: "Designs the overall system architecture and makes sure every NexaTech product is secure, stable, and ready to scale.",
  },
  {
    id: 2,
    name: "Sanya Kapoor",
    role: "Senior Web Developer",
    specialization: "Next.js & High-Performance Web",
    image: "https://i.pravatar.cc/400?img=48",
    bio: "Builds pixel-perfect, responsive websites and landing pages that feel fast and smooth on every device.",
  },
  {
    id: 3,
    name: "Rohan Iyer",
    role: "Mobile App Engineer",
    specialization: "React Native & Native Integrations",
    image: "https://i.pravatar.cc/400?img=23",
    bio: "Crafts seamless Android & iOS apps with clean code, smooth animations, and reliable API connections.",
  },
  {
    id: 4,
    name: "Ishita Narang",
    role: "UI/UX Designer",
    specialization: "Product Journeys & Design Systems",
    image: "https://i.pravatar.cc/400?img=56",
    bio: "Turns complex ideas into intuitive interfaces, from wireframes to final design systems for web and mobile.",
  },
  {
    id: 5,
    name: "Varun Singh",
    role: "SEO & Growth Strategist",
    specialization: "Search Visibility & Funnels",
    image: "https://i.pravatar.cc/400?img=16",
    bio: "Plans full-funnel SEO and growth strategies that help brands get discovered and convert the right audiences.",
  },
  {
    id: 6,
    name: "Neha Bhatt",
    role: "Digital Marketing & Branding Lead",
    specialization: "Social, Performance Ads & Brand Story",
    image: "https://i.pravatar.cc/400?img=39",
    bio: "Leads social media, campaigns, and brand storytelling so every launch looks sharp and communicates clearly.",
  },
];

const TeamCarousel = () => {

  const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaTech Innovation",
  "url": "https://nexatechinnovation.in/",
  "description":
    "IT service provider offering web development, mobile app development, custom software solutions, UI/UX design, SEO and digital marketing.",
  "employee": teamMembers.map((m) => ({
    "@type": "Person",
    "name": m.name,
    "jobTitle": m.role,
    "description": m.bio,
    "knowsAbout": [m.specialization],
    "worksFor": {
      "@type": "Organization",
      "name": "NexaTech Innovation",
      "url": "https://nexatechinnovation.in/"
    }
  }))
};

  const [activeIndex, setActiveIndex] = useState(2);
  const len = teamMembers.length;

  const prevIndex = (activeIndex - 1 + len) % len;
  const nextIndex = (activeIndex + 1) % len;

  const handlePrev = () =>
    setActiveIndex((i) => (i - 1 + len) % len);

  const handleNext = () =>
    setActiveIndex((i) => (i + 1) % len);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % len);
    }, 7000);
    return () => clearInterval(id);
  }, [len]);

  const renderCard = (member, variant) => (
    <article
      key={member.id + variant}
      className={`review-card review-card--${variant}`}
    >
      <div className="review-img-wrap">
       <img
  src={member.image}
  alt={`${member.name} - ${member.role} at NexaTech Innovation`}
  className="review-img"
/>

      </div>
      <h3
        className="review-name"
        style={{ fontFamily: "Orbitron, system-ui, sans-serif", fontSize: "2rem" }}
      >
        {member.name}
      </h3>
      <p className="review-role">{member.role}</p>
      {/* ye 2 fields mobile (<600px) par hide hongi */}
      <p className="review-service">{member.specialization}</p>
      <p className="review-text">“{member.bio}”</p>
    </article>
  );

  return (
    <>
   

      <section
        className="reviews-wrapper"
        style={{ backgroundColor: "#020617", color: "#0f172a" }}
      >
         <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
/>
        <div className="reviews-inner">
          <h2 className="team-title">
            Meet Our Core Team
          </h2>
          <p className="reviews-subtitle">
  Meet the team at <span className="accent">NexaTech Innovation</span> —
  web developers, mobile app engineers, UI/UX designers and SEO specialists
  delivering scalable digital products for businesses.
</p>

          <div className="reviews-carousel">
            <button className="nav-btn nav-btn-prev" onClick={handlePrev}>
              ❮
            </button>

            <div className="reviews-strip">
              {renderCard(teamMembers[prevIndex], "side")}
              {renderCard(teamMembers[activeIndex], "center")}
              {renderCard(teamMembers[nextIndex], "side")}
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

          .team-title {
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
            font-size: 1.4rem;
            font-weight: 600;
            color: #f9fafb;
          }

          .review-role {
            margin: 0;
            font-size: 0.95rem;
            color: #cbd5f5;
          }

          .review-service {
            margin: 0.25rem 0 0.4rem;
            font-size: 0.9rem;
            color: #38bdf8;
            font-weight: 500;
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
              gap: 1.5rem;
            }

            .review-card--center {
              width: 240px;
            }

            .review-card--side {
              width: 140px;
            }

            .review-text {
              max-width: 220px;
            }
          }

          /* mobile: 600 se niche – sirf name + role */
          @media (max-width: 600px) {
            .reviews-wrapper {
              padding: 3rem 1rem;
            }

            .reviews-strip {
              padding-inline: 0.25rem;
              gap: 0.75rem;
            }

            .team-title {
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

            /* yaha hide ho raha hai specialization + bio */
            .review-service,
            .review-text {
              display: none;
            }

            .review-name {
              font-size: 1.1rem;
              margin-top: 0.75rem;
            }

            .review-role {
              font-size: 0.85rem;
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

export default TeamCarousel;
