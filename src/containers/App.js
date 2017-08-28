import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import List from '../containers/List';
import Add from '../containers/Add';
import Footer from '../containers/Footer';
import { addTodo, completeTodo } from '../actions'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo List</h2>
        </div>
        <div className="App-intro">
          <Add />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(App);
