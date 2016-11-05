"use strict";

const _ = require("lodash");
const User = require("./model/user");

const users = {};

let registerUser = function(userData) {
  if(!_.hasIn(userData, "deviceId")) {
    throw new Error("Device id not provided");
  }

  if(_.hasIn(users, userData.deviceId)) {
    throw new Error("User already registered");
  }

  if(!_.hasIn(userData, "username")) {
    throw new Error("Username not provided");
  }

  users[userData.deviceId] = new User(userData.deviceId, userData.username);
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

  if(!_.hasIn(locationObj, "lat")) {
    throw new Error("Latitude not found");
  }

  if(!_.hasIn(locationObj, "long")) {
    throw new Error("Longitude not found");
  }

  users[deviceId].updateLocation(locationObj.lat, locationObj.long);
}

module.exports = {
  getUser: getUser,
  registerUser: registerUser,
  updateUserLocation: updateUserLocation
}
