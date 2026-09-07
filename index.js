"use strict";

const selectFiniteNumbers = require("./lib/selectFiniteNumbers.js");

/**
 * Sum a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/**
 * Average a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function average(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  return finiteValues.reduce((mean, value, index) => mean + (value - mean) / (index + 1), 0);
}

module.exports = { sum, average };
