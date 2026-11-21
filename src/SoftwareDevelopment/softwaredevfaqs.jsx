/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../serviceKit/ServiceKit";

const faqs = [
  {
    question: "What types of software solutions do you develop?",
    answer: "We build web apps, mobile apps, custom enterprise solutions, SaaS platforms, and APIs tailored to your business requirements."
  },
  {
    question: "What is your development process?",
    answer: "Our process includes requirement gathering, UI/UX design, agile development, testing, deployment, and ongoing support."
  },
  {
    question: "Which technologies do you use?",
    answer: "We use modern stacks like React, Angular, Node.js, Python, .NET, Java, and cloud services like AWS, Azure, and Firebase."
  },
  {
    question: "How do you ensure the quality of the software?",
    answer: "We conduct rigorous QA testing, code reviews, and automated testing to ensure high performance, security, and reliability."
  },
  {
    question: "Can you integrate the software with our existing systems?",
    answer: "Yes, we specialize in integrating with third-party tools, CRMs, ERPs, and legacy systems through secure APIs and middleware."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We provide ongoing support, updates, performance monitoring, and feature enhancements after the software goes live."
  }
];

const SoftwareDevFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Software development FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a software development project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default SoftwareDevFAQ;
