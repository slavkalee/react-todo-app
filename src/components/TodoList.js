import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={`__${item.id}`} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
