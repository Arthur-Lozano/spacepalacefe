

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/ProductPage.js";
import Product from './pages/Product.js';

import Register from "./pages/Register.js";
// import StripeContainer from "./pages/account/StripeContainer";
import Payment from "./pages/Payment";
import Cart from "./pages/cartpage.js";
import LogIn from "./pages/Login";



function App() {
  
  return (
  
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/product' component={Product} exact />
          <Route path='/login' component={LogIn} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/payment' component={Payment} exact />
          <Route path='/cart' component={Cart} exact />
        </Switch>
      </Router>
    </Provider>
   
  );
}

export default App;
