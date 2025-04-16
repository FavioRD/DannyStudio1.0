import React, { useState } from 'react';


const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  // Redes sociales
  const redesSociales = [
    { icon: 'facebook-f', url: 'https://facebook.com/' },
    { icon: 'instagram', url: 'https://instagram.com/' },
    { icon: 'youtube', url: 'https://youtube.com/' }
  ];

  // Verificar si la tienda está abierta
  const horario = {
    0: { dia: 'Domingo', abre: 9, cierra: 13 },
    1: { dia: 'Lunes', abre: 9, cierra: 17 },
    2: { dia: 'Martes', abre: 9, cierra: 17 },
    3: { dia: 'Miércoles', abre: 9, cierra: 17 },
    4: { dia: 'Jueves', abre: 9, cierra: 17 },
    5: { dia: 'Viernes', abre: 9, cierra: 17 },
    6: { dia: 'Sábado', abre: 9, cierra: 13 }
  };

  const ahora = new Date();
  const hora = ahora.getHours();
  const dia = ahora.getDay();

  const diaActual = horario[dia];
  const estaAbierto = hora >= diaActual.abre && hora < diaActual.cierra;

  // Manejo del formulario  
  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = e => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  // Renderizado del componente
  return (
    <section id="contacto" className="py-5 bg-dark">
      <div className="container">
        <div className="row mb-4 text-center">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">Estamos para ayudarte</p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0 text-white" data-aos="fade-up">
            <form onSubmit={handleSubmit}>
              {['nombre', 'email', 'mensaje'].map((field, i) => (
                <div className="mb-3" key={i}>
                  <label htmlFor={field} className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'mensaje' ? (
                    <textarea
                      className="form-control"
                      id={field}
                      rows="4"
                      value={form[field]}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'telefono' ? 'tel' : 'text'}
                      className="form-control"
                      id={field}
                      value={form[field]}
                      onChange={handleChange}
                      required={field !== 'telefono'}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 bg-transparent text-white">
              <div className="card-body p-0">
                <h5 className="card-title">Información de Contacto</h5>
                <p className="card-text">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
                <hr />
                <br />
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/3kRbFa2SdHKvLtSQ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Jr Santa Isabel Mz Q1 Lt 1-D, Puente Piedra 15122
                    </a>
                  </li>
                  <br />
                  <li>
                    <a
                      href="https://wa.me/51991819284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      +51 991 819 284
                    </a>
                  </li>
                  <br />
                  <li>
                    <i className="fas fa-clock me-2"></i>
                    {diaActual.dia}: {diaActual.abre}:00 a.m – {diaActual.cierra}:00 p.m
                    <span className={`ms-2 badge ${estaAbierto ? 'bg-success' : 'bg-danger'}`}>
                      {estaAbierto ? 'Abierto' : 'Cerrado'}
                    </span>
                  </li>
                </ul>
                <br />
                <hr />
                <br />
                <div className="social-links mt-2">
                  {redesSociales.map(({ icon, url }) => (
                    <a key={icon} href={url} target="_blank" rel="noopener noreferrer" className="me-3 text-white text-decoration-none">
                      <i className={`fab fa-${icon} fa-2x`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
