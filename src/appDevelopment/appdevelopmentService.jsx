import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiShoppingBag, FiTruck, FiActivity, FiShare2, FiFilm, FiCamera, FiGlobe, FiCloud, FiDollarSign, FiBookOpen, FiHeart } from 'react-icons/fi';

const AppDevelopmentServices = () => {
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

  return (
    <>
      <style>
        {`
          .hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }
          .service-icon {
            color: #0d6efd;
            background-color: white;
            transition: all 0.3s ease;
          }
          // .card:hover .service-icon {
          //   color: white;
          //   background-color: #0d6efd;
          // }
             @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 3rem !important;
          }
        }
        `}
      </style>
    
    <div className='container-fluid'  style={{backgroundColor: '#020617'}}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold responsive-text" style={{fontFamily:'orbitron',fontSize:'4rem',color:'white'}}>Our <span className="" style={{ background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}} >App Development</span> Expertise</h2>
          <p className="lead text-muted">Custom mobile solutions for every industry need</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4" >
              <div className="card h-100 border-0 shadow-sm hover-effect" style={{backgroundColor: '#020617'}}>
                <div className="card-body p-4 text-center">
                  <div className="service-icon mb-4 mx-auto rounded-circle p-3 d-flex align-items-center justify-content-center"
                    style={{ width: '70px', height: '70px',background:'white' }}>
                    {service.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-3 text-white" style={{fontFamily:'orbitron'}}>{service.title}</h3>
                  <p className="mb-0 text-white" style={{background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'}}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default AppDevelopmentServices;