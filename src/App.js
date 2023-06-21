import React  from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pantallas/inicio';
import Contacto from './pantallas/contactos';
import Redireccion from './pantallas/redireccion';
import Default from './pantallas/default';
import Signup from './pantallas/signup';
import Login from './pantallas/login';
import Categoria from './pantallas/categorias';
import Vender from './pantallas/vender';


function App() {
  return (
    <div>
      <Redireccion />
      <Routes>     
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/inicio/:id_category" element={<Inicio />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;