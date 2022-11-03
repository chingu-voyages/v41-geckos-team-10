const router = require("express").Router();
const {
  registerUser,
  loginUser,
  dashboard,
  logoutUser,
} = require("../controllers/userController");
const isAuth = require("./auth").isAuth;

//POST routes
router.post("/register", registerUser);

router.post("/login", loginUser);

//GET Routes
router.get("/dashboard", isAuth, dashboard);

router.get("/logout", logoutUser);

module.exports = router;