const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //stripe token is being sent here
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 dollars for 5 emails",
      //source is the authorization id
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
