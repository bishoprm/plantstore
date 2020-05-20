export function addToCart(id, price) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: id, price: price },
  };
}

export function rmFromCart(id, price) {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId: id, price: price },
  };
}
