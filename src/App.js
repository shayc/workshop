import React, { Component } from 'react';
import uuid from 'uuid';

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        text: 'Clean the dishes',
        completed: false
      },
      {
        id: uuid(),
        text: 'Walk the dog',
        completed: false
      }
    ]
  };

  handleAddTodo = todo => {
    this.setState({ todos: [...this.state.todos, { id: uuid(), text: todo }] });
  };

  handleDeleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  };

  handleCompleteTodo = id => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({ todos });
  };

  render() {
    return (
      <div className="TodoApp">
        <AddTodo onAdd={this.handleAddTodo} />
        <TodoList
          todos={this.state.todos}
          onDeleteTodo={this.handleDeleteTodo}
          onCompleteTodo={this.handleCompleteTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
