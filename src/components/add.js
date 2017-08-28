import React, { Component } from 'react';
export default class extends Component {
  constructor() {
    super()
    this.handlerClick = this.handlerClick.bind(this)
  }
  handlerClick() {
    let value = this.refs.input.value
    let text = value.trim()
    this.props.addTodo(text)
    value = ''
  }
  render() {
    return <div>
      <input ref='input'/>
      <button onClick={this.handlerClick}>添加</button>
    </div>
  }
}