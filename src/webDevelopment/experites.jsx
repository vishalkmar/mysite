import React from 'react';

import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoJava, BiLogoPhp, BiLogoHtml5, BiLogoCss3, BiLogoMongodb, BiLogoPostgresql, BiLogoFirebase, BiLogoAws } from 'react-icons/bi';
import { SiExpress, SiDjango, SiSpring, SiLaravel, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte, SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si';

const TechnologyExpertise = () => {
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

  return (
    <>
    <div className='container-fluid' style={{background:  "#020617"}}>
    <div className="container py-5">
      <h2 className="text-center responsive-text mb-5 fw-bold" style={{ background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', fontFamily:'orbitron',fontSize:'4.5rem' }}>Our Technology Expertise</h2>
      
     <div className="row g-4">
  {technologies.map((tech, index) => (
    <div key={index} className="col-6 col-md-4 col-lg-3">
      <div
        className="p-4 text-center h-100"
        style={{
          backgroundColor: "transparent",
          borderRadius: "16px",
          border: "1px solid rgba(0,136,255,0.35)",

          /* inner blue light */
          boxShadow: `
            inset 0 0 10px rgba(0,136,255,0.35),
            inset 0 0 24px rgba(0,136,255,0.18)
          `,
          transition: "all 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `
            0 0 14px rgba(0,136,255,0.55),
            0 0 30px rgba(0,136,255,0.4),
            0 0 55px rgba(0,136,255,0.25),
            inset 0 0 14px rgba(0,136,255,0.45)
          `;
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `
            inset 0 0 10px rgba(0,136,255,0.35),
            inset 0 0 24px rgba(0,136,255,0.18)
          `;
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto 12px",
            borderRadius: "50%",
            background: "white",
            color: tech.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          {tech.icon}
        </div>

        <h5
          style={{
            color: "white",
            fontFamily: "orbitron",
            fontWeight: "700",
            marginBottom: 0,
          }}
        >
          {tech.name}
        </h5>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
     <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

  

export default TechnologyExpertise;