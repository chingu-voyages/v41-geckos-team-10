const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: String,
  hash: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
