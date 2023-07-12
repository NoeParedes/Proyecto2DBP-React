import React from 'react';

function Categoria(props) {
  return (
    <div className='contenedor-categoria'>
      <img
        className='imagen-categoria'
        src={require(`../imagenes/${props.imagen}`)}
        alt='librobro'
      />

      <div className ='contenedor-texto-categoria'>
        <p className='nombre-categoria'><strong>{props.nombre}</strong></p>
        <p className='texto-categoria'>"{props.texto}"</p>
      </div>
    </div>
  );
}

export default Categoria;
