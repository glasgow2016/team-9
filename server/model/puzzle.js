"use strict";

class Puzzle {
  constructor(puzzleId, location) {
    this.puzzleId = puzzleId;
    this.location = location;
  }
  get location() {
    return this.location;
  }
}

module.exports = Puzzle;
