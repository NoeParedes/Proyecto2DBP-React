import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pantallas/inicio';
import Libros from './pantallas/libros';
import Contacto from './pantallas/contactos';
import Redireccion from './pantallas/redireccion';
import Default from './pantallas/default';
import Signup from './pantallas/signup';
import Login from './pantallas/login';
import Password from './pantallas/recuperarpassword';
import Categoria from './pantallas/categorias';
import Matematicas from './pantallas/matematicas';
import Programacion from './pantallas/programacion';
import Comunicacion from './pantallas/comunicacion';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Redireccion />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/matematicas" element={<Matematicas />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/comunicacion" element={<Comunicacion />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
