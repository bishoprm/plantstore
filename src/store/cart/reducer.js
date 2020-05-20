const initialState = {
  productIds: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  const newPrice = (filteredItems, price) => {
    if (filteredItems.length !== 0) {
      return state.totalPrice - price;
    } else {
      return state.totalPrice;
    }
  };

  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        productIds: [...state.productIds, action.payload.productId],
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case "REMOVE_FROM_CART": {
      const filteredItems = state.productIds.filter((productId) => {
        return productId === action.payload.productId;
      });
      filteredItems.pop();
      console.log("filtered items:", filteredItems);
      const keepItems = state.productIds.filter((productId) => {
        return productId !== action.payload.productId;
      });
      return {
        ...state,
        productIds: [...keepItems, ...filteredItems],
        totalPrice: newPrice(filteredItems, action.payload.price),
      };
    }
    default:
      return state;
  }
};
