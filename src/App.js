import "./styles.css";
import Counter from "./component/Counter";
import { Add, Take, Reset } from "./component/Buttons";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1);
  };

  const takeOne = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <Counter number={number} />
      <div className="button">
        <Add onClick={addOne} />
        <Take onClick={takeOne} />
        {number > 0 && <Reset onClick={reset} />}
      </div>
    </div>
  );
}
