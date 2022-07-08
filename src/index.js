import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/layout/navbar';
import Footer from './components/layout/footer';
import './font/VK.otf'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="bg-container">
      <App />
    </div>
    <Footer />
  </React.StrictMode>
);
