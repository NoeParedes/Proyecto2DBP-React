import React, { useEffect, useState } from 'react';
import '../estilos/vender.css';

const Vender = () => {
  const [libros, setLibros] = useState([]);
  const [nuevoLibro, setNuevoLibro] = useState({
    archivo_pdf: '',
    autor: '',
    descripcion: '',
    precio: 0,
    titulo: ''
  });

  const obtenerIdCategoria = () => {
    const idCategoria = localStorage.getItem('id_categoria');
    return idCategoria ? parseInt(idCategoria) : null;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNuevoLibro(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    const usuarioId = localStorage.getItem('id_usuario');
    const categoriaId = obtenerIdCategoria();
    const libro = {
      ...nuevoLibro,
      autor: nuevoLibro.autor || usuarioId, // Utilizar el nombre enviado o el ID del usuario como autor si el campo está vacío
      id_categoria: categoriaId,
      id_usuario: usuarioId
    };
  
    fetch('http://127.0.0.1:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(libro)
    })
      .then(response => response.json())
      .then(response => {
        console.log('Libro subido con éxito:', response);
        setNuevoLibro({
          archivo_pdf: '',
          autor: '',
          descripcion: '',
          precio: 0,
          titulo: ''
        });
      })
      .catch(error => {
        console.error('Error al subir el libro:', error);
      });
  };
  

  return (
    <div id="books" className="vender-books">
      <h2>Vender</h2>
      <div id="books">
        {libros.map(book => (
          <div key={book.id}>
            <p>Titulo: {book.titulo}</p>
            <p>Autor: {book.autor}</p>
            <p>Descripción: {book.descripcion}</p>
            <p>Precio: S/. {book.precio}</p>
          </div>
        ))}
      </div>
      <form className="vender-form"
       onSubmit={handleSubmit}>
        <br />
        <label>
          Autor:
          <input
            type="text"
            name="autor"
            value={nuevoLibro.autor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={nuevoLibro.descripcion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={nuevoLibro.precio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={nuevoLibro.titulo}
            onChange={handleChange}
          />
        </label>
        <label>
          Archivo PDF:
          <input
            type="file"
            accept=".pdf"
            name="archivo_pdf"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Subir libro</button>
      </form>
    </div>
  );
};

export default Vender;
