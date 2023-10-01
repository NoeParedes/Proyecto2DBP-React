// import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../estilos/header.css';
import AccountTab from './accounttab';

const Header = () => {
  if (localStorage.getItem('isLoggedIn' === null)) {
    localStorage.setItem('isLoggedIn','false');
  }
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (localStorage.getItem('id_usuario' === null)) {
    localStorage.setItem('id_usuario','0');
  }
  const userId = localStorage.getItem('id_usuario');

  return (
    <div className="header">
      <nav>
        <ul>
          <li> <Link to="/inicio">     Inicio     </Link> </li>
          <li> <Link to="/categorias"> Categorías </Link> </li>
          <li> <Link to="/contactos">  Contactos  </Link> </li>
        </ul>

        <div className="account_status">
          { (isLoggedIn === 'false') ? (
            <button onClick={() => { window.location.href = `/login` }}> Iniciar sesión </button>
          ) : (
            <AccountTab id={userId} />
          )}
        </div>
      </nav>

      <hr/>
      <Outlet />
    </div>
  );
}

export default Header;