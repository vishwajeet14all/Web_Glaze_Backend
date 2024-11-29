const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DB_URL;

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error while connecting to MongoDB:", error);
  }
};

module.exports = connectUsingMongoose;
