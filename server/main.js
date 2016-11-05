"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const dataStore = require("./dataStore");

const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello, World!");
})

app.post("/user/register", function(req, res) {
  try {
    dataStore.registerUser(req.body);
    res.send(datStore.getUser(req.body.deviceId).toJSON());
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

app.get("/user/data/:deviceId", function(req, res))


app.listen(8000, function() {
  console.log("Helix server listening on port 8000");
})
