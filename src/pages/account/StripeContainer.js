import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./paymentForm"

const PUBLIC_KEY = "pk_test_51JF94pHQeO4M5UcZiRVQo2v9dREeoucoliWC9PndAFb1hd8AjONxAvXsqlSwJfmmjT6Mm1Asd7ZO6NoxKlExvKu200wqiFKgBx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}