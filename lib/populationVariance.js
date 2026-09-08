"use strict";

const computeMean = require("./computeMean.js");
const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the population variance of a list of numbers, ignoring non-finite values.
 * @param {number[]} values
 * @returns {number}
 */
function populationVariance(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length <= 1) {
    return 0;
  }

  const mean = computeMean(finiteValues);
  let squaredDistanceSum = 0;

  for (const value of finiteValues) {
    const distance = value - mean;
    squaredDistanceSum += distance * distance;
  }

  return squaredDistanceSum / finiteValues.length;
}

module.exports = populationVariance;
