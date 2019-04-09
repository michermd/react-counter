import React, { useState } from "react";
import IncrementButton from "./components/IncrementButton";
import Decrement from "./components/DecrementButton";
import Reset from "./components/ResetButton";

import "./styles.css";
import AddButton from "./components/AddButton";
let resultArr = [];

function App({ initialCount }) {
  const [count, setCount] = useState((initialCount = 0));

  const incrementCount = increment => {
    setCount(count + increment);
  };

  const decrementCount = decrement => {
    setCount(count - decrement);
  };

  const setInitialCount = () => {
    setCount(initialCount);
  };

  const addResutl = count => {
    resultArr.push(count);
    setInitialCount();
  };

  return (
    <div className="App">
      <h1>My React Hooks Counter</h1>
      <div className="container-fluid">
        <IncrementButton increment={1} onClickFunction={incrementCount} />
        <IncrementButton increment={10} onClickFunction={incrementCount} />
        <IncrementButton increment={100} onClickFunction={incrementCount} />
        <IncrementButton increment={1000} onClickFunction={incrementCount} />
        <Decrement decrement={1} onClickFunction={decrementCount} />
        <Decrement decrement={10} onClickFunction={decrementCount} />
        <Decrement decrement={100} onClickFunction={decrementCount} />
        <Decrement decrement={1000} onClickFunction={decrementCount} />
      </div>

      <div>
        <AddButton count={count} onClickFunction={addResutl} />
        <div>
          {resultArr.map(r => (
            <li key={Math.random()}>{r}</li>
          ))}
        </div>
      </div>
      <br />
      <Reset onClickFunction={setInitialCount} />
      <br />
      <span>{count}</span>
    </div>
  );
}

export default App;
