import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Productpage";
import Product from "./pages/Product/Product.js";

import Register from "./pages/Register.js";
// import StripeContainer from "./pages/account/StripeContainer";
// import Payment from "./pages/Payment";
import Cart from "./pages/cartpage.js";
import Login from "./pages/Login.js";

import ContactForm from "./pages/contact/contact";
import AboutUs from "./pages/AboutUs.js";
import Help from "./pages/Help.js";

import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import { useDispatch } from "react-redux";
import { initial } from "./store/user-store";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initial());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/product/:id' component={Product} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/products' component={Products} exact />
        <Route path='/register' component={Register} exact />
        {/* <Route path='/payment' component={Payment} exact /> */}
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/contact' component={ContactForm} exact />
         <Route path='/about-us' component={AboutUs} exact />
         <Route path='/help' component={Help} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
