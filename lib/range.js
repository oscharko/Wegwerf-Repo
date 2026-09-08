"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the minimum and maximum finite values in a list of numbers.
 * @param {number[]} values
 * @returns {{ min: number, max: number } | null}
 */
module.exports = function range(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return null;
  }

  let min = finiteValues[0];
  let max = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];

    if (value < min) {
      min = value;
    } else if (value > max) {
      max = value;
    }
  }

  return { min, max };
};
