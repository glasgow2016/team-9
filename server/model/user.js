"use strict";

const modelUtil = require("./util");
const _ = require("lodash");

module.exports = class User {
  constructor(deviceId, username) {
    this.deviceId = deviceId;
    this.puzzlesCompleted = [];
  }

  solvePuzzle(puzzle) {
    this.puzzlesCompleted.push(puzzle);
  }

  updateLocation(lat, long) {
    this.lastKnownLocation = {latitude:lat, longitude:long};
  }

  getJSON() {
    return JSON.stringify(this);
  }

  addCompletedPuzzle(puzzle) {
    this.puzzlesCompleted.add(puzzle);
  }
}
