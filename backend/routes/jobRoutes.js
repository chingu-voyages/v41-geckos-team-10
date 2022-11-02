const router = require("express").Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const isAuth = require("./auth").isAuth;

router.route("/jobs").get(isAuth, getJobs).post(createJob);

router.route("/jobs/:id").get(isAuth, getJobById).put(isAuth, updateJob).delete(isAuth, deleteJob);

module.exports = router;
