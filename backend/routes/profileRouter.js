const router = require("express").Router();
const {
  getProfile,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/profilesControler");
const isAuth = require("./auth").isAuth;

router.route("/profiles").get(isAuth, getProfile).post(createProfile);

router.route("/profiles/:id").get(isAuth, getProfileById).put(isAuth, updateProfile).delete(isAuth, deleteProfile);

module.exports = router;