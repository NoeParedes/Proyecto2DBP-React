import React, { useState } from 'react';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (correo === '' || password === '') {
      alert('Por favor ingrese su correo y contraseña.');
      return;
    }

    const data = {
      correo: correo,
      password: password,
    };

    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(text => {
        if (text === "SUCCESS"){
            window.location.href = '/libros';
        }
        else{
            alert("Email o contraseña incorrecta.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="button" onClick={handleLogin}>Login</button>
               
        <p><a href="/recuperarpassword">¿Olvidaste tu contraseña?</a></p>

      </form>
    </div>
  );
};

export default Login;
