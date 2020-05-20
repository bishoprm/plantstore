export const selectNumOfItems = (id) => (state) => {
  const filteredProducts = state.cart.productIds.filter(
    (productId) => productId === id
  );

  return filteredProducts.length;
};
