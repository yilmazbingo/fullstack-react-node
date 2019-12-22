const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "stephen"
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch(e => {
    console.error(e.message);
  });

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //The list of keys to use to sign & verify cookie values. Set cookies are always signed with keys[0], while the other keys are valid for verification, allowing for key rotation.
    keys: [keys.cookieKey]
  })
);

require("./models/User.js");
require("./services/passport.js");
//these should be loaded after middlewares

require("./routes/authRoutes")(app);

// if (process.env.NODE_ENV === "test") {
//   mongoose
//     .connect(process.env.DB, {
//       useNewUrlParser: true
//     })
//     .catch(err => {
//       console.log(err.stack);
//       process.exit(1);
//     })
//     .then(() => {
//       console.log(`connected to db in test environment`);
//     });
// } else if ((process.env.NODE_ENV = "development")) {
//   mongoose
//     .connect(process.env.DB, { useNewUrlParser: true })
//     .catch(err => {
//       console.log(err.stack);
//       process.exit(1);
//     })
//     .then(() => {
//       console.log("connected to db in development environment");
//     });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//client id :11363729904-n6utmjish490orm4kj1a70usqk9mkig1.apps.googleusercontent.com
//client secret:elH_FDj87UxHZubnmiKqTjst
