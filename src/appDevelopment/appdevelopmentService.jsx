/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FiShoppingBag, FiTruck, FiActivity, FiShare2, FiFilm, FiCamera, FiGlobe, FiCloud, FiDollarSign, FiBookOpen, FiHeart } from 'react-icons/fi';
import { SkFeatures } from "../serviceKit/ServiceKit";

const services = [
    { 
      title: "Retail Revolution Apps", 
      icon: <FiShoppingBag size={32} />,
      description: "Transform shopping experiences with seamless mobile commerce solutions"
    },
    { 
      title: "On-Demand Delivery Systems", 
      icon: <FiTruck size={32} />,
      description: "Build lightning-fast delivery networks with real-time tracking"
    },
    { 
      title: "Performance Tracking Apps", 
      icon: <FiActivity size={32} />,
      description: "Create fitness apps with advanced biometric integration"
    },
    { 
      title: "Next-Gen Social Platforms", 
      icon: <FiShare2 size={32} />,
      description: "Develop engaging social networks with AI-powered content"
    },
    { 
      title: "Immersive Media Apps", 
      icon: <FiFilm size={32} />,
      description: "Craft entertainment apps with AR/VR capabilities"
    },
    { 
      title: "Visual Storytelling Apps", 
      icon: <FiCamera size={32} />,
      description: "Design photography apps with professional editing tools"
    },
    { 
      title: "Smart Journey Planners", 
      icon: <FiGlobe size={32} />,
      description: "Develop intelligent travel apps with personalized itineraries"
    },
    { 
      title: "Climate Intelligence Apps", 
      icon: <FiCloud size={32} />,
      description: "Build predictive weather applications with hyper-local data"
    },
    { 
      title: "Digital Finance Solutions", 
      icon: <FiDollarSign size={32} />,
      description: "Create secure fintech apps with blockchain technology"
    },
    { 
      title: "Interactive Learning Apps", 
      icon: <FiBookOpen size={32} />,
      description: "Develop educational platforms with adaptive learning"
    },
    { 
      title: "Wellbeing Companion Apps", 
      icon: <FiHeart size={32} />,
      description: "Build health applications with telemedicine integration"
    }
  ];

const items = services.map(({ title, description, icon }) => ({ title, desc: description, icon }));

const AppDevelopmentServices = () => (
  <SkFeatures
    heading={{
      eyebrow: "Apps we build",
      title: "Every industry.",
      accent: "One standard.",
      copy: "From retail and delivery to finance, learning and health. Mobile products shaped around how people actually use them.",
    }}
    items={items}
  />
);

export default AppDevelopmentServices;
