import React from 'react';
import logo from '../../assets/logo/logo.jpg'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          <img src={logo} alt="Logo Estudio Fotográfico" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Inicio', 'Portfolio', 'Sobre Nosotros', 'Servicios', 'Contacto'].map((seccion, i) => (
              <li className="nav-item" key={i}>
                <a className="nav-link" href={`#${seccion.toLowerCase().replace(/\s/g, '-')}`}>{seccion}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
