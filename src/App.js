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
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Redireccion />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/incio" element={<Inicio />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
