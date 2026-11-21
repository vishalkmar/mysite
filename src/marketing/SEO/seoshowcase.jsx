/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaSearch, FaChartLine, FaGlobe, FaThumbsUp } from 'react-icons/fa';
import showcase from '../../serviceImages/software/seotwo.jpg';
import { SkShowcase } from "../../serviceKit/ServiceKit";

const features = [
  { title: "Keyword Research", desc: "Find the best keywords to target your ideal audience.", icon: <FaSearch />, color: "#6f42c1" },
  { title: "On-Page Optimization", desc: "Optimize content, tags, and structure for better rankings.", icon: <FaChartLine />, color: "#20c997" },
  { title: "Global & Local SEO", desc: "Rank high globally or dominate your local search.", icon: <FaGlobe />, color: "#dc3545" },
  { title: "Authority Building", desc: "Earn trust and credibility with strong backlinks and trust signals.", icon: <FaThumbsUp />, color: "#ffc107" }
];

const SEOShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Targeted SEO", "accent": "Strategies.", "copy": "Increase your online visibility and drive qualified traffic to your website."}} image={showcase} imageAlt="SEO Services" tag="SEO Services" features={features} />
);

export default SEOShowcase;
