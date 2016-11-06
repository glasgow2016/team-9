"use strict";

const dataStore = require("./dataStore");

module.exports = function() {
  dataStore.addPuzzle(123, {
    location: {
      lat: 45,
      long: 45
    }
  });
}
