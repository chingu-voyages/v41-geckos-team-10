const passwordUtil = require("../lib/passwordUtil");
const passport = require("passport");
const User = require("../models/userModel");

//@desc Register a user
//@route Post /register
//@access Public
const registerUser = (req, res) => {
  const { email, password } = req.body;
  const { hash, salt } = passwordUtil.genPassword(password);

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.status(409);
    } else {
      const newUser = new User({
        email: email,
        hash: hash,
        salt: salt,
      });

      newUser
        .save()
        .then((user) => console.log(user))
        .catch((err) => console.log(err));

      res.send("Registration successful, please login");
    }
  });
};

//@Login with passport
//@route POST /login
//@access Public
const loginUser = (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "/login-success",
  })(req, res, next);
};

//@desc successful login
//@route GET /login-success
//@access Private
const loginSuccess = (req, res) => {
  res.status(200).send(`You have successfully logged in as ${req.user.email}`);
};

//@desc failed login
//@route GET /login-failure
//@access Public
const loginFailure = (req, res) => {
  res.sendStatus(401).send("Login failed");
};

//@desc Logout
//@route GET /logout
//@access Public
const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

module.exports = {
  registerUser,
  loginUser,
  loginSuccess,
  loginFailure,
  logout,
};
