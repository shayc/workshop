import React from 'react';

import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <ul className="TodoList">
      <li>
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={props.onCompleteTodo}
            onDelete={props.onDeleteTodo}
          />
        ))}
      </li>
    </ul>
  );
}

export default TodoList;
