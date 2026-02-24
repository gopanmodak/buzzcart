import React from "react";

import mainLogo from "../assets/main-logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

       <div>
        <img src={mainLogo} alt="logo" className="h-20 px-20"/>
       </div>
     
      <div className="flex space-x-6">
        <NavLink>Home</NavLink>
        <NavLink>All Products</NavLink>
        <NavLink>New Products</NavLink>
        <NavLink>Our Blog</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
