import React, { useEffect, useState } from 'react';
import '../estilos/vender.css';

const UpdateBook = () => {
  const bookId = localStorage.getItem("updateBook");
    

  console.log(bookId);
  
  const [bookData, setBookData] = useState(null);
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

  const handleSubmit = e => {
    console.log("ACTUALIZAR");
  };

  return (
    <div>
      <p>Pagina de actualizar libro</p>
    </div>
  );  
};

export default UpdateBook;