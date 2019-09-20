import React, { Component } from 'react'
import ToDos from './components/ToDoList'
import Header from './components/layout/Header'
import Add from './components/Add'
import About from './components/About'
import './app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'feed dog',
        completed: false
      },
      {
        id: 2,
        title: 'feed worms',
        completed: false
      },
      {
        id: 3,
        title: 'water plants',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    })

  }

  addTodo = (title) => {
    let timestamp = Date.now()
    const newTodo = {
      id: timestamp,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>

        <div className='App'>
          <Header />
          <div className='container'>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Add addTodo={this.addTodo} />
                <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App
