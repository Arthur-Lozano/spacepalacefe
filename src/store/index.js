import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./cart-store";
import productsReducer from "./product-store";
import userReducer from "./user-store";

import thunk from "./middleware/thunk";

const reducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
