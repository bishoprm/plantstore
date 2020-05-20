import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import Buttons from "../components/Buttons";

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
      <div className="detailContent">
        <div className="detailSide">
          <div className="imgContainerDetail">
            <img src={product.img} />
          </div>
          <p>€ {product.price}</p>
          <Buttons id={product.id} price={product.price} />
        </div>
        <section>{product.description}</section>
      </div>
    </div>
  );
}
