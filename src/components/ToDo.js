import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span style={{padding: 2}}>{ this.props.description }</span>
        <button onClick={ (index) => { this.props.deleteTodo(index) }}>Delete</button>
      </li>
    );
  }
}

export default ToDo;
