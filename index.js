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
  const finiteValues = finiteNumbers(values);
  if (finiteValues.length === 0) {
    return 0;
  }
  return finiteValues.reduce((total, value) => total + value / finiteValues.length, 0);
}

module.exports = { sum, average };
