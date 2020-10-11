import React, { useState, useCallback } from "react";
import { Context } from "./context";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import AddTodo from "./components/AddTodo";
import { addTodo, removeTodo, toggleTodo, changeTodo } from "./redux/action";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), [setOpen]);

  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const change = useCallback(
    (text, id) => {
      dispatch(changeTodo(text, id));
    },
    [dispatch]
  );

  const add = useCallback(() => {
    if (todoTitle === "") {
      alert("The field cannot be empty!");
    } else {
      dispatch(addTodo(todoTitle));
      setOpen(false);
      setTodoTitle("");
    }
  }, [todoTitle, dispatch]);

  const remove = useCallback((id) => dispatch(removeTodo(id)), [dispatch]);

  const toggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <Context.Provider value={{ remove, toggle, change }}>
      <div className="container">
        <Header />
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
