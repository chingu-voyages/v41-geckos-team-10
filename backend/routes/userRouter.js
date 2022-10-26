const router = require("express").Router();
const {
  registerUser,
  loginUser,
  loginSuccess,
  loginFailure,
  logout,
} = require("../controllers/userController");
const isAuth = require("./auth").isAuth;

//POST routes
router.post("/register", registerUser);

router.post("/login", loginUser);

//GET Routes
router.get("/login-success", isAuth, loginSuccess);

router.get("/login-failure", loginFailure);

router.get("/logout", logout);

module.exports = router;
