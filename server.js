const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const { postData } = require("./Request.js");

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
app.post("/quest", (req, res) => {
  res.send(req.body);
  postData(req.body);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
