import React from 'react';
import '../estilos/libro.css'

function Libro(props) {
/* Un componente funcional de react retorna un elemento jsx (combinacion de html y javaScript)*/
  return ( /*estructura de nuestro componente */
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
        <p className='id-libro'>     <strong> {props.id}     </strong> </p>
      </div>

    </div>
  );
}

export default Libro;