import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`fa-regular fa-circle-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="fa-regular fa-trash-can  Icon-delete"
      onClick={props.onDelete}>
        
      </span>
    </li>
  );
}

export { TodoItem };