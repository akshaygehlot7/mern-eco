const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const STRIPE_API_KEY = "pk_test_51OtNppSJ5zFC5Z1nT0qyyGxJKbXmQ4JBs0s3ymWdzNigIrvsmQ3eTNMUGaLWdyyiwFw5hn1kGWuf382j4ZKNis9G00VFwwRuF4"
const STRIPE_SECRET_KEY = "sk_test_51OtNppSJ5zFC5Z1npTtQZSRbvofrPkrK5umP6wTZFaNiJw20odKW82FKQJQK5emRdGqLzvipxSwehlDvPNSAqFA700alpyYkp1"
  

const stripe = require("stripe")(STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });
  
  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: STRIPE_API_KEY });
});
