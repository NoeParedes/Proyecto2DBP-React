import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const MyBooks = () => {
  const userId = localStorage.getItem('id_usuario');

  const [Libros, setLibros] = useState([]);
  useEffect(() => {
    const obtenerLibros = async () => {
      fetch(`http://127.0.0.1:5000/books/usuario/${userId}`, { method: 'GET' })
        .then(response => response.json())
        .then(response => { setLibros(response); })
        .catch(error => { console.log(error); });
    };
    obtenerLibros(); 
  }, [userId]);

    return (
    <div>
        <div>
            <h2> Mis Libros </h2>
        </div>        

        {Libros.map(book => (
        <Libro
            key     = {book.id}
            imagen  = "dinosaurio"
            nombre  = {book.titulo}
            autor   = {book.autor}
            texto   = {book.descripcion}
            precio  = {"S/." +book.precio}
            id      = {book.id}
            button  = "mybooks"
        />
        ))}
    </div>);
}

export default MyBooks;