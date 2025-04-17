import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import serviciosData from '../../data/serviciosData';
import './ServicioDetalle.css';

const ServicioDetalle = () => {
  const { id } = useParams();
  const servicio = serviciosData.find(s => s.id.toString() === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  if (!servicio) {
    return <div className="container text-center text-white py-5"><h2>Servicio no encontrado</h2></div>;
  }

  
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <section className="pt-5 mt-5 bg-dark text-white">
      <div className="container">
        <div className="mb-4">
          <button className="btn btn-outline-light" onClick={handleVolver}>
            ← Volver a Servicios
          </button>
        </div>
        <h2 className="section-title text-center mb-4">{servicio.title}</h2>
        <p className="lead text-center mb-5">{servicio.fullDescription || 'Descripción extendida del servicio...'}</p>

        <div className="row justify-content-center">
          <h4 className="text-center mb-4">🎁 Paquetes disponibles</h4>
          {servicio.paquetes && (
            <div className="row justify-content-center">
              {servicio.paquetes.map((paquete, i) => (
                <div key={i} className="col-md-6 col-lg-4 mb-4 d-flex">
                  <div className="card h-100 shadow-sm text-dark w-100">
                    <div className="card-header bg-black text-white text-center fw-bold">
                      {paquete.recomendacion}
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{paquete.nombre}</h5>
                      <p className="card-subtitle mb-3">S/ {paquete.precio.toFixed(2)} <small>/ Por Servicio</small></p>
                      <ul className="list-unstyled text-start mb-3">
                        {paquete.caracteristicas.map((item, j) => (
                          <li key={j} className="mb-1">
                            <i className="fas fa-check text-primary me-2"></i> {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`https://wa.me/51991819284?text=Hola!%20Estoy%20interesado%20en%20el%20paquete%20${encodeURIComponent(paquete.nombre)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success w-100"
                      >
                        Contactar Vía WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row mb-5">
          <h4>Galería de Fotos</h4>
          <div className="row g-3">
            {servicio.galeria?.map((img, i) => (
              <div key={i} className="col-sm-6 col-md-4">
                <img src={img} alt="" className="img-fluid rounded shadow-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <h4>Video de Referencia</h4>
          {servicio.video &&
            <div className="col-12">
              <div className="ratio ratio-16x9">
                <iframe
                  src={servicio.video}
                  title="Video demostrativo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default ServicioDetalle;
