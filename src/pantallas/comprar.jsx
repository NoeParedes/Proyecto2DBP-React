import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../estilos/comprar.css';


function Comprar() {
  const { idLibro } = useParams();
  const idUsuario = localStorage.getItem('id_usuario');

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

  const registrarCompra = () => {
    const data = {
      user_id : userData.id,
      autor   : bookData.titulo,
      title   : bookData.autor,
      price   : bookData.precio
    };

    fetch('http://127.0.0.1:5000/compras', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(text => { if (text === 'SUCCESS') { window.location.href = '/inicio'; } })
    .catch(error => { console.error(error); });
  };

  return (
    <div className="shopping-box">
        <div className="box">
            <h2> Informacion de la compra </h2>
        </div>

        {userData && (
            <div className="box-d">
            <h3> Datos del comprador </h3>
            <p> Nombre: {userData.nombre} {userData.apellido}</p>
            <p> Email: {userData.correo} </p>
            </div>
        )}

        {bookData && (
            <div className="box-l">
            <h3> Datos del libro </h3>
            <p> Titulo: {bookData.titulo} </p>
            <p> Autor: {bookData.autor} </p>
            <p> Precio: {bookData.precio} </p>
            </div>
        )}

        <div className="button-box">
          <button onClick={ registrarCompra }> CONFIRMAR </button>
          <button onClick={() => { window.location.href = `/inicio` }}> CANCELAR </button>
        </div>        
    </div>
  );
}

export default Comprar;