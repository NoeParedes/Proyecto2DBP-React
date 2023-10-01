import React, { useState } from 'react';
import "../estilos/recuperarpassword.css"

const Password = () => {
  const [correo, setCorreo] = useState('');

  const handlePassword = () => {
    if (correo === '') {
      alert('Por favor ingrese su correo.');
      return;
    }

    fetch(`http://127.0.0.1:5000/password/${correo}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert(`Tu contraseña es: ${data}`);
        } else {
          alert('Correo no encontrado.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
  <div className="recuperar-form">
  <h1>Recuperar Contraseña</h1>
  <label htmlFor="correo">Correo:</label>
  <input
    type="email"
    id="correo"
    name="correo"
    value={correo}
    onChange={e => setCorreo(e.target.value)}
    required
  /><br /><br />

  <button type="button" onClick={handlePassword}>Enviar por correo</button>
</div>
);
};

export default Password;