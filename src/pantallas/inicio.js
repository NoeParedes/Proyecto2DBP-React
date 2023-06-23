import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Libro from '../componentes/libro';

function Inicio() {
  const { id_category } = useParams();
  var route = 'http://127.0.0.1:5000/books';

  if (typeof id_category !== 'undefined') {
    route = route + '/categorias/' + id_category;
    console.log("Variable de valor: " + id_category);
  } else {
    console.log("Variable sin valor");
  }

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const obtenerLibros = async () => {
      fetch(route, { method: 'GET' })
        .then(response => response.json())
        .then(response => { setLibros(response); })
        .catch(error => { console.log(error); });
    };
    obtenerLibros(); 
  }, [route]);

  /* localStorage.setItem('id_categoria',1); */

  return (
    <div>
      <h2>Página de Inicio</h2>

      {libros.map(book => (
        <Libro
          key     = {book.id}
          imagen  = "dinosaurio"
          nombre  = {book.titulo}
          autor   = {book.autor}
          texto   = {book.descripcion}
          precio  = {"S/." +book.precio}
          id      = {book.id}
        />
      ))}
    </div>
  );
}

export default Inicio;