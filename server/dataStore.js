"use strict";

const _ = require("lodash");
const geolib = require("geolib");

const User = require("./model/user");
const Puzzle = require("./model/puzzle");

const DISTANCE_THRESHOLD = 10;

const users = {};
const puzzles = {};

let addPuzzle = function (puzzleId, puzzleData) {
  if(_.hasIn(puzzles, puzzleId)) {
    throw new Error("Puzzle id already used");
  }

  if(!_.hasIn(puzzleData, "location")) {
    throw new Error("No location specified for puzzle");
  }

  if(!_.hasIn(puzzleData, "type")) {
    throw new Error("No type specified for puzzle");
  }

  if(!_.hasIn(puzzleData.location, "latitude") || !_.hasIn(puzzleData.location, "longitude")) {
    throw new Error("Invalid location specified for puzzle");
  }

  puzzles[puzzleId] = new Puzzle(puzzleId, puzzleData.location, puzzleData.type, puzzleData.data);
}

let registerUser = function(userData) {
  if(!_.hasIn(userData, "deviceId")) {
    throw new Error("Device id not provided");
  }

  if(_.hasIn(users, userData.deviceId)) {
    throw new Error("User already registered");
  }

  users[userData.deviceId] = new User(userData.deviceId);
}

let getUser = function(deviceId) {
  if(!_.hasIn(users, deviceId)) {
    throw new Error("Device id not found");
  }

  return users[deviceId];
}

let updateUserLocation = function(deviceId, locationObj) {
  if(!_.hasIn(users, deviceId)) {
    throw new Error("User not registered");
  }

  if(!_.hasIn(locationObj, "latitude")) {
    throw new Error("Latitude not found");
  }

  if(!_.hasIn(locationObj, "longitude")) {
    throw new Error("Longitude not found");
  }

  users[deviceId].updateLocation(locationObj.latitude, locationObj.longitude);
}

let solveNearby = function(puzzleId) {
  if(!_.hasIn(puzzles, puzzleId)) {
    throw new Error("Puzzle not found");
  }

  let puzzleLocation = puzzles[puzzleId].location;

  _.forIn(users, function(user) {
    let userLocation = user.lastKnownLocation;
    let distance = geolib.getDistance(userLocation, puzzleLocation);
    if(distance <= DISTANCE_THRESHOLD) {
      user.solvePuzzle(puzzles[puzzleId]);
    }
  });
}

module.exports = {
  getUser: getUser,
  registerUser: registerUser,
  updateUserLocation: updateUserLocation,
  addPuzzle: addPuzzle,
  solveNearby: solveNearby
}
