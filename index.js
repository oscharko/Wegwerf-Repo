"use strict";

const finiteValues = require("./lib/finite-values.js");

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
  const filteredValues = finiteValues(values);

  if (filteredValues.length === 0) {
    return 0;
  }

  const meanOffset = filteredValues[0];
  const normalizedTotal = filteredValues.reduce(
    (total, value) => total + (value - meanOffset),
    0,
  );

  return meanOffset + normalizedTotal / filteredValues.length;
}

module.exports = { sum, average };
