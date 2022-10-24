const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://cody:testchingu@cluster0.ssijp8i.mongodb.net/jobtracker?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;