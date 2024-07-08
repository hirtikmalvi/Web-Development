const mongoose = require("mongoose");

//Connection Mongoose
const connectMongoDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log("Error in MongoDB", err));
};

module.exports = { connectMongoDB };
