import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../store/products/selectors";
import PlantCard from "../components/PlantCard";

export default function HomePage() {
  const products = useSelector(selectProducts);
  console.log("selectProducts:", products);

  return (
    <div>
      <h2>Welcome to our shop</h2>
      {products.map((product) => {
        return (
          <PlantCard
            key={product.id}
            productID={product.id}
            name={product.name}
            img={product.img}
            tags={product.tags}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
