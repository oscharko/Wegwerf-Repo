"use strict";

/**
 * Select only finite numeric values.
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function selectFiniteNumbers(values) {
  return values.filter(Number.isFinite);
};
