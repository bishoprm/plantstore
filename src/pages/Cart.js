import React from "react";
import { selectItems } from "../store/cart/selectors";
import { useSelector } from "react-redux";
import { selectProductsForCart } from "../store/products/selectors";
import Buttons from "../components/Buttons";

export default function Cart() {
  const items = useSelector(selectItems);
  const products = useSelector(selectProductsForCart(items));

  console.log("ITEMS:", items);
  console.log("PRODUCTS:", products);
  return (
    <div>
      <h3>Your shopping cart</h3>
      <div className="cart">
        {products.products.map((product) => (
          <p key={product.id}>
            {product.name}{" "}
            <Buttons cart={true} id={product.id} price={product.price} />
            {product.price}
            {"   "}
            {products.totalsById[product.id]}
          </p>
        ))}
        <hr></hr>
        <p>total: {products.totalsById.total}</p>
      </div>
    </div>
  );
}
