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
  const numbers = finiteNumbers(values);

  if (numbers.length === 0) {
    return 0;
  }

  const meanOffset = numbers[0];
  const centeredTotal = numbers.reduce((total, value) => total + (value - meanOffset), 0);

  return meanOffset + centeredTotal / numbers.length;
}

module.exports = { sum, average };
