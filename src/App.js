import React  from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Inicio from './pantallas/inicio';
import Contacto from './pantallas/contactos';
import Default from './pantallas/default';
import Signup from './pantallas/signup';
import Login from './pantallas/login';
import Categoria from './pantallas/categorias';
import Comprar from './pantallas/comprar';
import Vender from './pantallas/vender';
import Header from './componentes/header';
import MyBooks from './pantallas/mybooks';
import UpdateBook from './pantallas/updatebook';

function App() {
  return (
    <div>
      <Header/>
      <Routes>     
        <Route path="/" element={ <Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/inicio/:id_category" element={<Inicio />} />
        <Route path="/contactos" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/comprar/:idLibro" element={<Comprar />}/>
        <Route path="/mybooks" element={<MyBooks />}/>
        <Route path="/updatebook" element={<UpdateBook />}/>
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;