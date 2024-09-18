import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-around p-4 m-4 bg-gray-200">
        <div><NavLink to={"/"} className={(isActive)=>`${isActive ? "text-orange-700" : "text-gray-700"}`}>Home</NavLink></div>
        <div><NavLink to={"/about"} className={(isActive)=>`${isActive ? "text-orange-700" : "text-gray-700"}`}>About</NavLink></div>
        <div><NavLink to={"/contact"} className={(isActive)=>`${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink></div>
      </div>
    </>
  );
}

export default Header;
