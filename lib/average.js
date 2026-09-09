"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Average a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
module.exports = function average(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];
    mean += value / (index + 1) - mean / (index + 1);
  }

  return Object.is(mean, -0) ? 0 : mean;
};
