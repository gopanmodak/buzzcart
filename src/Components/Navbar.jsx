import React from "react";
import mainLogo from "../assets/main-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div>
        <img src={mainLogo} alt="logo" className="h-20"/>
      </div>
     
      <div className="flex space-x-6">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to="/new-products" >New Products</NavLink>
        <NavLink to="/blog" >Our Blog</NavLink>
      </div>
    </div>
  );
};

export default Navbar;