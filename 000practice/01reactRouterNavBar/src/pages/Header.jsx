import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
        <div>
            <div className='flex justify-around'>
                <div><NavLink to={'/'}>Home</NavLink></div>
                <div><NavLink to={'/about'}>About</NavLink></div>
                <div><NavLink to={'/contact'}>Contact</NavLink></div> {/* Updated this line */}
            </div>
        </div>
    </>
  )
}

export default Header
