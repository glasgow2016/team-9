const _ = require("lodash/core");
const User = require("./model/user");

const users = {};

let registerUser = function(userData) {
  if(!_.hasIn(userData, "deviceId")) {
    throw new Error("Device id not provided");
  }

  if(_.hasIn(users, userdata.deviceId)) {
    throw new Error("User already registered");
  }

  if(!_.hasIn(userData, "username")) {
    throw new Error("Username not provided");
  }

  users[userData.deviceId] = new User(userData.deviceId, userData.username);
}
