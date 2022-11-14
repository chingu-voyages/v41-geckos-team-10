const router = require("express").Router();
const {
  registerUser,
  createProfile,
  loginUser,
  getUser,
  getProfile,
  getProfileById,
  updateProfile,
  logoutUser,
} = require("../controllers/userController");

const isAuth = require("./auth").isAuth;

//POST routes
router.post("/register", registerUser);
router.post("/profiles", createProfile);
router.post("/login", loginUser);

//GET Routes
router.get("/login-success", isAuth, getUser);
router.get("/logout", logoutUser);

//Profile Routes
router.route("/profiles").get(isAuth, getProfile).post(createProfile)
router.route("/profiles/:id").get(isAuth, getProfileById).put(isAuth, updateProfile);


module.exports = router;