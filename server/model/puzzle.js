"use strict";

class Puzzle {
  constructor(puzzleId, location) {
    this.puzzleId = puzzleId;
    this.location = location;
  }

  getJSON() {
    let serializable = _.cloneDeepWith(this,util.modelToIdCustomizer(this));
    return JSON.stringify(serializable);
  }
}

module.exports = Puzzle;
