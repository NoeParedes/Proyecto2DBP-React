import React, { useState } from 'react';
import '../estilos/login.css';

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
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.text())
      .then(text => {
        if (text === 'SUCCESS') {
          window.location.href = '/libros';
        } else {
          alert('Email o contraseña incorrecta.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <label htmlFor="correo"></label>
        <input
          type="email"
          placeholder="Username or Email"
          id="correo"
          name="correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          required
        />
        <br />
        

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <p>
          ¿No tienes cuenta? <a href="/signup">Regístrate</a>
        </p>
        <p>
          <a href="/recuperarpassword">¿Olvidaste tu contraseña?</a>
        </p>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
