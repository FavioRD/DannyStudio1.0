import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header id="inicio" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center text-white" data-aos="fade-up">
            <h1 className="display-3 fw-bold">DANNY ESCOBAR</h1>
            <p className="lead">VIDEO Y FOTOGRAFIA</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
