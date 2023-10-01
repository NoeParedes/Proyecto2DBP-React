import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const Libros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    obtenerLibros();
  }, []);

  const obtenerLibros = () => {
    fetch('http://44.213.189.154:8002/books', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        setLibros(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Libros</h2>
      <div id="books">
        {libros.map(book => (
          <Libro
            key={book.id}
            imagen="categoria3"
            nombre={book.titulo}
            autor={book.autor}
            texto={book.descripcion}
            precio={"S/." +book.precio}

          />
        ))}
      </div>
    </div>
  );
}

export default Libros;
