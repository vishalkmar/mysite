/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import 'aos/dist/aos.css';
import AOS from 'aos';
import { 
  FaCloud, FaUsersCog, FaChartLine, FaExchangeAlt, FaDatabase,
  FaPhp, FaHtml5, FaShopify, FaMicrosoft, FaWordpress
} from 'react-icons/fa';
import { 
  SiMysql, SiMagento, SiDrupal, SiJavascript, SiPython,SiDotnet, SiTableau
} from 'react-icons/si';
import { SkSkills } from "../serviceKit/ServiceKit";

const skills = [
    { name: "SAAS Development", icon: <FaCloud size={30} />, color: "#3a86ff" },
    { name: "CRM Development", icon: <FaUsersCog size={30} />, color: "#8338ec" },
    { name: "BI Apps Development", icon: <FaChartLine size={30} />, color: "#ff006e" },
    { name: "Integration Development", icon: <FaExchangeAlt size={30} />, color: "#fb5607" },
    { name: "Database Development", icon: <FaDatabase size={30} />, color: "#00b4d8" },
    { name: "PHP/MySQL Development", icon: <FaPhp size={30} />, color: "#777bb4" },
    { name: "HTML5/CSS", icon: <FaHtml5 size={30} />, color: "#e34f26" },
    { name: "Magento Ecommerce", icon: <SiMagento size={30} />, color: "#ee672f" },
    { name: "Microsoft Development", icon: <FaMicrosoft size={30} />, color: "#0078d7" },
    { name: "Drupal CMS", icon: <SiDrupal size={30} />, color: "#0678be" },
    { name: "JavaScript Solutions", icon: <SiJavascript size={30} />, color: "#f7df1e" },
    { name: "Python Applications", icon: <SiPython size={30} />, color: "#3776ab" },
    // { name: "Java Systems", icon: <SiJava size={30} />, color: "#007396" },
    // { name: "C# Development", icon: <SiCsharp size={30} />, color: "#239120" },
    { name: ".NET Framework", icon: <SiDotnet size={30} />, color: "#512bd4" },
    // { name: "Power BI Solutions", icon: <SiPowerbi size={30} />, color: "#f2c811" },
    { name: "Tableau Analytics", icon: <SiTableau size={30} />, color: "#1f377c" },
    { name: "Shopify Stores", icon: <FaShopify size={30} />, color: "#95bf47" },
    { name: "WordPress CMS", icon: <FaWordpress size={30} />, color: "#21759b" },
    { name: "MySQL Solutions", icon: <SiMysql size={30} />, color: "#4479a1" }
  ];

const SoftwareDevelopmentExpertise = () => <SkSkills heading={{"eyebrow": "Software development expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every software development project we deliver."}} skills={skills} />;

export default SoftwareDevelopmentExpertise;
