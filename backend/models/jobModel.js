//create a job schema
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: Date,
  },
  followUp: {
    type: Boolean,
    required: true,
  },
  jobLink: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  resumeSent: {
    type: Boolean, //<=======Not sure of the value type
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  favorite: { // for displaying and sorting favorite jobs
    type: Boolean,
    default: false
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
