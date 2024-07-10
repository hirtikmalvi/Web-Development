const mongoose = require("mongoose");

const connectMongoDB = async () => {
  return mongoose
    .connect(
      "mongodb://127.0.0.1:27017/short-url"
    )
    .then(() => {
      console.log("MongoDB CONNECTED");
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

module.exports = {
  connectMongoDB,
};
