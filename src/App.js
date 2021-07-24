import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Product from "./pages/Product";
import StripeContainer from "./pages/account/StripeContainer";
// import LogIn from "./pages/LogIn";
import Products from "./pages/ProductPage";
import Register from "./pages/Register";



function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    // <>
    // <div className='App'>
    //   <h1>SPACE PALACE STORE</h1>
    //   {showItem ? (
    //     <StripeContainer />
    //   ) : (
    //     <>
    //       <h3>$2499.99</h3>
    //       <img
    //         src={
    //           "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80 "
    //         }
    //         alt='Suits'
    //         style={{ maxWidth: "200px" }}
    //       />
    //       <button onClick={() => setShowItem(true)}>
    //         Purchase Yeezy's Space Boots VII: Anti-Gravity Edition"
    //       </button>
    //     </>
    //   )}
    // </div>
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/product' component={Product} exact />
        {/* <Route path='/login' component={LogIn} exact /> */}
        <Route path='/products' component={Products} exact />
        <Route path='/register' component={Register} exact />

      </Switch>
    </Router>
    // </>
  );
}

export default App;
