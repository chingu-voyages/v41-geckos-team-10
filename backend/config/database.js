const mongoose = require("mongoose");

require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://cody:testchingu@cluster0.ssijp8i.mongodb.net/jobtracker?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));