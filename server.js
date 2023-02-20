const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  postDataToCrmAdscobar,
  postToCRMFranklin,
  postDataToCrmHellLeads,
  postDataToCrmTssuccess,
  postDataToCRMVikTeam,
  postToCRMTrafficSpace,
  postDataToCrmTraffDrive,
  postDataToCRMRoyalGroup,
  postDataToCRMBigCityLife,
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
    const response = await postDataToCrmAdscobar(req.body);
    console.log(response.data);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.post("/bigcitylife", async (req, res) => {
  try {
    const response = await postDataToCRMBigCityLife(req.body);
    console.log(response.data);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: "Error" });
  }
});
app.post("/franklin", async (req, res) => {
  try {
    const response = await postToCRMFranklin(req.body);
    console.log(response);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
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
app.post("/traffdrive", async (req, res) => {
  try {
    const response = await postDataToCrmTraffDrive(req.body);
    console.log(response);
    //res.end("data edding");
    res.setHeader("Content-Type", "application/json");
    res.json(response.data);
  } catch (error) {
    res.json({ message: `Error => ${error}` });
  }
});
app.post("/tssuccess", async (req, res) => {
  try {
    const response = await postDataToCrmTssuccess(req.body);
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
app.post("/trafficSpace", async (req, res) => {
  try {
    const response = await postToCRMTrafficSpace(req.body);
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
