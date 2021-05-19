import React, { memo } from "react";
import Modal from 'react-modal';
import Form from "./Form";

interface AddTodoProps {
  isOpen: any;
  closeModal: () => void;
  todoTitle: string;
  setTodoTitle: (title: string) => void;
  add: () => void;
}

const AddTodo: React.FC<AddTodoProps> = memo(({ isOpen, closeModal, todoTitle, setTodoTitle, add }) => {
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
        add={add}
        text="ADD"
      />
    </Modal>
  );
});

export default AddTodo;
