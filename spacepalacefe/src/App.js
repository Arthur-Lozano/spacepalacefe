
// import { Elements} from "@stripe/react-stripe-js"
// import PaymentForm from "./pages/account/paymentForm";
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe("pk_test_51JF94pHQeO4M5UcZiRVQo2v9dREeoucoliWC9PndAFb1hd8AjONxAvXsqlSwJfmmjT6Mm1Asd7ZO6NoxKlExvKu200wqiFKgBx");



// function App() {
//   return (
//     <div className="App">
      
//   <Elements stripe={stripePromise}>
    
//   <PaymentForm/>
//   </Elements>
      
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';

import StripeContainer from "./pages/account/StripeContainer"


 function App() {
   const [showItem, setShowItem] = useState(false)
   return (
     <div className="App">
      <h1>SPACE PALACE STORE</h1>
       {showItem ? <StripeContainer/> : <> <h3>$195.00</h3> <img src={"./assets/Suits.png"} alt="Suits" />
      <button onClick={() => setShowItem(true)}>Purchase Suits and protective gear</button></>}
     </div>
   );
 }

export default App;
