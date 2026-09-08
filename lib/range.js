"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the minimum and maximum finite values from a list of numbers.
 * @param {number[]} values
 * @returns {{ min: number, max: number } | null}
 */
function range(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return null;
  }

  let min = finiteValues[0];
  let max = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];

    min = Math.min(min, value);
    max = Math.max(max, value);
  }

  return { min, max };
}

module.exports = range;
