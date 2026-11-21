/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaPenNib, FaPalette, FaVectorSquare, FaCrown } from 'react-icons/fa';
import showcase from '../../serviceImages/software/logodesigntwo.jpg';
import { SkShowcase } from "../../serviceKit/ServiceKit";

const features = [
  { title: "Creative Concepts", desc: "Unique ideas tailored to your brand identity.", icon: <FaPenNib />, color: "#6f42c1" },
  { title: "Color Psychology", desc: "Strategic color use that resonates with your audience.", icon: <FaPalette />, color: "#20c997" },
  { title: "Vector Precision", desc: "Scalable, high-quality logos built with precision.", icon: <FaVectorSquare />, color: "#dc3545" },
  { title: "Brand Authority", desc: "Make a bold and memorable first impression.", icon: <FaCrown />, color: "#ffc107" }
];

const LogoDesignShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Custom Logo Design", "accent": "Solutions.", "copy": "Build brand recognition with timeless and versatile logo designs."}} image={showcase} imageAlt="Logo Design Showcase" tag="Logo Design Showcase" features={features} />
);

export default LogoDesignShowcase;
