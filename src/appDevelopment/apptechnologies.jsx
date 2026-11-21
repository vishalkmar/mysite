/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { FaReact, FaAndroid, FaApple } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiIonic,  SiFirebase, SiAppwrite } from 'react-icons/si';
import { SkSkills } from "../serviceKit/ServiceKit";

const technologies = [
    { name: "React Native", icon: <FaReact size={32} />, color: "#61DAFB" },
    { name: "Flutter", icon: <SiFlutter size={32} />, color: "#02569B" },
    { name: "Android (Java)", icon: <FaAndroid size={32} />, color: "#3DDC84" },
    { name: "iOS (Swift)", icon: <SiSwift size={32} />, color: "#F05138" },
    { name: "Kotlin Multiplatform", icon: <SiKotlin size={32} />, color: "#7F52FF" },
    { name: "Ionic Framework", icon: <SiIonic size={32} />, color: "#3880FF" },
    // { name: "Xamarin", icon: <SiXamarin size={32} />, color: "#3498DB" },
    { name: "Apple Ecosystem", icon: <FaApple size={32} />, color: "#A2AAAD" },
    { name: "Firebase", icon: <SiFirebase size={32} />, color: "#FFCA28" },
    { name: "Appwrite", icon: <SiAppwrite size={32} />, color: "#F02E65" },
    { name: "PWA", icon: <FaReact size={32} />, color: "#5A0FC8" },
    { name: "Unity Mobile", icon: <FaAndroid size={32} />, color: "#000000" }
  ];

const AppTechnologies = () => (
  <SkSkills
    heading={{
      eyebrow: "App development tech stack",
      title: "Native feel.",
      accent: "Cross-platform speed.",
      copy: "The frameworks and backends we use to ship reliable Android, iOS and cross-platform apps.",
    }}
    skills={technologies}
  />
);

export default AppTechnologies;
