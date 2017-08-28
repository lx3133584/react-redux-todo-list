import React from 'react';
export default function({ text, completed, completeTodo }) {
  return <li onClick={completeTodo} style={{
    textDecoration: completed ? 'line-through' : 'none',
    cursor: completed ? 'default' : 'pointer'
  }}>{text}</li>
}
