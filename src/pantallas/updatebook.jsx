import React, { useEffect, useState } from 'react';
import '../estilos/updatebook.css';

const UpdateBook = () => {
  const bookId = localStorage.getItem("updateBook");
  var [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        if (bookId) {
          const response = await fetch(`http://127.0.0.1:5000/books/${bookId}`);
          const data = await response.json();
          setBookData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookData();
  }, [bookId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`http://127.0.0.1:5000/books/${bookData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      window.location.href = '/mybooks';
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBook = async () => {
    try {
      await fetch(`http://127.0.0.1:5000/books/${bookData.id}`, {
        method: 'DELETE'
      });
      window.location.href = '/mybooks';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {bookData && (
        <form className='update-book-form' onSubmit={handleFormSubmit}>
          <div className='title'>
            <h2> Datos del libro </h2>
          </div>

          <div className='information'>
            <label htmlFor="titulo"> <p> Título: </p>
              <input type="text" id="titulo" name="titulo" value={bookData.titulo} onChange={handleInputChange} required />
            </label>

            <label htmlFor="descripcion"> <p> Descripcion: </p>
              <textarea id="descripcion" name="descripcion" value={bookData.descripcion} onChange={handleInputChange} required />
            </label>

            <label htmlFor="precio"> <p> Precio: </p>
              <input type="number" id="precio" name="precio" value={bookData.precio} onChange={handleInputChange} required />
            </label>
          

          <div className="buttons">
            <button type="button"> Actualizar </button>
            <button type="button" onClick={handleDeleteBook}> Eliminar </button>
            <button type="button" onClick={() => { window.location.href = `/mybooks` }}> Cancelar </button>
          </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;
