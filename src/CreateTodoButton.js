import React from "react";
import './CreateTodoButton.css'
function CreateTodoButton (props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState )
    }

    return (
        <button className="button1"
        onClick={onClickButton}
        ><i className="fa-solid fa-pen-clip"></i>

        Agregar al Todo</button>
        
    )
}

export {CreateTodoButton}