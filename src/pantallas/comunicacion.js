import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const Comunicacion = () => {
  const [libros, setLibros] = useState([]);
  

  useEffect(() => {
    obtenerLibros();
  }, []);

  const obtenerLibros = () => {
    fetch('http://44.213.189.154:8002/books/categorias/3', {
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

  localStorage.setItem('id_categoria',3);

  return (
    <div>
      <h2>Comunicacion</h2>
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
         <div className="overlay">
            <button className="boton" onClick={() => { window.location.href = '/vender'; }}>Comunicacion</button>
          </div>
      </div>
    </div>
  );
}

export default Comunicacion;
