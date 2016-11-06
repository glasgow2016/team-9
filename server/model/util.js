"use strict";

const _ = require("lodash");

const User = require("./user");
const Puzzle = require("./puzzle");

let modelToIdCustomizer = function modelToIdCustomizer(rootObject) {
  return function customizer(value) {
    console.log(JSON.stringify(value));
    console.log(typeof value);
    // if (!Object.is(value, rootObject)) {
    //   if (value instanceof User.constructor) {
    //     console.log("ParsingUser");
    //     return value.deviceId;
    //   }
    //   if (value instanceof Puzzle.constructor) {
    //     console.log("Puzzle parsing");
    //     return value.puzzleId;
    //   }
    // }
    return value;
  }
}

module.exports = {
  modelToIdCustomizer: modelToIdCustomizer
}
