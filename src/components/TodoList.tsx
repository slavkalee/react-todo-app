import React from 'react';
import { ITodo } from '../redux/reducer/todos';
import TodoItem from './TodoItem';

interface TodoListProps {
  data: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={`__${item.id}`} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
