import React from 'react';
import Libro from '../componentes/libro';
function Inicio() {
  return (
    <div>
      <h2>Página de Inicio</h2>
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 1"
        autor="Autor del libro 1"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 2"
        autor="Autor del libro 2"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 1"
        autor="Autor del libro 1"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 2"
        autor="Autor del libro 2"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 1"
        autor="Autor del libro 1"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Libro
        imagen="dinosaurio"
        nombre="Título del libro 2"
        autor="Autor del libro 2"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}

export default Inicio;
