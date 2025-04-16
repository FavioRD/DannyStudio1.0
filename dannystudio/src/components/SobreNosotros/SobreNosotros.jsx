import React from 'react';
import fotografo from '../../assets/perfil/logo1.jpg';

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" style={{ textAlign: 'center' ,width: '50%'}}>
            <img src={fotografo} alt="logo" className="img-fluid rounded"/>
          </div>
          <div className="col-lg-6" data-aos="fade-left" >
            <h2 className="section-title text-center">Sobre Nosotros</h2>
            <p>Somos un estudio fotográfico profesional con más de 10 años de experiencia capturando momentos especiales. Nuestra pasión por la fotografía nos impulsa a crear imágenes únicas y memorables.</p>
            <p>Creemos que cada momento es único y merece ser preservado con arte y dedicación.</p>
            <div className="row mt-4">
              <div className="col-md-6 mb-3 d-flex">
                <div className="me-3 ">
                  <i className="fas fa-camera fa-2x"></i>
                </div>
                <div>
                  <h5>Equipo Profesional</h5>
                  <p className="mb-0">Tecnología de última generación</p>
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex">
                <div className="me-3 ">
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
