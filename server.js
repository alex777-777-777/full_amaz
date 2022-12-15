const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const { postData, postToCRMFranklin } = require("./Request.js");

const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ users: ["ueserOne", "ueserTwo"] });
});
app.post("/quest", async (req, res) => {
  try {
    postData(req.body);
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
});
app.post("/franklin", async (req, res) => {
  try {
    await postToCRMFranklin(req.body);
    res.status(200).json("success");
  } catch (error) {
    res.status(400).json("error mesage");
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
