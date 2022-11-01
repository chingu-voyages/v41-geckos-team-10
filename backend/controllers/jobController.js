const Job = require("../models/jobModel");
const User = require("../models/userModel");

//@desc Get all jobs
//@route GET /jobs
//@access Private
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id });
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

  console.log(req.user)

  const {
    companyName,
    jobTitle,
    salary,
    listingLink,
    companyLocation,
    contactName,
    contactEmail,
    contactPhone,
    trackerStatus,
    dateApplied,
    trackerResume,
    trackerTimestamp,
  } = req.body;

  try {
    const newJob = new Job({
      user: req.user._id,
      companyName: companyName,
      jobTitle: jobTitle,
      salary: salary,
      listingLink: listingLink,
      companyLocation: companyLocation,
      contactName: contactName,
      contactEmail: contactEmail,
      contactPhone: contactPhone,
      trackerStatus: trackerStatus,
      dateApplied: dateApplied,
      trackerResume: trackerResume,
      trackerTimestamp: trackerTimestamp,
    });

    const job = await newJob.save();
    res.status(200).send("Job has been tracked");
  } catch (err) {
    res.status(404).send("Error creating job");
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

    const user = await User.findById(req.user._id);

    if(!user){
      res.status(401).json({ message: "User not found" });
    } 

    if(Job.user.toString() !== req.user._id.toString()){
      res.status(401).json({ message: "Not authorized" });
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
