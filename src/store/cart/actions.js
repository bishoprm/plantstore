export function addToCart(id, price) {
  return {
    type: "ADD_TO_CART",
    payload: { productId: id, price: price },
  };
}
