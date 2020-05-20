const initialState = {
  productIds: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  const computePrice = (filteredItems, price) => {
    if (filteredItems.length !== 0) {
      return Math.round((state.totalPrice - price) * 100) / 100;
    } else {
      return state.totalPrice;
    }
  };

  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        productIds: [...state.productIds, action.payload.productId],
        totalPrice:
          Math.round((state.totalPrice + action.payload.price) * 100) / 100,
      };
    }
    case "REMOVE_FROM_CART": {
      const filteredItems = state.productIds.filter((productId) => {
        return productId === action.payload.productId;
      });
      const newPrice = computePrice(filteredItems, action.payload.price);

      filteredItems.pop();

      const keepItems = state.productIds.filter((productId) => {
        return productId !== action.payload.productId;
      });
      return {
        ...state,
        productIds: [...keepItems, ...filteredItems],
        totalPrice: newPrice,
      };
    }
    default:
      return state;
  }
};
