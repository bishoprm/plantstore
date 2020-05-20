const initialState = {
  productIds: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("action:", action, "state", state);
      return {
        ...state,
        productIds: [...state.productIds, action.payload.productId],
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    default:
      return state;
  }
};
