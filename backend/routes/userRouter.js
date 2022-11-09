const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
} = require("../controllers/userController");
const isAuth = require("./auth").isAuth;

//POST routes
router.post("/register", registerUser);

router.post("/login", loginUser);

//GET Routes
router.get("/login-success", isAuth, getUser);

router.get("/logout", logoutUser);

module.exports = router;