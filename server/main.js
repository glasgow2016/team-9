"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const dataStore = require("./dataStore");

const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello, World!");
});

app.put("/user/:deviceId/location", function(req, res) {
  try {
    dataStore.updateUserLocation(req.params.deviceId, req.body);
  } catch (err) {
    let errObj = {err:err.message};
    console.log("Err: " + JSON.stringify(errObj));
    res.send(JSON.stringify(errObj));
  }
  res.send("");
});

app.post("/user/register", function(req, res) {
  try {
    dataStore.registerUser(req.body);
    res.send(dataStore.getUser(req.body.deviceId).getJSON());
  } catch (err) {
    let errObj = {err:err.message}
    console.log("Err:" + JSON.stringify(errObj));
    res.send(JSON.stringify(errObj));
  }
});

app.get("/user/:deviceId", function(req, res) {
  try {
    res.send(dataStore.getUser(req.params.deviceId));
  }
  catch (err) {
    console.log(err);
    res.send(JSON.stringify({err:err.message}));
  }
});

app.post("/user/:deviceId/completed/:puzzleId", function(req, res) {

});


app.listen(8000, function() {
  console.log("Helix server listening on port 8000");
});
