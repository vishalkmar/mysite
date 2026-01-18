import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageBanner = ({ imageUrl }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <img 
            src={imageUrl} 
            alt="App Development Banner"
            className="img-fluid w-100"
            style={{
              display: 'block',
              height: 'auto',
              maxHeight: '80vh',
              objectFit:'100% 100%',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>
    </div>
  );
};


export default ImageBanner;