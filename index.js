"use strict";

const average = require("./lib/average.js");
const median = require("./lib/median.js");
const populationVariance = require("./lib/populationVariance.js");
const range = require("./lib/range.js");

/**
 * Sum a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

module.exports = { sum, average, median, populationVariance, range };
