const passport = require("passport");
const mongoose = require("mongoose");

const keys = require("../config/keys.js");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = mongoose.model("users");

//user is what found in the db
//we stuffed the id into the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        //this creates single model instance which is a record inside of our collection
        const user = await new User({ googleId: profile.id });
        user.save();
        done(null, user);
      }
    }
  )
);
