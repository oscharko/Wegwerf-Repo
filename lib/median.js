"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the median of a list of numbers, ignoring non-finite values.
 * @param {number[]} values
 * @returns {number}
 */
function median(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  const sortedValues = [...finiteValues].sort((left, right) => left - right);
  const middleIndex = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 1) {
    return sortedValues[middleIndex];
  }

  const leftMiddle = sortedValues[middleIndex - 1];
  const rightMiddle = sortedValues[middleIndex];

  return leftMiddle / 2 + rightMiddle / 2;
}

module.exports = median;
