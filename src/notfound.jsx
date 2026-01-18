
import notFoundImage from './serviceImages/office/notfound.jpg'; // apna image path sahi lagao

const NotFound = () => {
  return (
    <>
      <style>
        {`
          .notfound-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%);
            padding: 2rem;
            text-align: center;
          }
          .notfound-image {
            max-width: 100%;
            height: 60vh;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            transition: transform 0.5s ease;
          }
          .notfound-image:hover {
            transform: scale(1.05);
          }
          .notfound-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 4rem;
            background: linear-gradient(90deg, rgb(242, 244, 247) 0%, #00f2fe 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-top: 2rem;
          }
          .notfound-text {
            color: #adb5bd;
            font-size: 1.2rem;
            margin-top: 1rem;
          }
        `}
      </style>

      <div className="notfound-container container-fluid">
        <div>
          <img 
            src={notFoundImage} 
            alt="Page Not Found" 
            className="notfound-image mb-4"
          />
          <h1 className="notfound-title">404 - Page Not Found</h1>
          <p className="notfound-text">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
