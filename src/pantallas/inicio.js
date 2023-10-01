import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Libro from '../componentes/libro';

function Inicio() {
  const { id_category } = useParams();
  const [libros, setLibros] = useState([]);

  var route = 'http://44.213.189.154:8002/books';
  localStorage.setItem('id_categoria', id_category);

  if (typeof id_category !== 'undefined') {
    route = route + '/categorias/' + id_category;
  }

  useEffect(() => {
    const obtenerLibros = async () => {
      fetch(route, { method: 'GET' })
        .then(response => response.json())
        .then(response => { setLibros(response); })
        .catch(error => { console.log(error); });
    };
    obtenerLibros(); 
  }, [route]);
  const obtenerRutaImagen = (idCategoria) => {
    switch (idCategoria) {
      case 1:
        return 'categoria1';
      case 2:
        return 'categoria2';
      case 3:
        return 'categoria3';
      default:
        return 'dinosaurio'
    }
  };

  return (
    <div>
      {id_category > 0 && (
        <div>
          <button onClick={() => { window.location.href = `/vender` }}>Vender nuevo Libro</button>
        </div>
      )}

      {libros.map(book => (
        <Libro
          key     = {book.id}
          imagen  = {obtenerRutaImagen(book.id_category)}
          nombre  = {book.titulo}
          autor   = {book.autor}
          texto   = {book.descripcion}
          precio  = {"S/." +book.precio}
          id      = {book.id}
          button  = "shop"
        />
      ))}
    </div>
  );
}

export default Inicio;
