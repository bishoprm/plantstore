import React from "react";
import { Link } from "react-router-dom";

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
      <button>Add to Cart</button>
    </div>
  );
}
