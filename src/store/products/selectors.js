export const selectProductById = (id) => (state) => {
  return state.products.find((product) => id === product.id);
};
