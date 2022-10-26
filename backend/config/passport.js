const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userModel");
const validPassword = require("../lib/passwordUtil").validPassword;

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const strategy = new LocalStrategy(customFields, (email, password, done) => {
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      const isValid = validPassword(password, user.hash, user.salt);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    })
    .catch((err) => done(err));
});

passport.use(strategy);

//Puts the user in the session
passport.serializeUser((user, done) => {
    console.log(`"serializing user: " ${user}`);
    done(null, user.id); // put the user id in the session
    });

//Gets the user from the session
passport.deserializeUser((id, done) => { // get the user id from the session
  console.log(`"deserializing user: " ${id}`);
    User.findById(id, function (err, user) { // find the user by id
        done(err, user); // return the user
    });
}
);

