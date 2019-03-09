import React, { Component } from 'react';
// import uuid from 'uuid';

import HelloWorld from './components/HelloWorld/HelloWorld';
import './App.css';

class TodoApp extends Component {
  /**
   * State object with initial state
   */
  // state = {
  //   todos: [
  //     {
  //       id: uuid(),
  //       text: 'Clean the dishes',
  //       completed: false
  //     },
  //     {
  //       id: uuid(),
  //       text: 'Walk the dog',
  //       completed: false
  //     }
  //   ]
  // };

  render() {
    return (
      <div className="TodoApp">
        <HelloWorld message="hello world" />
      </div>
    );
  }
}

export default TodoApp;
