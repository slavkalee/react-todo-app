import React, { memo, useContext, useState } from 'react';
import { Context } from '../context';

import img from '../assets/delete.svg';

const TodoItem = memo(({ id, title, completed }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { remove, toggle, change } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    if (newTitle === '') {
      alert('The field cannot be empty!');
    } else {
      change(newTitle, id);
      setEdit(false);
    }
  };

  const handleChangeInput = (e) => setNewTitle(e.target.value);

  const handleChange = () => toggle(id);

  const getChange = () => setEdit(!edit);

  const cls = ['title-todo'];

  if (completed) {
    cls.push('completed');
  }

  return (
    <li>
      <div className="left-block">
        <div className="checkbox-container">
          <input type="checkbox" checked={completed} onChange={handleChange} />
        </div>
        {edit ? (
          <form onSubmit={submit}>
            <input
              className="input-edit"
              type="text"
              value={newTitle}
              onChange={handleChangeInput}
              autoFocus
            />
          </form>
        ) : (
          <div className={cls.join(' ')}>{title}</div>
        )}
      </div>
      <div className="right-block">
        <div>
          <button className="icon-btn" onClick={getChange}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7087 5.63126C21.0988 6.02126 21.0988 6.65125 20.7087 7.04124L18.8788 8.87125L15.1288 5.12125L16.9587 3.29124C17.1456 3.104 17.3992 2.99876 17.6638 2.99876C17.9283 2.99876 18.1819 3.104 18.3687 3.29124L20.7087 5.63126ZM2.99875 20.5013V17.4613C2.99875 17.3213 3.04874 17.2012 3.14874 17.1013L14.0587 6.19125L17.8087 9.94125L6.88876 20.8513C6.79874 20.9512 6.66876 21.0013 6.53876 21.0013H3.49875C3.21875 21.0013 2.99875 20.7812 2.99875 20.5013Z"
                fill="black"
                fillOpacity="0.54"
              />
            </svg>
          </button>
        </div>
        <div>
          <button className="icon-btn" onClick={() => remove(id)}>
            <img src={img} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
});

export default TodoItem;
