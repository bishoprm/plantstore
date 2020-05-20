export function addToCart(id) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: id },
  };
}

export function rmFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId: id },
  };
}
