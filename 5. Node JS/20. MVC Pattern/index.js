const express = require("express");
const app = express();
const PORT = 434;
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const logReqRes = require("./middlewares/index");

connectMongoDB("mongodb://127.0.0.1:27017/getting-started-with-mongoDB");

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("./log.txt"));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`SERVER CONNECTED AT PORT ${PORT}`);
});
