"use strict";

/**
 * Select only finite numeric values.
 * @param {number[]} values
 * @returns {number[]}
 */
function selectFiniteNumbers(values) {
  return values.filter(Number.isFinite);
}

module.exports = selectFiniteNumbers;
