import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectTags } from "../store/products/selectors";
import PlantCard from "../components/PlantCard";

export default function HomePage() {
  const products = useSelector(selectProducts);
  const tags = useSelector(selectTags);

  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("");
  console.log("sort by type:", typeof sortBy);

  const filteredProductsByTag = products.filter((product) => {
    if (selectedTag === "") {
      return products;
    } else if (product.tags.includes(selectedTag)) {
      return true;
    }
  });

  const sortByPrice = (plantA, plantB) => {
    return plantA.price - plantB.price;
  };

  const sortByPopularity = (plantA, plantB) => {
    return plantA.popularity - plantB.popularity;
  };

  function allProducts() {
    if (sortBy === "") {
      return (
        <>
          {filteredProductsByTag.map((product) => {
            return (
              <PlantCard
                key={product.id}
                productID={product.id}
                name={product.name}
                img={product.img}
                tags={product.tags}
                price={product.price}
                popularity={product.popularity}
              />
            );
          })}
        </>
      );
    } else if (sortBy === "price") {
      return (
        <>
          {filteredProductsByTag.sort(sortByPrice).map((product) => {
            return (
              <PlantCard
                key={product.id}
                productID={product.id}
                name={product.name}
                img={product.img}
                tags={product.tags}
                price={product.price}
                popularity={product.popularity}
              />
            );
          })}
        </>
      );
    } else if (sortBy === "popularity") {
      return (
        <>
          {filteredProductsByTag.sort(sortByPopularity).map((product) => {
            return (
              <PlantCard
                key={product.id}
                productID={product.id}
                name={product.name}
                img={product.img}
                tags={product.tags}
                price={product.price}
                popularity={product.popularity}
              />
            );
          })}
        </>
      );
    }
  }

  return (
    <div>
      <h2>Welcome to our shop</h2>
      <div className="filterSortContainer">
        <div className="filterSortBar">
          Filter by tag:{" "}
          {tags.map((tag) => {
            return (
              <span
                className="filterSortButton"
                key={Math.random()}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="filterSortBar">
          Sort by:{" "}
          <span className="filterSortButton" onClick={() => setSortBy("price")}>
            price
          </span>{" "}
          <span
            className="filterSortButton"
            onClick={() => setSortBy("popularity")}
          >
            popularity
          </span>{" "}
        </div>
      </div>
      <div className="plantContainer">{allProducts()}</div>
    </div>
  );
}
