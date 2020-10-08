import React, { memo } from "react";

const Form = memo(({ todoTitle, setTodoTitle, addTodo, text }) => {
  const handleChange = (e) => setTodoTitle(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    addTodo()
  }

  return (
    <form onSubmit={submit}>
      <div className="input-container">
        <input
          type="text"
          value={todoTitle}
          onChange={handleChange}
          placeholder="Add to do..."
        />
      </div>
      <div className="btn-container">
  <button>{text}</button>
      </div>
    </form>
  );
})

export default Form;
