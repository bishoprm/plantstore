import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNumOfItems } from "../store/cart/selectors";

export default function NavBar() {
  const numOfItems = useSelector(selectNumOfItems);

  return (
    <div className="navBar">
      <NavLink className="link" exact to="/">
        <h1 className="title">Awesome Plant Webshop</h1>
      </NavLink>
      <NavLink className="link linkNum" to="/Cart">
        {numOfItems} products in cart
      </NavLink>
    </div>
  );
}
