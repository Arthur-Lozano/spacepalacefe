import Stripe from "stripe";


const stripe = new Stripe("sk_test_51JF94pHQeO4M5UcZgXBxbBzHxu99ndc6ZtYU2s8N0pKqOg0Qivb6tvdLT68BycPLzRniaZcFQntVmZHzcRczzewm000qPNXsfT")
export default async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "mmmmmm",
      pament_method: id,
      confirm: true,
    })
    console.log(payment)
    return res.status(200).json({
      confirm: "payment sucessfuly submitted"
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message:error.message
    })

  }
}