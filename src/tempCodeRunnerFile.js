import React from 'react';
import './App.css';
import Libro from './componentes/libro';
import Boton from './componentes/boton';
import { Link, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  const handleRegistroClick = () => {
    history.push('/registro');
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Libros</a></li>
            <li><a href="#">Artículos</a></li>
            <li><button onClick={handleRegistroClick}>Contacto</button></li>
          </ul>
        </nav>
      </header>

      <div className='contenedor-principal'>
        <h1>librería y apuntes</h1>
        <div className='contenedor-botones'>
          <Boton texto='Login' />
          <Boton texto='Sign Up' />
        </div>
      </div>

      <h1>HOLA mundo</h1>

      <Libro
        imagen='dinosaurio'
        nombre='pedro'
        autor='Mariano melgar'
        texto='anillo celta con materiales orgánicos y sin remaches. Los jueces evalúan su resistencia golpeando material similar al de un cráneo animal. ¿Quién ganará?'
      />
    </div>
  );
}

export default App;
