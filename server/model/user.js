"use strict";

const util = require("./util");
const _ = require("lodash");

class User {
  constructor(deviceId, username) {
    this.deviceId = deviceId;
    this.username = username;
    this.puzzlesCompleted = [];
  }

  solvePuzzle(puzzle) {
    this.puzzlesCompleted.push(puzzle);
  }

  updateLocation(lat, long) {
    this.lastKnownLocation = {lat:lat, long:long};
  }

  getJSON() {
    let serializable = _.cloneDeepWith(this,util.modelToIdCustomizer(this));
    return JSON.stringify(serializable);
  }

  addCompletedPuzzle(puzzle) {
    this.puzzlesCompleted.add(puzzle);
  }
}

module.exports = User
