const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51LvqKgJRd2JExu5YJKB1KmbQab5rSDYu3C2IOJ0A89sck7fj2pcr4U7mJXYIODuTRt3fdMTyfJEuIYa5a6SwrRzN00Pze0i0XG");

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
  res.status(200).json({ stripeApiKey: "pk_test_51LvqKgJRd2JExu5Y92bOuImkGiQ2A42s3heshsr3jnB6jgrWYRfqWophTnh60umZkkVTHXYCILOBGcfWoM3MAoT800nrp9WC3U" });
});
