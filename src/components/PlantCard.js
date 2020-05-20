import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

export default function HomePage(props) {
  return (
    <div>
      <div className="imgContainer">
        <Link to={`/ProductDetails/${props.productID}`}>
          {" "}
          <img src={props.img} alt="plant" height="20%" />
        </Link>
      </div>
      <h3>{props.name}</h3>{" "}
      {props.tags.map((tag) => {
        return <button>{tag}</button>;
      })}
      <p>€{props.price}</p>
      <Buttons cart={false} id={props.productID} price={props.price} />
    </div>
  );
}
