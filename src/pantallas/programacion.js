import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const Matematicas = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    obtenerLibros();
  }, []);

  const obtenerLibros = () => {
    fetch('http://127.0.0.1:5000/books/categorias/2', {
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

  localStorage.setItem('id_categoria',2);

  return (
    <div>
      <h2>Programacion</h2>
      <div id="books">
        {libros.map(book => (
          <Libro
            key={book.id}
            imagen="dinosaurio"
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

export default Matematicas;