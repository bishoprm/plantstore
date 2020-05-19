import React from "react";
import { NavLink } from "react-router-dom";

export default function topBarCartInfo() {
  return (
    <div>
      <div align="right">
        <NavLink to="/Cart">0 products in cart</NavLink>
      </div>
      <NavLink exact to="/">
        <h1>Awesome Plant Webshop</h1>
      </NavLink>
    </div>
  );
}
