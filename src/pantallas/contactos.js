import React from 'react';
import "../estilos/pantalla-contactos.css"

function Contacto() {
  return (
    <div className="container">
      <div className="text-container">
        <h2>Página de Contacto</h2>
        <p>Rebecca Helferich Clarke (Harrow, 27 de agosto de 1886 – Nueva York, 13 de octubre de 1979), también conocida por su pseudónimo Anthony Trent y por su</p>
        <p>Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarnos a través de nuestro correo electrónico:</p>
        <p>libros.cheveres@g.pe</p>
        <p>Estaremos encantados de atenderte.</p>
      </div>
      <div className="image-container">
        <p>Nos puedes hubicar aqui:</p>
        <iframe
          title="Mapa UTEC"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5477503496713!2d-77.00687968564378!3d-12.121052791421362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88ad9633ac9%3A0x3a6f5be5e4642b9a!2sUniversidad%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa%20-%20UTEC!5e0!3m2!1sen!2suk!4v1622696171877!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
