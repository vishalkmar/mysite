/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPenNib, FaBullhorn, FaSearch, FaChartLine } from 'react-icons/fa';
import showcase from '../../serviceImages/software/contentmarketingtwo.jpg';
import { SkShowcase } from "../../serviceKit/ServiceKit";

const features = [
  { title: "Content Creation", desc: "High-quality blog posts, articles, and visual content tailored for your audience.", icon: <FaPenNib />, color: "#6f42c1" },
  { title: "Content Distribution", desc: "Multi-platform strategies to ensure your content reaches the right audience.", icon: <FaBullhorn />, color: "#ff9800" },
  { title: "SEO Optimization", desc: "Optimize content for search engines to increase organic visibility.", icon: <FaSearch />, color: "#00bcd4" },
  { title: "Performance Analytics", desc: "Track performance and adapt strategies using real-time insights.", icon: <FaChartLine />, color: "#4caf50" }
];

const ContentMarketingShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Strategic Content", "accent": "Marketing.", "copy": "Drive traffic, engagement, and brand loyalty through powerful content strategies."}} image={showcase} imageAlt="Content Marketing Showcase" tag="Content Marketing Showcase" features={features} />
);

export default ContentMarketingShowcase;
