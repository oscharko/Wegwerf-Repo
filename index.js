"use strict";

const selectFiniteValues = require("./lib/select-finite-values.js");

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
  const finiteValues = selectFiniteValues(values);
  const count = finiteValues.length;

  return count === 0 ? 0 : finiteValues.reduce((mean, value, index) => mean + (value - mean) / (index + 1), 0);
}

module.exports = { sum, average };
