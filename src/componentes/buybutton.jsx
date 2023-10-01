import React, { useState } from 'react';
import '../estilos/buybutton.css';

const BuyButton = (props) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        if (isLoggedIn === "true") {
            window.location.href=`/comprar/${props.bookId}`;
        }
    };

    const handleMouseEnter = () => {
        if (isLoggedIn === "false") {
            setShowMessage(true);
        }
    };

    const handleMouseLeave = () => {
        setShowMessage(false);
    };

    return (
        <div>
            <button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            > Comprar </button>

            {showMessage && (
              <div className="message">
                <p> INGRESE A UNA CUENTA ANTES DE COMPRAR </p>
              </div>
            )}   
        </div>
    );
}

export default BuyButton;