//create a job schema
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: "none",
  },
  listingLink: {
    type: String,
    required: true,
    default: "none",
  },
  companyLocation: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    default: "none",
  },
  contactEmail: {
    type: String,
    default: "none",
  },
  contactPhone: {
    type: String,
    default: "none",
  },
  trackerStatus: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: String,
  },
  trackerResume: {
    type: String,
    default: "none",
  },
  trackerTimestamp: {
    type: String,
  },
  followUp: {
    type: Boolean,
    default: false,
  },
  favorite: { // for displaying and sorting favorite jobs
    type: Boolean,
    default: false
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
