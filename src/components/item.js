import React from 'react';
export default function({ text, completed, addTodo }) {
  return <li onClick={addTodo} style={{
    textDecoration: completed ? 'line-through' : 'none',
    cursor: completed ? 'default' : 'pointer'
  }}>{text}</li>
}
