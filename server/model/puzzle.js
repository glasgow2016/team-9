"use strict";

const utilModel = require("./util");

module.exports = class Puzzle {
  constructor(puzzleId, location) {
    this.puzzleId = puzzleId;
    this.location = location;
  }

  getJSON() {
    return JSON.stringify(this);
  }
}
