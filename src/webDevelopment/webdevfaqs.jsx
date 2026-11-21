/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../serviceKit/ServiceKit";

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

const WebDevelopmentFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Web development FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a web development project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default WebDevelopmentFAQ;
