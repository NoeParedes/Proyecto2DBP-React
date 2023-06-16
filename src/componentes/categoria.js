import React from 'react';
//import '../estilos/categorias.css'

function Categoria(props) {
/* Un componente funcional de react retorna un elemento jsx (combinacion de html y javaScript)*/
  return ( /*estructura de nuestro componente */
    <div className='contenedor-categoria'>
      <img
      className='imagen-categoria'
      src={require(`../imagenes/categoria-${props.imagen}.png`)}
      alt='librobro'/>

      <div className ='contenedor-texto-lcategoria'>
        <p className='nombre-categoria'><strong>{props.nombre}</strong></p>
        <p className='texto-categoria'>"{props.texto}"</p>
      </div>

    </div>
  );
}

export default Categoria;