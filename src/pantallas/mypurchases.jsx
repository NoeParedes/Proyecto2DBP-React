import React, { useEffect, useState } from 'react';
import "../estilos/mypurchases.css"

const MyPurchases = () => {
    const userId = localStorage.getItem('id_usuario');
    
    const [Purchases, setPurchases] = useState([]);
    useEffect(() => {
      const getPurchases = async () => {
        fetch(`http://127.0.0.1:5000/compras/usuario/${userId}`, { method: 'GET' })
        .then(response => response.json())
        .then(response => { setPurchases(response); })
        .catch(error => { console.log(error); });
      };
      getPurchases();
    }, [userId]);

    return (
    <div>
        <div> <h2> Mis Compras </h2> </div>

        <div className="purchase-items"> 
          {Purchases.map( purchase => (
            <div className="item">
                <p> Titulo: {purchase.title} </p>
                <p> Autor:  {purchase.autor} </p>
                <p> Precio: {purchase.price} </p>
                <p> Fecha:  {purchase.day}   </p>
                <p> Hora:   {purchase.hour}  </p>
            </div>
          ))}
        </div>
        
    </div>);
}

export default MyPurchases;