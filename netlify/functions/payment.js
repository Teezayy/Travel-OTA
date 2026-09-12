import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export async function handler() {
  const intent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "usd"
  });

  return {
    statusCode: 200,
    body: JSON.stringify(intent)
  };
}
