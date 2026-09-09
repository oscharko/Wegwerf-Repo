"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");
const average = require("./average.js");

/**
 * Compute the population variance of a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
module.exports = function populationVariance(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length <= 1) {
    return 0;
  }

  const mean = average(finiteValues);
  let variance = 0;

  for (const value of finiteValues) {
    const distance = value - mean;
    variance += (distance * distance) / finiteValues.length;
  }

  if (Object.is(variance, -0) || variance === 0) {
    return 0;
  }

  return variance;
};
