import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchor) => {
    const sectionId = anchor.toLowerCase().replace(/\s/g, '-');

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    // Cerrar el menú si está abierto (en móvil)
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse?.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <img src={logo} alt="Logo Estudio Fotográfico" height="40" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Inicio', 'Portfolio', 'Sobre Nosotros', 'Servicios', 'Contacto'].map((seccion, i) => (
              <li className="nav-item" key={i}>
                <button
                  className="nav-link btn btn-link text-white text-decoration-none"
                  onClick={() => handleNavClick(seccion)}
                >
                  {seccion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
