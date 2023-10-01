import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Libro from '../componentes/libro';

function Inicio() {
  const { id_category } = useParams();
  const [libros, setLibros] = useState([]);

  var route = 'http://127.0.0.1:5000/books';
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
          imagen  = "dinosaurio"
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