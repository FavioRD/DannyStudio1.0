import React from 'react';
import './Galeria.css';

const imagenes = [
  '/img/galeria/galeria1.jpg',
  '/img/galeria/galeria2.jpg',
  '/img/galeria/galeria3.jpg',
  '/img/galeria/galeria4.jpg',
  '/img/galeria/galeria5.jpg',
  '/img/galeria/galeria6.jpg'
];

const Galeria = () => {
  return (
    <section id="galeria" className="py-5">
      <div className="container">
        <div className="row text-center mb-4" data-aos="fade-up">
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle">Un vistazo a nuestro estilo visual</p>
        </div>
        <div className="row g-3">
          {imagenes.map((src, index) => (
            <div className="col-sm-6 col-md-4" key={index} data-aos="zoom-in">
              <div className="galeria-item">
                <img src={src} alt={`Galería ${index + 1}`} className="img-fluid rounded shadow-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
