import React from 'react';
import Item from './item';
export default function({ visibleTodos, completeTodos }) {
  function handlerClick(index) {
    return () => completeTodos(index)
  }
  return <ul>
    {visibleTodos.map((i, index) => <Item completeTodo={handlerClick(index)} {...i} key={index}></Item>)}
  </ul>
}
