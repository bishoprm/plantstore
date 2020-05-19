import { combineReducers } from "redux";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  // etc.
});

export default reducer;
