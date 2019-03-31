import React from "react";

const DecrementButton = ({ decrement, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(decrement);
  };
  return (
    <button className="btn btn-secondary btn-sm m-1" onClick={handleClick}>
      -{decrement}
    </button>
  );
};

export default DecrementButton;
