import React from "react";

const Reset = ({ onClickFunction }) => {
  const handleClick = () => {
    onClickFunction();
  };
  return (
    <button className="btn btn-danger btn-sm m-2" onClick={handleClick}>
      Reset
    </button>
  );
};

export default Reset;
