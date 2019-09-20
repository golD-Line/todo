import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'

class ToDos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem key = {todo.id} todo = {todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo}  />
      ))
  }
}

//Prop Types
ToDos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default ToDos
