import React from 'react';
import Item from './item';
export default function({ list, addTodo }) {
  return <ul>
    {list.map(i => <Item addTodo={addTodo} {...i}></Item>)}
  </ul>
}
