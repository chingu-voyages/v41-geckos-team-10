const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
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
  weeklyGoal: {
    type: Number,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
