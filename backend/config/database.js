const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_PASSWORD, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;