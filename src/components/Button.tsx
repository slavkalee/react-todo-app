import React, { memo } from 'react';

interface ButtonProps {
  openModal: () => void;
}

const Button: React.FC<ButtonProps> = memo(({ openModal }) => {
  return (
    <div className="circle-btn" data-tooltip="Add todo">
      <button className="btn-add" onClick={openModal}>
        <span className="btn-add__text">+</span>
      </button>
    </div>
  );
});

export default Button;
