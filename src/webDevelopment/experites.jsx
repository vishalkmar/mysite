/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoJava, BiLogoPhp, BiLogoHtml5, BiLogoCss3, BiLogoMongodb, BiLogoPostgresql, BiLogoFirebase, BiLogoAws } from 'react-icons/bi';
import { SiExpress, SiDjango, SiSpring, SiLaravel, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte, SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si';
import { SkSkills } from "../serviceKit/ServiceKit";

const technologies = [
    { name: "JavaScript", icon: <BiLogoJavascript size={30} />, color: "#F7DF1E" },
    { name: "React", icon: <BiLogoReact size={30} />, color: "#61DAFB" },
    { name: "Node.js", icon: <BiLogoNodejs size={30} />, color: "#339933" },
    { name: "Express", icon: <SiExpress size={30} />, color: "#000000" },
    { name: "Python", icon: <BiLogoPython size={30} />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango size={30} />, color: "#092E20" },
    { name: "Java", icon: <BiLogoJava size={30} />, color: "#007396" },
    { name: "Spring", icon: <SiSpring size={30} />, color: "#6DB33F" },
    { name: "PHP", icon: <BiLogoPhp size={30} />, color: "#777BB4" },
    { name: "Laravel", icon: <SiLaravel size={30} />, color: "#FF2D20" },
    { name: "Next.js", icon: <SiNextdotjs size={30} />, color: "#000000" },
    { name: "Vue.js", icon: <SiVuedotjs size={30} />, color: "#4FC08D" },
    { name: "Angular", icon: <SiAngular size={30} />, color: "#DD0031" },
    { name: "Svelte", icon: <SiSvelte size={30} />, color: "#FF3E00" },
    { name: "HTML5", icon: <BiLogoHtml5 size={30} />, color: "#E34F26" },
    { name: "CSS3", icon: <BiLogoCss3 size={30} />, color: "#1572B6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <SiBootstrap size={30} />, color: "#7952B3" },
    { name: "MongoDB", icon: <BiLogoMongodb size={30} />, color: "#47A248" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={30} />, color: "#4169E1" },
    { name: "MySQL", icon: <SiMysql size={30} />, color: "#4479A1" },
    // { name: "SQL Server", icon: <SiMicrosoftsqlserver size={30} />, color: "#CC2927" },
    { name: "Firebase", icon: <BiLogoFirebase size={30} />, color: "#FFCA28" },
    { name: "AWS", icon: <BiLogoAws size={30} />, color: "#232F3E" }
  ];

const TechnologyExpertise = () => (
  <SkSkills
    heading={{
      eyebrow: "Web development stack",
      title: "Modern stack.",
      accent: "Proven tools.",
      copy: "Frontend, backend, databases and cloud. We pick what fits your product, not what is trendy.",
    }}
    skills={technologies}
  />
);

export default TechnologyExpertise;
