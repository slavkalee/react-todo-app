import React, { ChangeEvent, FormEvent, memo } from 'react';

interface FormProps {
  todoTitle: string;
  setTodoTitle: (title: string) => void;
  add: () => void;
  text: string;
}

const Form: React.FC<FormProps> = memo(({ todoTitle, setTodoTitle, add, text }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add();
  };

  return (
    <form onSubmit={submit}>
      <div className="input-container">
        <input
          type="text"
          value={todoTitle}
          onChange={handleChange}
          placeholder="Enter title..."
          autoFocus
        />
      </div>
      <div className="btn-container">
        <button>{text}</button>
      </div>
    </form>
  );
});

export default Form;
