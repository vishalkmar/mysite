/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { 
  FaPaintBrush, FaMobile, FaDesktop, FaSearch, FaShoppingCart,
  FaPalette, FaServer, FaEye, FaLightbulb, FaRocket
} from 'react-icons/fa';
import { 
  SiFigma, SiAdobe, SiWordpress, SiShopify, SiWebflow,
  SiSquarespace, SiWix, SiElementor, SiTailwindcss, SiBootstrap
} from 'react-icons/si';
import { SkSkills } from "../serviceKit/ServiceKit";

const skills = [
    { name: "UI/UX Design", icon: <FaPaintBrush size={30} />, color: "#FF6B6B" },
    { name: "Responsive Design", icon: <FaMobile size={30} />, color: "#4ECDC4" },
    { name: "Landing Pages", icon: <FaDesktop size={30} />, color: "#45B7D1" },
    { name: "SEO-Optimized Design", icon: <FaSearch size={30} />, color: "#FFBE0B" },
    { name: "E-Commerce Design", icon: <FaShoppingCart size={30} />, color: "#FF9F1C" },
    { name: "Color Theory", icon: <FaPalette size={30} />, color: "#A663CC" },
    { name: "Prototyping", icon: <FaEye size={30} />, color: "#B5179E" },
    { name: "Creative Direction", icon: <FaLightbulb size={30} />, color: "#F72585" },
    { name: "Performance Design", icon: <FaRocket size={30} />, color: "#7209B7" },
    { name: "Figma Design", icon: <SiFigma size={30} />, color: "#0ACF83" },
    { name: "Adobe Creative Suite", icon: <SiAdobe size={30} />, color: "#FF0000" },
    { name: "WordPress Design", icon: <SiWordpress size={30} />, color: "#21759B" },
    { name: "Shopify Themes", icon: <SiShopify size={30} />, color: "#95BF47" },
    { name: "Webflow Design", icon: <SiWebflow size={30} />, color: "#4353FF" },
    { name: "Squarespace Design", icon: <SiSquarespace size={30} />, color: "#222222" },
    { name: "Wix Design", icon: <SiWix size={30} />, color: "#0C6EFC" },
    { name: "Elementor", icon: <SiElementor size={30} />, color: "#92003B" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, color: "#06B6D4" },
    { name: "Bootstrap Design", icon: <SiBootstrap size={30} />, color: "#7952B3" },
    { name: "Frontend Development", icon: <FaServer size={30} />, color: "#3A86FF" }
  ];

const WebDesignExpertise = () => <SkSkills heading={{"eyebrow": "Web design expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every web design project we deliver."}} skills={skills} />;

export default WebDesignExpertise;
