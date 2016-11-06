"use strict";

const utilModel = require("./util");

module.exports = class Puzzle {
  constructor(puzzleId, location, type, data) {
    this.puzzleId = puzzleId;
    this.location = location;
    this.type = type;
    this.data = data;
  }

  getJSON() {
    return JSON.stringify(this);
  }
}
