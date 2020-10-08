import React, { memo } from "react";

const Button = memo(({ openModal }) => {
  return (
    <div className="circle-btn" data-tooltip="Add todo">
      <button className="btn-add" onClick={openModal}>
        +
      </button>
    </div>
  );
});

export default Button;
