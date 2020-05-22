import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

export default function HomePage(props) {
  return (
    <div className="plantCard">
      <div className="imgContainer">
        <Link to={`/ProductDetails/${props.productID}`}>
          {" "}
          <img src={props.img} alt="plant" height="20%" />
        </Link>
      </div>
      <h3>{props.name}</h3>{" "}
      {props.tags.map((tag) => {
        return <span className="tagOnPlantCard">{tag}</span>;
      })}
      <span className="tagOnPlantCard">#{props.popularity} in popularity</span>
      <p>€{props.price}</p>
      <Buttons id={props.productID} price={props.price} />
    </div>
  );
}
