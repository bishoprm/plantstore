export function selectProducts(state) {
  return state.products;
}

export const selectProductById = (id) => (state) => {
  return state.products.find((product) => id === product.id);
};

export function selectTags(state) {
  const allTags = state.products.reduce((tags, product) => {
    // console.log("tags:", tags);
    // console.log("product", product);
    return [...tags, ...product.tags];
  }, []);
  // console.log("ALL TAGS", allTags);
  const tags = allTags.reduce((tags, tag) => {
    // console.log("tags:", tags);
    // console.log("(current) tag:", tag);
    if (tags.includes(tag)) {
      return tags;
    } else {
      return [...tags, tag];
    }
  }, []);
  // console.log("what is tags?", tags);
  return tags;
}
