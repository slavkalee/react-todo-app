import React, { useState, useCallback } from 'react';
import { Context } from './context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import TodoList from './components/TodoList';
import Button from './components/Button';
import AddTodo from './components/AddTodo';
import { addTodo, removeTodo, toggleTodo, changeTodo } from './redux/actions';
import { ITodo } from './redux/reducer/todos';
import { TodoActionTypes } from './redux/actionTypes';

const App: React.FC = () => {
  const todos = useSelector<any, ITodo[]>((state) => state.todos);
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setOpen(true), [setOpen]);

  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const change = useCallback(
    (text: string, id: number): void => {
      dispatch(changeTodo(text, id));
    },
    [dispatch]
  );

  const add = useCallback((): void => {
    if (todoTitle === '') {
      alert('The field cannot be empty!');
    } else {
      dispatch(addTodo(todoTitle));
      setOpen(false);
      setTodoTitle('');
    }
  }, [todoTitle, dispatch]);

  const remove = useCallback((id: number): TodoActionTypes => dispatch(removeTodo(id)), [dispatch]);

  const toggle = useCallback((id: number): TodoActionTypes => dispatch(toggleTodo(id)), [dispatch]);

  const completedCount = todos.filter((todo) => {
    if (todo.completed === true) {
      return true;
    }
    return false;
  });

  function getProcent(count: number, totalCount: number): number {
    const procent = (count / totalCount) * 100;
    return Math.round(procent);
  }

  const proc = getProcent(completedCount.length, todos.length);

  return (
    <Context.Provider value={{ remove, toggle, change }}>
      <div className="container">
        <Header procent={proc} />
        {todos.length ? (
          <TodoList data={todos} />
        ) : (
          <h1 className="no-todos">No todos!</h1>
        )}
        <Button openModal={openModal} />
        <AddTodo
          isOpen={isOpen}
          closeModal={closeModal}
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          add={add}
        />
      </div>
    </Context.Provider>
  );
};

export default App;
