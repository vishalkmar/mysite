/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import {
  RiSearchLine,
  RiCodeSSlashLine,
  RiExternalLinkLine,
  RiSettings3Line,
  RiFileTextLine,
  RiMapPinLine,
  RiBarChart2Line,
  RiGoogleLine,
  RiPieChart2Line,
  RiFileList3Line,
  RiShieldCheckLine,
  RiToolsLine,
  RiPenNibLine,
  RiRocketLine,
  RiBugLine,
  RiLightbulbLine,
  RiGlobeLine,
  RiTeamLine,
  RiStackLine,
  RiSeoLine
} from 'react-icons/ri';
import { SkSkills } from "../../serviceKit/ServiceKit";

const skills = [
    { name: "Keyword Research", icon: <RiSearchLine size={30} />, color: "#FF6B6B" },
    { name: "On-Page SEO", icon: <RiCodeSSlashLine size={30} />, color: "#007BFF" },
    { name: "Off-Page SEO", icon: <RiExternalLinkLine size={30} />, color: "#00C49A" },
    { name: "Technical SEO", icon: <RiSettings3Line size={30} />, color: "#F4A261" },
    { name: "SEO Copywriting", icon: <RiFileTextLine size={30} />, color: "#6A4C93" },
    { name: "Local SEO", icon: <RiMapPinLine size={30} />, color: "#2A9D8F" },
    { name: "SEO Audits", icon: <RiBarChart2Line size={30} />, color: "#E76F51" },
    { name: "Google Tools", icon: <RiGoogleLine size={30} />, color: "#4285F4" },
    { name: "Analytics", icon: <RiPieChart2Line size={30} />, color: "#F9AB00" },
    { name: "SEO Reports", icon: <RiFileList3Line size={30} />, color: "#FF5722" },
    { name: "SEO Security", icon: <RiShieldCheckLine size={30} />, color: "#1A73E8" },
    { name: "Optimization Tools", icon: <RiToolsLine size={30} />, color: "#2D9CDB" },
    { name: "Content Strategy", icon: <RiPenNibLine size={30} />, color: "#F72585" },
    { name: "SEO Growth", icon: <RiRocketLine size={30} />, color: "#A7287A" },
    { name: "Bug Fixing", icon: <RiBugLine size={30} />, color: "#78BC1F" },
    { name: "Innovative Ideas", icon: <RiLightbulbLine size={30} />, color: "#E65100" },
    { name: "Global SEO", icon: <RiGlobeLine size={30} />, color: "#0052CC" },
    { name: "Team Collaboration", icon: <RiTeamLine size={30} />, color: "#9C27B0" },
    { name: "SEO Stack", icon: <RiStackLine size={30} />, color: "#3A86FF" },
    { name: "SEO Mastery", icon: <RiSeoLine size={30} />, color: "#C9184A" }
  ];

const SEOExpertise = () => <SkSkills heading={{"eyebrow": "SEO expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every SEO project we deliver."}} skills={skills} />;

export default SEOExpertise;
