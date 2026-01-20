import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact, FaAndroid, FaApple } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiIonic,  SiFirebase, SiAppwrite } from 'react-icons/si';

const AppTechnologies = () => {
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

  return (
    <>
      <style>
        {`
          .tech-card {
            transition: all 0.3s ease;
            border-radius: 12px;
            overflow: hidden;
            height: 100%;
            border: none;
            background: #f8f9fa;
          }
          .tech-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .tech-icon-wrapper {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 auto 1rem;
            transition: all 0.3s ease;
          }
          .tech-card:hover .tech-icon-wrapper {
            transform: scale(1.1);
          }
        `}
      </style>
 
   <div className='container-fluid' style={{background: '#020617'}} >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white" style={{fontSize:'4.5rem'}}>Our <span style={{background: 'linear-gradient(90deg,rgb(34, 75, 92) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
            
              WebkitTextFillColor: 'transparent', fontSize:'3.5rem',}}>App Development</span> Tech Stack</h2>
          <p className="lead text-white">Cutting-edge technologies for building cross-platform mobile solutions</p>
        </div>

        <div className="row g-4">
  {technologies.map((tech, index) => (
    <div key={index} className="col-6 col-md-4 col-lg-3">
      <div
        className="p-4 text-center h-100"
        style={{
          backgroundColor: "transparent",
          borderRadius: "16px",
          border: "1px solid rgba(0,136,255,0.25)",

          /* inner blue light */
          boxShadow: `
            inset 0 0 12px rgba(0,136,255,0.35),
            inset 0 0 28px rgba(0,136,255,0.15)
          `,
          transition: "all 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `
            0 0 15px rgba(0,136,255,0.6),
            0 0 35px rgba(0,136,255,0.45),
            0 0 60px rgba(0,136,255,0.3),
            inset 0 0 15px rgba(0,136,255,0.4)
          `;
          e.currentTarget.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `
            inset 0 0 12px rgba(0,136,255,0.35),
            inset 0 0 28px rgba(0,136,255,0.15)
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
    </>
  );
};

export default AppTechnologies;