import React from 'react';
import '../estilos/categorias.css';
import Categoria from '../componentes/categoria';

function Categorias() {
  return (
    <div>
      <h2>Categorias de libros</h2>
      <div className="container">
        {/* Tarjeta de Matematicas */}
        <div className="card">
          <Categoria
            imagen="dinosaurio"
            nombre="Título del Categoria 1"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/matematicas'; }}>Matematicas</button>
          </div>
        </div>

        {/* Tarjeta de Programacion */}
        <div className="card">
          <Categoria
            imagen="dinosaurio"
            nombre="Título del Categoria 2"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/programacion'; }}>Programacion</button>
          </div>
        </div>

        {/* Tarjeta de Comunicacion */}
        <div className="card">
          <Categoria
            imagen="dinosaurio"
            nombre="Título del Categoria 3"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/comunicacion'; }}>Comunicacion</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;