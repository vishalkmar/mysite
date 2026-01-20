import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HappyClients = () => {
  const clients = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechSolutions Pvt. Ltd.",
      review: "The website delivered exceeded our expectations. Perfect blend of design and functionality.",
      rating: 5,
      image: "client1.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Digital Marketing Hub",
      review: "Incredible attention to detail and on-time delivery. Will definitely work with them again!",
      rating: 4,
      image: "client2.jpg"
    },
    {
      id: 3,
      name: "Amit Verma",
      company: "FinTech Corp",
      review: "They truly understand user experience. Loved the interface and performance!",
      rating: 5,
      image: "client3.jpg"
    },
    {
      id: 4,
      name: "Neha Desai",
      company: "EduSmart",
      review: "Professional team and great support throughout the project.",
      rating: 4,
      image: "client4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const visibleCards = isMobile ? 1 : 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  return (
    <div style={{  background:  "#020617", padding: '80px 0' }}>
      <div className="container text-center">
        <h2 className="mb-5" style={{ fontWeight: '700',  background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent' ,fontSize:'4.8rem',fontFamily:'orbitron'}}>
          Our Happy Clients
        </h2>

        <div className="position-relative" >
          <div className="row justify-content-center">
            {getVisibleClients().map((client) => (
              <div className="col-md-6 col-12 mb-4" key={client.id}>
                <div className="card h-100 shadow-sm  p-4" style={{ borderRadius: '15px',background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',border:"1px solid white" }}>
                  <img
                    src={client.image}
                    alt={client.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      border: '4px solid #fff',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                     
                    }}
                  />
                  <h5 className="" style={{color:'white',fontFamily:'orbitron'}}>{client.name}</h5>
                  <div className="mb-2" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'}}>
                    {[...Array(client.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning"></i>
                    ))}
                    {[...Array(5 - client.rating)].map((_, i) => (
                      <i key={i} className="far fa-star text-warning"></i>
                    ))}
                  </div>
                  <p className="fst-italic" style={{color:'white',fontFamily:'orbitron'}}>"{client.review}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button onClick={handlePrev} className="btn bg-white p-3 position-absolute top-50 start-0 translate-middle-y">
            ‹
          </button>
          <button onClick={handleNext} className="btn bg-white p-3 btn-white position-absolute top-50 end-0 translate-middle-y">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
