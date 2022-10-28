const Job = require("../models/jobModel");

//@desc Get all jobs
//@route GET /jobs
//@access Private
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Get job by ID
//@route GET /jobs:id
//@access Private
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).send(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Create a job
//@route POST /jobs
//@access Private
const createJob = async (req, res) => {
  const {
    title,
    company,
    status,
    dateApplied,
    followUp,
    jobLink,
    location,
    contact,
    resumeSent,
    salary,
    timestamp,
  } = req.body;

  try {
    const newJob = new Job({
      title,
      company,
      status,
      dateApplied,
      followUp,
      jobLink,
      location,
      contact,
      resumeSent,
      salary,
      timestamp,
    });

    const job = await newJob.save();
    res.status(201).send(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Update a job
//@route PUT /jobs:id
//@access Private
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      res.status(400).json({ message: "Job not found" });
    }
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(`Job ${updatedJob.title} has been updated`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Update a job
//@route Delete /jobs:id
//@access Private
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      res.status(400).json({ message: "Job not found" });
    }
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).send(`Job ${job.title} has been deleted`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
