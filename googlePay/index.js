const stripe = require("stripe")(
  `sk_test_51MqyBmBL821SCE1vgeYMdBli2fAzNamVcCLOx2zUQIagqJoNovRl6LxqfB8mC9KHPFkK9TB2D86N8dOuSmQPWk3S00VvEWtQTV`
);
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
app.listen(4000, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Confirm payment
app.post("/confirm-payment", async (req, res) => {
  try {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    const paymentConfirmation = await stripe.paymentIntents.confirm(
      paymentIntent.id
    );
    res.send(paymentConfirmation);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
