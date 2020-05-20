export const selectNumOfItem = (id) => (state) => {
  const filteredProducts = state.cart.productIds.filter(
    (productId) => productId === id
  );

  return filteredProducts.length;
};

export const selectNumOfItems = (state) => {
  if (state.cart.productIds === []) {
    return 0;
  } else {
    return state.cart.productIds.length;
  }
};
