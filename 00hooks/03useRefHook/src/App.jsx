import { useState } from "react";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

// function App() {
//   let [value, setValue] = useState(0);

//   // this are similar to the state variable but does not 
//   // trigger re render of ui 
//   // does not cause state chage
//   // therefore the below code does not go in infinite loop
//   let count = useRef(0);
//   useEffect(() => {
//     count.current += 1;
//   });
//   return (
//     <>
//       <button onClick={() => setValue((prev) => prev + 1)}>+</button>
//       <h1>{value}</h1>
//       <button onClick={() => setValue((prev) => prev - 1)}>-</button>
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }


function App() {
  let inputText=useRef();

  const display=()=>{
    console.log(inputText.current.value);
    inputText.current.style.color="red"
  }
  return (
    <>
      <input type="text" ref={inputText} />
      <button onClick={display}>click</button>
    </>
  );
}

export default App;
