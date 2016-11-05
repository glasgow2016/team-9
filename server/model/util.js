"use strict";

const User = require("./user");

let modelToIdCustomizer = function(value) {
  if(value instanceof User.constructor) {
    return value.deviceId;
  }
  return value;
}

module.exports = {
  modelToIdCustomizer: modelToIdCustomizer
}
