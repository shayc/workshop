import React, { Component } from 'react';

import './AddTodo.css';

class AddTodo extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state.text);
  };

  render() {
    return (
      <form className="AddTodo" onSubmit={this.handleSubmit}>
        <input
          className="AddTodo__input"
          type="text"
          name="todo"
          placeholder="Enter todo..."
          onChange={this.handleChange}
        />
        <input className="AddTodo__submit" type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
