import React, { useEffect, useState, useCallback } from "react";
import { Context } from "./context";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todo-data")) {
      setTodos(JSON.parse(localStorage.getItem("todo-data")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-data", JSON.stringify(todos));
  }, [todos]);

  const openModal = useCallback(() => setOpen(true), [setOpen]);

  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const changeTodo = useCallback(
    (text, id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = text;
          }
          return todo;
        })
      );
    },
    [todos]
  );

  const addTodo = useCallback(() => {
    if (todoTitle === "") {
      alert("The field cannot be empty!");
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setOpen(false);
      setTodoTitle("");
    }
  }, [todoTitle, todos]);

  const removeTodo = useCallback(
    (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    [todos]
  );

  const toggleTodo = useCallback(
    (id) =>
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      ),
    [todos]
  );

  return (
    <Context.Provider value={{ removeTodo, toggleTodo, changeTodo }}>
      <div className="container">
        <Header />
        {todos.length ? <TodoList data={todos} /> : <h1 className="no-todos">No todos!</h1>}
        <Button openModal={openModal} />
        <AddTodo
          isOpen={isOpen}
          closeModal={closeModal}
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          addTodo={addTodo}
        />
      </div>
    </Context.Provider>
  );
};

export default App;
