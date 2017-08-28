import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import List from '../components/list';
import Add from '../components/add';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo List</h2>
        </div>
        <div className="App-intro">
          <Add addTodo={addTodo}/>
          <List list={this.props.visibleTodos}/>
        </div>
      </div>
    );
  }
}
function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.filter),
    visibilityFilter: state.filter
  }
}

export default connect(select)(App);
