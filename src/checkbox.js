import React from "react";
import "./styles.css";

export function UseFormInputs({ id, type, name, handleClick, isChecked }) {
  return (
    <input
      className="checkers"
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};
