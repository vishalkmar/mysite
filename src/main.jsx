
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// No <React.StrictMode>: its dev-only double mount stops the
// react-three-fiber render loop, so the About page lanyard card never draws
// in `npm run dev`. Production builds are unaffected either way.
root.render(<App />);


