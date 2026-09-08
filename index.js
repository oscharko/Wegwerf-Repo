"use strict";

const selectFiniteNumbers = require("./lib/selectFiniteNumbers.js");
const median = require("./lib/median.js");

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

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];

    if ((mean < 0 && value > 0) || (mean > 0 && value < 0)) {
      mean = mean + value / (index + 1) - mean / (index + 1);
    } else {
      mean = mean + (value - mean) / (index + 1);
    }
  }

  return mean;
}

module.exports = { sum, average, median };
