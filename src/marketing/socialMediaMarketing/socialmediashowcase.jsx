/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaFacebookF, FaInstagram, FaTwitter, FaBullhorn } from 'react-icons/fa';
import showcase from '../../serviceImages/software/socialmediatwo.jpg';
import { SkShowcase } from "../../serviceKit/ServiceKit";

const features = [
  { title: "Facebook Campaigns", desc: "Reach your target audience with smart ad spend.", icon: <FaFacebookF />, color: "#3b5998" },
  { title: "Instagram Growth", desc: "Visually appealing content to boost engagement.", icon: <FaInstagram />, color: "#e4405f" },
  { title: "Twitter Strategy", desc: "Real-time communication with trending content.", icon: <FaTwitter />, color: "#1da1f2" },
  { title: "Brand Promotion", desc: "Build brand identity with engaging campaigns and stories.", icon: <FaBullhorn />, color: "#ffc107" }
];

const SMMShowcase = () => (
  <SkShowcase heading={{"eyebrow": "How we deliver", "title": "Smart Social Media", "accent": "Marketing.", "copy": "Build your brand and engage your audience through strategic social platforms."}} image={showcase} imageAlt="Social Media Marketing" tag="Social Media Marketing" features={features} />
);

export default SMMShowcase;
