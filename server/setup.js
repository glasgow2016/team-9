"use strict";

const dataStore = require("./dataStore");

module.exports = function() {
  dataStore.addPuzzle(123, {
    location: {
      latitude: 45,
      longitude: 45
    },
    type: "PI",
    data: {
      description: "Bestest thing ever"
    }
  });

  dataStore.addPuzzle(111, {
    location: {
      latitude: 50,
      longitude: 2
    },
    type: "Question",
    data: {
      question: "Which element does a kelpie spirit belongs to?",
      choices: [
        "fire",
        "air",
        "earth",
        "water"
      ],
      answer:3
    }
  });
}
