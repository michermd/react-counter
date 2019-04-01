import React from "react";

const IncrementButton = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
    <button className="btn btn-primary btn-sm m-1" onClick={handleClick}>
      +{increment}
    </button>
  );
};

export default IncrementButton;
