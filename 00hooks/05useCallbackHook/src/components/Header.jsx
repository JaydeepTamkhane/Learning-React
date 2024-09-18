import React from 'react'

const Header = () => {
    console.log("header rendered");
    
  return (
    <div>
        <h2>header</h2>
    </div>
  )
}


// stop rerenderinng the Header component due to change in stae of other 
// component it will  get rendered only when its own state gets rendered
export default React.memo(Header) 