// import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

// // import { loadStripe } from '@stripe/stripe-js';
// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe("pk_test_51JF94pHQeO4M5UcZiRVQo2v9dREeoucoliWC9PndAFb1hd8AjONxAvXsqlSwJfmmjT6Mm1Asd7ZO6NoxKlExvKu200wqiFKgBx");


// const CheckoutForm = ({success}) => {
//   const stripe = useStripe();
//   const Elements = useElements();
//   const handlerSubmit = async (event) => {
//     event.preventDefault()
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: Elements.getElement(CardElement)

//     })
//     if (!error) {
//       console.log(paymentMethod)

//       // BACKEND CONNECTION
//       //const{id}= paymentMethod,
//       //   try{
//       //     const {data}= await axios.post("/api/charge",{id,amount:$})
//       // console.log(data)
//       // success();
//       //   }catch(error){
//       //     console.log(error)

//       //   }
//     }

//   }
//   return <form onsubmit={handlerSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
//     <CardElement />
//     <button type="submit" disabled={!stripe}>
//       pay
//     </button>
//   </form>
// }
// const Index = () => {
//   const [status,setStatus] = React.useState('ready');
//   if(status ==="success"){
//     return <div>congrats on your payment sucessful!</div>


//   }
//   return (
//     <Elements strip={stripePromise}>
//       <CheckoutForm success={()=>{
//         setStatus("success");
//       }} />
//     </Elements>
//   )
// }

// export default Index


import React from 'react';
import ReactDOM from 'react-dom';

import {CardElement, Elements,useStripe,useElements} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit  = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}style={{ maxWidth: "400px", margin: "0 auto" }}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
