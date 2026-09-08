"use strict";

/**
 * Compute the arithmetic mean of a list of finite numbers.
 * @param {number[]} finiteValues
 * @returns {number}
 */
function computeMean(finiteValues) {
  if (finiteValues.length === 0) {
    return 0;
  }

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];

    if ((mean < 0 && value > 0) || (mean > 0 && value < 0)) {
      mean = mean + value / (index + 1) - mean / (index + 1);
    } else {
      mean = mean + (value - mean) / (index + 1);
    }
  }

  return mean;
}

module.exports = computeMean;
