"use strict";

const finiteNumbers = require("./lib/finite-numbers.js");

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
  const filteredValues = finiteNumbers(values);

  if (filteredValues.length === 0) {
    return 0;
  }

  const scaledTotal = filteredValues.reduce(
    (total, value) => total + value / filteredValues.length,
    0,
  );
  return scaledTotal;
}

module.exports = { sum, average };
