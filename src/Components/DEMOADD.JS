import React, { useState } from "react";
import Input from "./Input";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  const handleaddNumber = (e) => {
    setCount(e.target.value);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
  };

  function resetValFunc() {
    setCount("");
    setCount2("");
  }

  return (
    <div className="App">
      <h2>add numbers</h2>
      <input onChange={handleaddNumber} value={count} type="number" />
      <input onChange={handleaddNumber2} value={count2} type="number" />
      <input values={count} values2={count2} resetVal={resetValFunc} />
    </div>
  );
};

export default App;


Input.JS
import React, { useState } from "react";
import "./styles.css";

const Input = (props) => {
  const [value, setValue] = useState(0);

  const addNum = (val, val2) => {
    let a = parseInt(val, 0);
    let b = parseInt(val2, 0);
    setValue(a + b);
    console.log(a, b, value);
    props.resetVal();
  };

  return (
    <div className="App">
      <br />
      <button onClick={() => addNum(props.values, props.values2)}>
        Result
      </button>
      <br />
      <p>{value > 0 ? value : ""}</p>
    </div>
  );
};

export default Input;


INDEX.JS
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

