import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";

export default function ProductDetails() {
  const { productID } = useParams();
  const product = useSelector(selectProductById(parseInt(productID)));

  console.log(product);

  return (
    <div className="productDetail">
      <h3>
        {product.name} <i>{product.latin}</i>
      </h3>
      {product.tags.map((tag) => (
        <span> {tag}</span>
      ))}
      <div className="imgContainerDetail">
        <img src={product.img} />
      </div>
      <p>€ {product.price}</p>
      <button>-</button>
      <span>TODO SELECT CART</span>
      <button>+</button>
      <section>{product.description}</section>
    </div>
  );
}
