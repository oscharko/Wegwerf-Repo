"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the population variance of finite values in a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
module.exports = function populationVariance(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length <= 1) {
    return 0;
  }

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];
    mean += value / (index + 1) - mean / (index + 1);
  }

  let variance = 0;

  for (const value of finiteValues) {
    const distance = value - mean;
    variance += (distance * distance) / finiteValues.length;
  }

  return Object.is(variance, -0) ? 0 : variance;
};
