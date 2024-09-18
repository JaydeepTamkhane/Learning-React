import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [count,setCount]=useState(0);


  // if we do not mentino any dependecies it will execute for nay state change
  // here if 0 to 1 change of count is stae change so it will execute
  // then for 1 to 2 change then goes on
  // if we mention [] empty dependencies then it will execute for only one state change and then stop 
  // example o to 1 then stop
  useEffect(()=>{
    setTimeout(() => {
      setCount((prev)=>{
        return prev+1;
      })
    }, 1000);
  },[count])

  return (
    <>
    <h1>the count is {count}</h1>
    </>
  )
}

export default App
