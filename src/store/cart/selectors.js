export const selectNumOfItem = (id) => (state) => {
  const filteredProducts = state.cart.productIds.filter(
    (productId) => productId === id
  );

  return filteredProducts.length;
};

export const selectNumOfItems = (state) => {
  return state.cart.productIds.length;
};

export const selectItems = (state) => {
  return state.cart.productIds;
};

export const selectTotal = (state) => {
  return state.cart.totalPrice;
};
