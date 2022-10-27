const router = require("express").Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

//Get Routes
router.get("/jobs", getJobs);

router.get("/jobs/:id", getJobById);

//post routes
router.post("/jobs", createJob);

//put routes
router.put("/jobs/:id", updateJob);

//delete routes
router.delete("/jobs/:id", deleteJob);

module.exports = router;
