"use strict";

const dataStore = require("./dataStore");

module.exports = function() {
  dataStore.addPuzzle(123, {
    location: {
      latitude: 45,
      longitude: 45
    }
  });
}
