/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkFAQ, SkCTA } from "../../serviceKit/ServiceKit";

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

const SocialFAQ = () => (
  <>
    <SkFAQ heading={{"eyebrow": "Social media marketing FAQ", "title": "Good questions.", "accent": "Straight answers.", "copy": "What clients usually ask before starting a social media marketing project with us."}} faqs={faqs} />
    <SkCTA />
  </>
);

export default SocialFAQ;
