import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;

  return (
    <div className="TodoItem">
      <input
        className="TodoItem__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          onComplete(todo.id);
        }}
      />

      <span className="TodoItem__text">{todo.text}</span>

      <button
        className="TodoItem__delete"
        onClick={() => {
          onDelete(props.todo.id);
        }}
      >
        🗙
      </button>
    </div>
  );
}

export default TodoItem;
