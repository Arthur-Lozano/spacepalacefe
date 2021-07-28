import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Productpage";
import Product from "./pages/Product.js";

import Register from "./pages/Register.js";
// import StripeContainer from "./pages/account/StripeContainer";
import Payment from "./pages/Payment";
import Cart from "./pages/cartpage.js";
import Login from "./pages/Login.js";

import ContactForm from "./pages/contact/contact";

import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/product/:id' component={Product} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/payment' component={Payment} exact />
          <Route path='/cart' component={Cart} exact />
          <Route path='/contact' component={ContactForm} exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
