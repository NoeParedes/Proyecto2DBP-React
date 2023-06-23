import React from 'react';
import '../estilos/libro.css'

function Libro(props) {

  return (
    <div className='contenedor-libro'>
      <img
      className='imagen-libro'
      src={require(`../imagenes/libro-${props.imagen}.png`)}
      alt='librobro'/>

      <div className ='contenedor-texto-libros'>
        <p className='nombre-libro'> <strong> {props.nombre} </strong> </p>
        <p className='autor-libro'>  <strong> {props.autor}  </strong> </p>
        <p className='texto-libro'> "{props.texto}" </p>
        <p className='precio-libro'> <strong> {props.precio} </strong> </p>
      </div>

      <button onClick={() => { window.location.href = `/comprar/${props.id}` }}> Comprar </button>
    </div>
  );
}

export default Libro;