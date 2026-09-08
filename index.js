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
  const valuesToAverage = finiteValues(values);

  if (valuesToAverage.length === 0) {
    return 0;
  }

  const scaledTotal = valuesToAverage.reduce((total, value) => total + value / valuesToAverage.length, 0);

  return scaledTotal;
}

module.exports = { sum, average };
