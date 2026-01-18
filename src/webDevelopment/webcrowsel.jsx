// src/components/BootstrapCarousel.jsx
import React from 'react';
import cone from '../serviceImages/webdevelopment/cone.webp'
import ctwo from '../serviceImages/webdevelopment/ctwo.webp'
import cthree from '../serviceImages/webdevelopment/cthree.webp'
import cfour from '../serviceImages/webdevelopment/tfour.webp'



const BootstrapCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={cone} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide Title</h5>
            <p>Description for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ctwo} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Title</h5>
            <p>Description for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cthree} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Title</h5>
            <p>Description for the third slide.</p>
          </div>
        </div>
         <div className="carousel-item">
          <img src={cfour} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Title</h5>
            <p>Description for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BootstrapCarousel;
