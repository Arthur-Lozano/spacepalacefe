// import React from "react";
// // import ReactDOM from "react-dom";
// // import axios from "axios";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe("pk_test_51JF94pHQeO4M5UcZiRVQo2v9dREeoucoliWC9PndAFb1hd8AjONxAvXsqlSwJfmmjT6Mm1Asd7ZO6NoxKlExvKu200wqiFKgBx");


// const CheckoutForm = ({ success }) => {

//   const stripe = useStripe();
//   const Elements = useElements();
//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: Elements.getElement(CardElement)

//     })
//     if (!error) {
//       console.log('=====',paymentMethod)

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
//   return <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
//     <h2>price: $10.99 </h2>
//     <img src="https://images.unsplash.com/photo-1559531717-8fdbe29ae8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80" style={{ maxWidth: "50px" }} />

// <CardElement />
//     <button type="submit" disabled={!stripe}>
//       pay
//     </button>


//   </form>

//   //  const Index = () => {
//   //     const [status, setStatus] = React.useState('ready');
//   //     if (status === "success") {
//   //       return <div>congrats on your payment sucessful!</div>


//   //     }
//   //     return (
//   //       <Elements strip={stripePromise}>
//   //         <CheckoutForm success={() => {
//   //           setStatus("success");
//   //         }} />
//   //       </Elements>
//   //     )
//   //   }
// }
// export default CheckoutForm;


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>You just bought a Suits and protective gear</h2>
       </div> 
        }
            
        </>
    )
}
