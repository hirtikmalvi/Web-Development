const express = require("express");
const app = express();
const path = require("path");
const PORT = 434;
const { connectMongoDB } = require("./connections");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url");

connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", staticRoute);

app.use("/url", urlRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const urlData = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(urlData.redirectURL);
});

app.listen(PORT, () => {
  console.log("SERVER CONNECTED");
});
