import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoForm} from "./TodoForm";
import { CreateTodoButton } from "./CreateTodoButton";
import {Modal} from '../src/Modal'

function AppUI() {
    const { error,
            loading, searchedTodos, 
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal
        } =
    React.useContext(TodoContext);
    return (
        <React.Fragment>
        <h1 className="TodoCounter1">To Do list</h1>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </TodoList>

        {!!openModal && (
            <Modal>
            <TodoForm />
        </Modal>
        )}

        <CreateTodoButton 
        
            setOpenModal={setOpenModal}
        />
        <img
            src="http://1.bp.blogspot.com/-C1e_wa2PT9g/VO3ED0VgKjI/AAAAAAAAHPQ/fFDYu-dzHM8/s1600/kawaiibum.gif"
            alt=""
        />
        </React.Fragment>
    );
    }

export { AppUI };
