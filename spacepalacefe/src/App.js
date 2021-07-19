// import Index from "./pages/checkout";
import { Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./pages/checkout";
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51JF94pHQeO4M5UcZiRVQo2v9dREeoucoliWC9PndAFb1hd8AjONxAvXsqlSwJfmmjT6Mm1Asd7ZO6NoxKlExvKu200wqiFKgBx");



function App() {
  return (
    <div className="App">
      
      <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
      
    </div>
  );
}

export default App;
