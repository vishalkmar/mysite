/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import {
  FaPenNib, FaBlogger, FaNewspaper, FaVideo, FaFileAlt,
  FaPhotoVideo, FaQuoteRight, FaPodcast, FaBullhorn
} from 'react-icons/fa';
import {
  SiGrammarly, SiSemrush, SiGoogleanalytics, SiSurveymonkey,
  SiNotion, SiBuzzfeed, SiHubspot, SiTrello
} from 'react-icons/si';
import { SkSkills } from "../../serviceKit/ServiceKit";

const skills = [
    { name: "Blog Writing", icon: <FaBlogger size={30} />, color: "#F57C00" },
    { name: "SEO Copywriting", icon: <FaPenNib size={30} />, color: "#6A4C93" },
    { name: "Infographics", icon: <FaPhotoVideo size={30} />, color: "#1E90FF" },
    { name: "Video Scripts", icon: <FaVideo size={30} />, color: "#E50914" },
    { name: "Case Studies", icon: <FaFileAlt size={30} />, color: "#009688" },
    { name: "Press Releases", icon: <FaNewspaper size={30} />, color: "#607D8B" },
    { name: "Content Strategy", icon: <SiNotion size={30} />, color: "#000000" },
    { name: "Podcast Content", icon: <FaPodcast size={30} />, color: "#A020F0" },
    { name: "Social Captions", icon: <FaQuoteRight size={30} />, color: "#FF6B6B" },
    { name: "Buzz Marketing", icon: <SiBuzzfeed size={30} />, color: "#EE1C25" },
    { name: "Hubspot CMS", icon: <SiHubspot size={30} />, color: "#FF7A59" },
    { name: "SEO Tools (SEMRush)", icon: <SiSemrush size={30} />, color: "#FF5722" },
    { name: "Google Analytics", icon: <SiGoogleanalytics size={30} />, color: "#F9AB00" },
    { name: "Grammarly Review", icon: <SiGrammarly size={30} />, color: "#15C39A" },
    { name: "Surveys & Polls", icon: <SiSurveymonkey size={30} />, color: "#00BF6F" },
    // { name: "Google Podcasts", icon: <SiGooglepodcasts size={30} />, color: "#4285F4" },
    { name: "Trello Content Plans", icon: <SiTrello size={30} />, color: "#0079BF" },
    { name: "Content Promotion", icon: <FaBullhorn size={30} />, color: "#C9184A" }
  ];

const ContentMarketingExpertise = () => <SkSkills heading={{"eyebrow": "Content marketing expertise", "title": "Tools we master.", "accent": "Skills that ship.", "copy": "The platforms, practices and specialist skills behind every content marketing project we deliver."}} skills={skills} />;

export default ContentMarketingExpertise;
