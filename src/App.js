import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pantallas/inicio';
import Libros from './pantallas/libros';
import Contacto from './pantallas/contactos';
import Redireccion from './pantallas/redireccion';
import Default from './pantallas/default';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Redireccion />}>
            <Route path="libros" element={<Libros />} />
           <Route path="/" element={<Inicio />} />
           <Route path="/inicio" element={<Inicio />} />
           <Route path="Contactos" element={<Contacto />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );    
}

export default App;
