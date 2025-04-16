import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
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

  return (
    <section className="pt-5 mt-5 bg-dark text-white">
      <div className="container">
        <h2 className="section-title text-center mb-4">{servicio.title}</h2>
        <p className="lead text-center mb-5">{servicio.fullDescription || 'Descripción extendida del servicio...'}</p>

        <div className="row mb-5">
          <h4>Paquetes disponibles</h4>
          <ul>
            {servicio.paquetes?.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
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
