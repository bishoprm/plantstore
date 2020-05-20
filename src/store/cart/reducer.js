const initialState = {
  productIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        productIds: [...state.productIds, action.payload.productId],
      };
    }
    case "REMOVE_FROM_CART": {
      const filteredItems = state.productIds.filter((productId) => {
        return productId === action.payload.productId;
      });
      filteredItems.pop();

      const keepItems = state.productIds.filter((productId) => {
        return productId !== action.payload.productId;
      });
      return {
        ...state,
        productIds: [...keepItems, ...filteredItems],
      };
    }
    default:
      return state;
  }
};
