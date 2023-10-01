import '../estilos/buybutton.css';

const UpdateBookButton = (props) => {
    const handleClick = () => {
        localStorage.setItem("updateBook",props.bookId)
        window.location.href=`/updatebook`;
    };

    return (
        <div>
            <button onClick={handleClick}> Actualizar </button>  
        </div>
    );
}

export default UpdateBookButton;