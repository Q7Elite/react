import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
  };

  const removeValue = () => {
    setCounter((prevcounter) => prevcounter - 1);
    setCounter((prevcounter) => prevcounter - 1);
    setCounter((prevcounter) => prevcounter - 1);
    setCounter((prevcounter) => prevcounter - 1);
  };
  return (
    <>
      <h1>React course with Karichu {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
