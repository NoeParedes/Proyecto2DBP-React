import React, { useEffect, useState } from 'react';
import "../estilos/mypurchases.css"

const MyPurchases = () => {
  const userId = localStorage.getItem('id_usuario');
  
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const getPurchases = async () => {
      try {
        const response = await fetch(`http://44.213.189.154:8003/compras/usuario/${userId}`, { method: 'GET' });
        const data = await response.json();
        setPurchases(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPurchases();
  }, [userId]);

  return (
    <div>
      <div>
        <h2>Mis Compras</h2>
      </div>

      <div className="purchase-items">
        {purchases.map((purchase) => (
          <div className="item" key={purchase.id}>
            <p>Autor: {purchase.title}</p>
            <p>Título: {purchase.autor}</p>
            <p>Precio: {purchase.price}</p>
            <p>Fecha: {purchase.day}</p>
            <p>Hora: {purchase.hour}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPurchases;
