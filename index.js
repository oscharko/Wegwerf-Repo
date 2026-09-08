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

  if (finiteValues.length === 0) {
    return 0;
  }

  let total = 0;

  for (const value of finiteValues) {
    total += value / finiteValues.length;
  }

  return total;
}

module.exports = { sum, average };
