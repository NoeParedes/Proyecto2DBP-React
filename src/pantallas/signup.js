import React, { useState } from 'react';
import '../estilos/signup.css';

const Signup = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (nombre === '' || apellido === '' || username === '' || correo === '' || password === '') {
      alert('Por favor rellene todos los campos.');
      return;
    }

    const data = {
      nombre: nombre,
      apellido: apellido,
      username: username,
      correo: correo,
      password: password,
    };

    fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.text())  
      .then(text => {
        if (text === 'SUCCESS') {
          window.location.href = '/login';
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="containerr">
      <h2>Sign Up</h2>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="nombre"
              id='nombre'
              placeholder="First Name"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="apellido"
              id='apellido'
              placeholder="Last Name"
              value={apellido}
              onChange={e => setApellido(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="username"
              id='username'
              placeholder="Username"
              className="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="email"
              id='correo'
              name="correo"
              placeholder="Email"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="password"
              name="password"
              id='password'
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
      </form>
      <p>
        Already have an account? <a className="login-link" href="/login">Log in</a>
      </p>
      <button type='button' onClick={signup}>Sign Up</button>
    </div>
  );
};

export default Signup;
