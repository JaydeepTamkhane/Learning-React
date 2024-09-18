import { useState } from "react";
import "./App.css";

// function App() {
//   let [color,setColor]=useState("Red")
//   const makeColorBlue=()=>{
//     setColor("Blue")
//   }
//   return (
//     <>
//     <h1>my favorite color is {color}</h1>
//     <button onClick={makeColorBlue}>Blue</button>
//     </>
//   )
// }

// function App() {
//   let [car, setCar] = useState({
//     brand: "ferrari",
//     color: "Red",
//     model: "roma",
//     year: "2018",
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <h2>
//         It is a {car.color} {car.model} from {car.year}
//       </h2>
//       <button
//         onClick={() => {
//           setCar((prev) => {
//             return { ...prev, color: "blue" };
//           });
//         }}
//       >
//         Click to changee color
//       </button>
//     </>
//   );
// }

function App() {
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={increase}>increase</button>
    </>
  );
}

export default App;
