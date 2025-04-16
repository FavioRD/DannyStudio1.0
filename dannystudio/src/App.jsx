import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import Servicios from './components/Servicios/Servicios';
import ServicioDetalle from './components/Servicios/ServicioDetalle';
import Galeria from './components/Galeria/Galeria';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Portfolio />
            <SobreNosotros />
            <Servicios />
            <Galeria />
            <Contacto />
          </>
        } />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
