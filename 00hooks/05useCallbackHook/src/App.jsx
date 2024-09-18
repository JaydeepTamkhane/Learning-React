import { useCallback, useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  let [count ,setCount]=useState(0);

  const newFun=useCallback(()=>{},[])
  // the below will treat it as new function whenever the count changes
  // const newFun=useCallback((count)=>{},[count])

  // now the above function is only passed if thier is any chages to the header
  // it will catch the newFun and use it whenever called with same values
  return (
    <>

    {/* whenever the state chagnes due to change int count header also gets rerender */}
    {/* seding this fucntion treats it as new functino always whic result in rerendering of header */}
    <Header newFun={newFun}/>
    <h1>{count}</h1>
    <button onClick={()=>{
      return setCount(prev=>prev+1)
    }}>click here</button>
    </>
  )
}

export default App
