const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("You're on HOME PAGE");
});

app.get("/account", (req, res) => {
  res.send("It's ACCOUNT PAGE");
});

app.get("/about", (req, res) => {
  res.send("this is ABOUT PAGE");
});

app.get("/query", (req, res) => {
  res.send(`Query has arrived with the Username: ${req.query.username} and Password: ${req.query.password}`);
  console.log(req.query);
});

app.listen(434, () => console.log("SERVER STARTED"));
