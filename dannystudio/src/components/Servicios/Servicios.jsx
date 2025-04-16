import { Link } from 'react-router-dom';
import React from 'react';
import serviciosData from '../../data/serviciosData';

const Servicios = () => {
  return (
    <section id="servicios" className="py-5 bg-dark">
      <div className="container">
        <div className="row mb-4 text-center">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Lo que podemos ofrecerte</p>
        </div>
        <div className="row">
          {serviciosData.map((servicio, i) => (
            <div
              className="col-md-6 col-lg-4 mb-5"
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 100}
            >
              <Link to={`/servicios/${servicio.id}`} className="card service-card h-100 text-center p-4 text-decoration-none text-dark">
                <div className="service-icon m-3">
                  <i className={servicio.icon}></i>
                </div>
                <h5 className="card-title">{servicio.title}</h5>
                <p className="card-text">{servicio.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
