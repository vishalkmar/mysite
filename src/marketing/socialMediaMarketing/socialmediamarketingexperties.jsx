/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube,
  FaPinterest, FaHashtag, FaPoll, FaRegClock, FaCamera, FaBullhorn
} from 'react-icons/fa';
import {
  SiMeta, SiHootsuite, SiBuffer, SiCanva, SiTiktok, SiSnapchat,
  SiSocialblade
} from 'react-icons/si';
import { SkSkills } from "../../serviceKit/ServiceKit";

const skills = [
    { name: "Facebook Marketing", icon: <FaFacebookF size={30} />, color: "#1877F2" },
    { name: "Instagram Growth", icon: <FaInstagram size={30} />, color: "#E1306C" },
    { name: "LinkedIn Outreach", icon: <FaLinkedinIn size={30} />, color: "#0077B5" },
    { name: "Twitter Engagement", icon: <FaTwitter size={30} />, color: "#1DA1F2" },
    { name: "YouTube SEO", icon: <FaYoutube size={30} />, color: "#FF0000" },
    { name: "Pinterest Boards", icon: <FaPinterest size={30} />, color: "#E60023" },
    { name: "TikTok Strategy", icon: <SiTiktok size={30} />, color: "#69C9D0" },
    { name: "Snapchat Ads", icon: <SiSnapchat size={30} />, color: "#FFFC00" },
    { name: "Hashtag Research", icon: <FaHashtag size={30} />, color: "#FF6B6B" },
    { name: "Content Scheduling", icon: <FaRegClock size={30} />, color: "#F4A261" },
    { name: "Live Engagement", icon: <FaPoll size={30} />, color: "#3A86FF" },
    { name: "Influencer Collab", icon: <FaBullhorn size={30} />, color: "#FF9F1C" },
    { name: "Canva Design", icon: <SiCanva size={30} />, color: "#00C4CC" },
    { name: "Meta Ads Manager", icon: <SiMeta size={30} />, color: "#4267B2" },
    { name: "Hootsuite Automation", icon: <SiHootsuite size={30} />, color: "#000000" },
    { name: "Buffer Analytics", icon: <SiBuffer size={30} />, color: "#168EEA" },
    { name: "Social Blade Tracking", icon: <SiSocialblade size={30} />, color: "#DB4437" },
    { name: "Reels/Shorts Creation", icon: <FaCamera size={30} />, color: "#C9184A" }
  ];

const SocialMediaMarketingExpertise = () => <SkSkills heading={{"eyebrow": "Social media marketing expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every social media marketing project we deliver."}} skills={skills} />;

export default SocialMediaMarketingExpertise;
