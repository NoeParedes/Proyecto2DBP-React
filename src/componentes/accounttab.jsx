import React, { useEffect, useState } from 'react';
import '../estilos/accounttab.css'

const AccountTab = (props) => {
    const [showAccountTab, setShowAccountTab] = useState(false);
    const userId = props.id;
    const [userData, setUserData] = useState(null);

    const toggleAccountTab = () => {
        setShowAccountTab(!showAccountTab);
    };

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            if (userId) {
              const response = await fetch(`http://127.0.0.1:5000/users/${userId}`);
              const data = await response.json();
              setUserData(data);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUserData();
    }, [userId]);

    const logout = () => {
      localStorage.setItem('isLoggedIn','false');
      localStorage.setItem('id_usuario','0');
      window.location.href = `/inicio`;
    };

    const mybooks = () => {
      window.location.href = `/mybooks`;
    };

    const myshoppings = () => {
      window.location.href = `/mybooks`
    };

    return (
        <>
            {/* Botón "Mi cuenta" */}
            <button onClick={toggleAccountTab}> Mi cuenta </button>

            {/* Pestaña de "Mi cuenta" */}
            {showAccountTab && (
            <div className="account-tab">
              {/* Información de la cuenta */}
              <p> Nombre: {userData.nombre} {userData.apellido}</p>
              <p> Email: {userData.correo} </p>
              {/* Opciones de la cuenta */}
              <div className="center">
                <button onClick={mybooks}> Mis Libros    </button>
                <button onClick={myshoppings}> Mis Compras   </button>
                <button onClick={logout}> Cerrar Sesión </button>
              </div>  
            </div>
          )}
        </>
    );
}

export default AccountTab;