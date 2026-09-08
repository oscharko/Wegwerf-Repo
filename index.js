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

  let mean = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    mean += (numbers[index] - mean) / (index + 1);
  }

  return mean;
}

module.exports = { sum, average };
