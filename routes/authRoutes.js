const express = require("express");
const app = express();
const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  //inside the url there is  a code
  //when we send this request off to passport, in this case passport will see code is inside the url, it is going to say the user clearly is not attempting to be authenticated for the first time
  //they are attemting to turn that code into an actual profile.
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    console.log(req);
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
