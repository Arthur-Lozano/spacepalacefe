import { createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./cart.js";
// import categoriesReducer from "./categories.js";
import productsReducer from "./productpage.js";
// import thunk from './middleware/thunk.js';
// import loggerMiddleware from './middleware/logger.js';


// combine reducer .... products & categories  are 
const reducers = combineReducers({
  // categories:categoriesReducer,
  products:productsReducer,
  // categories:categoriesReducer,
  cart:CartReducer
})

const store =()=>{
  return createStore(reducers,composeWithDevTools());
}
//   return createStore(reducers,composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)));
// }

export default store;