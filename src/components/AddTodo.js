import React, { memo } from "react";
import Modal from 'react-modal';
import Form from "./Form";



const AddTodo = memo(({ isOpen, closeModal, todoTitle, setTodoTitle, addTodo }) => {
  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <Form
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        addTodo={addTodo}
        text="ADD"
      />
    </Modal>
  );
});

export default AddTodo;
