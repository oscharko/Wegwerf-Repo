"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compute the median of a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
module.exports = function median(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  const sortedValues = finiteValues.slice().sort((left, right) => left - right);
  const middleIndex = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 1) {
    return sortedValues[middleIndex];
  }

  const lowerMiddle = sortedValues[middleIndex - 1];
  const upperMiddle = sortedValues[middleIndex];
  const medianValue = lowerMiddle / 2 + upperMiddle / 2;

  return Object.is(medianValue, -0) ? 0 : medianValue;
};
