"use strict";

const User = require("./user");

let modelToIdCustomizer = function(rootObject) {
  let firstRoot = false;
  return function(value) {
    if (!firstRoot && value != rootObject) {
      if (value instanceof User.constructor) {
        return value.deviceId;
      }
      if (value instanceof Puzzle.constructor) {
        return value.puzzleId;
      }
    }
    else {
      firstRoot = true;
    }
    return value;
  }
}

module.exports = {
  modelToIdCustomizer: modelToIdCustomizer
}
