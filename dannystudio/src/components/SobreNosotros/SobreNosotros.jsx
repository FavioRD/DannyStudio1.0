import React from 'react';
import fotografo from '../../assets/perfil/logo1.jpg';

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center flex-column flex-lg-row">

          {/* Imagen */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <img
              src={fotografo}
              alt="logo"
              className="img-fluid rounded"
              style={{ maxWidth: '60%', height: 'auto' }}
            />
          </div>

          {/* Texto */}
          <div className="col-lg-6 text-center text-lg-start" data-aos="fade-left">
            <h2 className="section-title text-center">Sobre Nosotros</h2>
            <p>Somos un estudio fotográfico profesional con más de 10 años de experiencia capturando momentos especiales. Nuestra pasión por la fotografía nos impulsa a crear imágenes únicas y memorables.</p>
            <p>Creemos que cada momento es único y merece ser preservado con arte y dedicación.</p>
            
            <div className="row mt-4 text-center text-md-start justify-content-center">
              <div className="col-12 col-md-6 mb-3 d-flex flex-column flex-md-row align-items-center align-items-md-start">
                <div className="me-md-3 mb-2 mb-md-0">
                  <i className="fas fa-camera fa-2x"></i>
                </div>
                <div>
                  <h5>Equipo Profesional</h5>
                  <p className="mb-0">Tecnología de última generación</p>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-3 d-flex flex-column flex-md-row align-items-center align-items-md-start">
                <div className="me-md-3 mb-2 mb-md-0">
                  <i className="fas fa-award fa-2x"></i>
                </div>
                <div>
                  <h5>Experiencia</h5>
                  <p className="mb-0">Más de 10 años en el sector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
