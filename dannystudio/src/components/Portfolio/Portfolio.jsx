import React from 'react';
import portfolioData from '../../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-dark">
      <div className="container">
        <div className="row mb-4 text-center">
          <h2 className="section-title">Nuestro Trabajo</h2>
          <p className="section-subtitle">Algunos de nuestros proyectos destacados</p>
        </div>
        <div className="row">
          {portfolioData.map(item => (
            <div
              className="col-md-6 col-lg-3 portfolio-item"
              key={item.id}
              data-aos="zoom-in"
            >
              <div className="position-relative">
                <img src={item.image} alt={item.title} className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <h5 className="text-white mb-0">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
