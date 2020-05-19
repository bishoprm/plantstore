export function selectProducts(state) {
  return state.products;
}

export const selectProductById = (id) => (state) => {
  return state.products.find((product) => id === product.id);
};
