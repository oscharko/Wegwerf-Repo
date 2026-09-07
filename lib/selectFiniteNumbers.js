"use strict";

/**
 * Select only finite numbers from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function selectFiniteNumbers(values) {
  return values.filter(Number.isFinite);
}

module.exports = selectFiniteNumbers;
