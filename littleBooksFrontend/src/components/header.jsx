import '../styles/home.css';
import React from 'react';
import libros from '../assets/fondo_header.jpeg';

const Header = () => {
  return (
      <header className="header">
        <img src={libros} alt="Imagen de encabezado" className="header-image" />
        <h1 className="title">Pequeños</h1>
        <h2 className="under_title">Libros</h2>
      </header>
  );
};

export default Header;
