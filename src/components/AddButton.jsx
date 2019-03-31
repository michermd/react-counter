import React from "react";

const AddButton = ({ count, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(count);
  };
  return (
    <button className="btn btn-secondary btn-sm m-1" onClick={handleClick}>
      Add
    </button>
  );
};

export default AddButton;
