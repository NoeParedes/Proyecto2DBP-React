import { Outlet, Link } from "react-router-dom";
import '../estilos/redirecciones.css';

const Redireccion = () => {

  const usuario = localStorage.getItem('id_usuario');
  console.log(usuario);
  
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to="/inicio">     Inicio     </Link> </li>
          <li> <Link to="/categorias"> Categorías </Link> </li>
          <li> <Link to="/contactos">  Contactos  </Link> </li>
          <li> <Link to="/login">      Login      </Link> </li>
          <li> <Link to="/signup">     Signup     </Link> </li>
          <li> <Link to="/vender">     Vender     </Link> </li>
        </ul>
      </nav>
      <hr/>
      <Outlet />
    </div>
  );
}

export default Redireccion;