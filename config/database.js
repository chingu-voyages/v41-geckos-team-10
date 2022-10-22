const mongoose = require("mongoose");

require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://cody:testchingu@cluster0.ssijp8i.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//create a schema for  users
const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
});

//create a model for users
const User = mongoose.model("User", userSchema);

//export the model
module.exports = User;