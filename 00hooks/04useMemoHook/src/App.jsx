import { useState } from 'react';
import './App.css';
import { useMemo } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  let [number, setNumber] = useState(0);

  function cubeofnum(num) {
    console.log("calculation done");
    return Math.pow(num, 3);
  }

  let cube = useMemo(() => {
    return cubeofnum(number);
  }, [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseFloat(e.target.value)); // Ensure the input is treated as a number
        }}
      />
      <h1>Cube of {number} is {cube}</h1>

      <button onClick={() => { setCounter(counter + 1) }}>counter++</button>

      <h1>Counter: {counter}</h1>
    </>
  );
}

export default App;
