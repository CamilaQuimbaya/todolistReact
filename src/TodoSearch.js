import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css'


function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    return (
        <div className="container2">
            <h1 className="title1">Buscar tarea</h1>
            <input className="input" placeholder="Buscar tarea"
            value={searchValue}
            onChange={onSearchValueChange}
            />
            
        </div>
        
    )
}

export {TodoSearch};