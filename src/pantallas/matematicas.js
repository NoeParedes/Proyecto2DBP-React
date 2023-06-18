import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const Matematicas = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    obtenerLibros();
  }, []);

  const obtenerLibros = () => {
    fetch('http://127.0.0.1:5000/books/1', {
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

  localStorage.setItem('id_categoria',1);


  return (
    <div>
      <h2>Matematicas</h2>
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
