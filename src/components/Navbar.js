import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/cart">
          Cart
        </NavLink>
        <span className="cartCount">
          <img style={{ height: "25px" }} src={cart} alt="cart" />
          {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
