import React, { useState } from 'react';
import '../estilos/login.css';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [id_usuario, setId_usuario] = useState('');  
  
  const handleLogin = () => {
    if (correo === '' || password === '') {
      alert('Por favor ingrese su correo y contraseña.');
      return;
    }
    if (id_usuario === 0){
      alert('ERROR');
      return;
    }

    const data = {
      correo: correo,
      password: password,
    };

    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', },
    })
      .then(response => response.json())
      .then(data => {
        if (data.id_usuario) {
          const UsuarioRecibido = data.id_usuario;
          setId_usuario(UsuarioRecibido);
          localStorage.setItem('id_usuario',UsuarioRecibido);
          window.location.href = '/categorias';
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

        <br/>        

        <label htmlFor="password"> </label>
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
        <p> ¿No tienes cuenta? <a href="/signup"> Regístrate </a> </p>
        <p> <a href="/recuperarpassword"> ¿Olvidaste tu contraseña? </a> </p>
        <div class="center"> <button type="button" onClick={handleLogin}> Login </button> </div>
      </form>
      
      
    </div>
  );
};

export default Login;
