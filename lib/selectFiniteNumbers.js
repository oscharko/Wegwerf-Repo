"use strict";

/**
 * Select only finite numeric values from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function selectFiniteNumbers(values) {
  return values.filter((value) => Number.isFinite(value));
}

module.exports = selectFiniteNumbers;
