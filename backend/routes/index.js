const router = require("express").Router();
const passport = require("passport");
const passwordUtil = require("../lib/passwordUtil");
const User = require("../models/userModel");
const isAuth = require("./auth").isAuth;

//Post Routes
router.post("/register", (req, res) => {
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
router.get("/login-success", (req, res, next) => {
  res.status(200).send("Login successful");
});

router.get("/login-failure", (req, res, next) => {
  res.sendStatus(401);
});

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/"); //redirect to the home page
  });
});

module.exports = router;
