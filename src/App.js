import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/ProductPage";
import Product from "./pages/Product.js";

import Register from "./pages/Register.js";
import StripeContainer from "./pages/account/StripeContainer";

import LogIn from "./pages/Login";
import Header from "./components/Header";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/product' component={Product} exact />
          <Route path='/login' component={LogIn} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/product/:id' component={Product} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
