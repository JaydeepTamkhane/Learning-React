import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState('');

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);

      // this will not work with this
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);


      // what if we call multiple set counter
      // now it increement by 3 rather than 1
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);

      
      setMessage('');
    } else {
      setMessage('Counter is at max value 20');
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage('');
    } else {
      setMessage('Counter is already at zero!');
    }
  };

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </div>
      <p>{message}</p>
    </>
  );
}

export default App;
