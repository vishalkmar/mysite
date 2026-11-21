/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaHashtag, FaHeart, FaComments, FaSearch } from 'react-icons/fa';
import smmImg from '../../serviceImages/software/socialmediathree.jpg';
import { SkTabs } from "../../serviceKit/ServiceKit";

const content = {
    overview: {
      title: 'What is Social Media Marketing?',
      desc: 'Social Media Marketing (SMM) uses platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your brand, connect with your audience, and drive traffic and sales.',
    },
    benefits: {
      title: 'Key Benefits of SMM',
      desc: '• Boost brand awareness\n• Drive targeted traffic\n• Foster customer engagement\n• Improve brand loyalty\n• Cost-effective promotion',
    },
    strategies: {
      title: 'Our SMM Strategies',
      desc: '• Content Calendars\n• Paid Campaigns (Meta, LinkedIn, Twitter)\n• Storytelling & Reels\n• Influencer Collaborations\n• Hashtag Research',
    },
    platforms: {
      title: 'Top Platforms We Target',
      desc: '• Facebook\n• Instagram\n• Twitter (X)\n• LinkedIn\n• Pinterest\n• YouTube & Snapchat',
    },
  };

const tabs = [
  { key: "overview", label: "Overview", icon: <FaHashtag />, ...content.overview },
  { key: "benefits", label: "Benefits", icon: <FaHeart />, ...content.benefits },
  { key: "strategies", label: "Strategies", icon: <FaComments />, ...content.strategies },
  { key: "platforms", label: "Platforms", icon: <FaSearch />, ...content.platforms }
];

const SocialMediaMarketingInfoSection = () => <SkTabs heading={{"eyebrow": "Social media marketing · Deep dive", "title": "Engaging Social Media", "accent": "Marketing.", "copy": "Elevate your brand with powerful campaigns on top social platforms."}} tabs={tabs} image={smmImg} imageAlt="Social Media Marketing" />;

export default SocialMediaMarketingInfoSection;
