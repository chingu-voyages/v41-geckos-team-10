const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //create a reference to the user
    required: true, //make sure the user is logged in
    ref: "User", //reference the user model
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  weeklyAppGoal: {
    type: Number,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  resumesUploaded: {
    type: Number,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;