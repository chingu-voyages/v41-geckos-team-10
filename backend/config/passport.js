const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../config/database");
const validPassword = require("../lib/passwordUtil").validPassword;

passport.use(
  new LocalStrategy((email, password, done) => { //done is a callback function
    User.findOne({ email: email }, (err, user) => {   //check to see if the username exists
      if (err) { 
        return done(err);
      }
      if (!user) {  //if the user is not found
        return done(null, false);
      }
      const isValid = validPassword(password, user.hash, user.salt); //compare the password the user entered with the hash stored in the database
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

//Puts the user in the session
passport.serializeUser((user, done) => {
    done(null, user.id); // put the user id in the session
    });

//Gets the user from the session
passport.deserializeUser((id, done) => { // get the user id from the session
    User.findById(id, function (err, user) { // find the user by id
        done(err, user); // return the user
    });
}
);

