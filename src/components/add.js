import React, { Component } from 'react';
export default class extends Component {
  constructor() {
    super()
    this.handlerClick = this.handlerClick.bind(this)
  }
  handlerClick() {
    let el = this.refs.input
    let text = el.value.trim()
    this.props.addTodos(text)
    el.value = ''
  }
  render() {
    return <div>
      <input ref='input'/>
      <button onClick={this.handlerClick}>添加</button>
    </div>
  }
}