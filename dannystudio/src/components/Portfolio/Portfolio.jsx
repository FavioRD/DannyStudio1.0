import React from 'react';
import portfolioData from '../../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row mb-4 text-center">
          <h2 className="section-title">Nuestro Trabajo</h2>
          <p className="section-subtitle">Algunos de nuestros proyectos destacados</p>
        </div>

        <div
          id="portfolioCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {portfolioData.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={item.id}
              >
                <img
                  src={item.image}
                  className="d-block w-100 rounded"
                  alt={item.title}
                  style={{ objectFit: 'cover', height: '80vh' }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Controles manuales */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
