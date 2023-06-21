import { Outlet, Link } from "react-router-dom";
import '../estilos/redirecciones.css';

const Redireccion = () => {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to="/inicio">Inicio</Link> </li>
          <li> <Link to="/categorias"> Categorías </Link> </li>
          <li> <Link to="/contactos"> Contactos </Link> </li>
          <li> <Link to="/login"> Login </Link> </li>
          <li> <Link to="/signup"> Signup </Link> </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Redireccion;