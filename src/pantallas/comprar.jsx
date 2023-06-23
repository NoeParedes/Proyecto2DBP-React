import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../estilos/comprar.css';


function Comprar() {
  const { idLibro } = useParams();
  /*
  if(typeof idLibro === 'undefined') {
    return (
        <div>
            <p> Libro no seleccionado: Por favor, elija un libro antes de comprar </p>
        </div>);
  }
  */

  const idUsuario = localStorage.getItem('id_usuario');

  /*
  if(typeof idUsuario === 'undefined') {
    return (
        <div>
            <p> Debe iniciar sesión antes de realizar alguna compra </p>
        </div>);
  }
  */

  const [userData, setUserData] = useState(null);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (idUsuario) {
          const response = await fetch(`http://127.0.0.1:5000/users/${idUsuario}`);
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBookData = async () => {
        try {
          if (idLibro) {
            const response = await fetch(`http://127.0.0.1:5000/books/${idLibro}`);
            const data = await response.json();
            setBookData(data);
          }
        } catch (error) {
          console.error(error);
        }
      };

    fetchUserData();
    fetchBookData();
  }, [idUsuario, idLibro]);

  return (
    <div className="shopping-box">
        <div className="box">
            <h2> INFORMACION DE COMPRA </h2>
        </div>

        {userData && (
            <div className="box">
            <h3> DATOS DEL COMPRADOR </h3>
            <p> Nombre: {userData.nombre} {userData.apellido}</p>
            <p> Email: {userData.correo} </p>
            </div>
        )}

        {bookData && (
            <div className="box">
            <h3> DATOS DEL LIBRO </h3>
            <p> Titulo: {bookData.titulo} </p>
            <p> Autor: {bookData.autor} </p>
            <p> EPrecio: {bookData.precio} </p>
            </div>
        )}

        <div className="button-box">
            <button onClick={() => { window.location.href = `/inicio` }}> CONFIRMAR </button>
            <button onClick={() => { window.location.href = `/inicio` }}> CANCELAR </button>
        </div>        
    </div>
  );
}

export default Comprar;
