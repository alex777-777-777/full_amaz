const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const {
  postDataToCrmAdscobar,
  postToCRMFranklin,
  postDataToCrmHellLeads,
  postDataToCrmTssuccess,
  postDataToCRMVikTeam,
} = require("./Request.js");
const { json } = require("body-parser");

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
app.post("/adscobar", async (req, res) => {
  try {
    postDataToCrmAdscobar(req.body);
  } catch (error) {
    console.log(error);
  }
});
app.post("/franklin", (req, res) => {
  try {
    postToCRMFranklin(req.body);
    res.setHeader("Content-Type", "application/json");
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.post("/hleads", async (req, res) => {
  try {
    const response = await postDataToCrmHellLeads(req.body);
    console.log(response);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.post("/tssuccess", async (req, res) => {
  try {
    const response = await postDataToCrmTssuccess(req.body);
    console.log(response);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.post("/vikteam", async (req, res) => {
  try {
    const response = await postDataToCRMVikTeam(req.body);
    console.log(response);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


