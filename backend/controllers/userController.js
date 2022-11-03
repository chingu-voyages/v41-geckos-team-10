const passwordUtil = require("../lib/passwordUtil");
const passport = require("passport");
const User = require("../models/userModel");

const CLIENT_URL = "http://localhost:3000/";

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
        .catch((err) => console.log(err))

      res.send("Success! Please login");
    }
  });
};

//@Login with passport
//@route POST /login
//@access Public
const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({ email: user.email, id: user._id });
      });
    }
  })(req, res, next);
};

//@desc dashboard data
//@route GET /dashboard
//@access Private
const dashboard = (req, res) => {
  const reqUser = req.user;
  res.send(reqUser);
};

//@desc Logout
//@route GET /logout
//@access Public
const logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return (err);
    }
    res.send("Successfully logged out");
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  dashboard,
};
