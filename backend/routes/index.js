const router = require("express").Router();
const passport = require("passport");
const passwordUtil = require("../lib/passwordUtil");
const User = require("../config/database");
const isAuth = require("./auth").isAuth;

/*You won't be able to redirect React client javascript with server redirects.
Try this on client:

axios.post('/register', body)
.then( (res) => {
  if (res.status === 200) { 
    window.location.href="/thankyou"; 
    // or <Navigate to="/thankyou" /> if you are using react-router / Navigate is for v6 and above
  }
}) */

//Post Routes
router.post("/register", (req, res) => {
  const { username, password } = req.body; //destructuring the body of the request
  const { hash, salt } = passwordUtil.genPassword(password); //generate a hash and salt for the password
  const newUser = new User({
    username: username,
    hash: hash,
    salt: salt,
  });

  //save the user to the database
  newUser
    .save()
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
});

//req.body includes the email and password
//req.user is the user object from the database
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "/login-success",
  })(req, res, next);
});

//Get Routes

// When you visit http://localhost:4000/login, you will see "Login Page"
router.get("/login", (req, res, next) => {
  const form =
    '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

// When you visit http://localhost:4000/register, you will see "Register Page"
router.get("/register", (req, res, next) => {
  const form =
    '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

  res.send(form);
});

/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 * Also, look up what behaviour express session has without a maxage set
 */
router.get("/protected-route", isAuth, (req, res, next) => {
  res.send("You have reached the protected route");
});

// Visiting this route logs the user out
router.get("/logout", (req, res, next) => {
  //logout the user
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/"); //redirect to the home page
  });
});

router.get("/login-success", (req, res, next) => {
  //if the user is authenticated, redirect to the protected route
  res.send("You have successfully logged in.");
});

router.get("/login-failure", (req, res, next) => {
  //if the user is not authenticated, redirect to the login page
  res.send("You entered the wrong password.");
});

module.exports = router;
