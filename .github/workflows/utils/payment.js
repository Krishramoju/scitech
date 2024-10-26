const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  return await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
  });
};

module.exports = { createPaymentIntent };
