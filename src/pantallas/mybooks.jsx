import React, { useEffect, useState } from 'react';
import Libro from '../componentes/libro';

const MyBooks = () => {
  const userId = localStorage.getItem('id_usuario');

  const [Libros, setLibros] = useState([]);
  useEffect(() => {
    const obtenerLibros = async () => {
      fetch(`http://44.213.189.154:8002/books/usuario/${userId}`, { method: 'GET' })
        .then(response => response.json())
        .then(response => { setLibros(response); })
        .catch(error => { console.log(error); });
    };
    obtenerLibros(); 
  }, [userId]);
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
        <div>
            <h2> Mis Libros </h2>
        </div>        

        {Libros.map(book => (
        <Libro
            key     = {book.id}
            imagen  = {obtenerRutaImagen(book.id)}
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