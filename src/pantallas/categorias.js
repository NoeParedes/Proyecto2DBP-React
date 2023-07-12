import React from 'react';
import '../estilos/categorias.css';
import Categoria from '../componentes/categoria';

function Categorias() {
  return (
    <div>
      <h2>Categorías de libros</h2>
      <div className="container">
        {/* Tarjeta de Matemáticas */}
        <div className="card">
          <Categoria
            imagen="mats.jpeg" /* Cambia el nombre de la imagen según tu preferencia */
            texto="GA"
            nombre="Libros de matemáticas."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/inicio/1'; }}> Matemáticas </button>
          </div>
        </div>

        {/* Tarjeta de Programación */}
        <div className="card">
          <Categoria
            imagen="pro.jpeg" /* Cambia el nombre de la imagen según tu preferencia */
            texto="GA"
            nombre="Libros de programación."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/inicio/2'; }}> Programación </button>
          </div>
        </div>

        {/* Tarjeta de Comunicación */}
        <div className="card">
          <Categoria
            imagen="co.jpeg" /* Cambia el nombre de la imagen según tu preferencia */
            texto="GA"
            nombre="Libros de comunicación."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/inicio/3'; }}> Comunicación </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;
