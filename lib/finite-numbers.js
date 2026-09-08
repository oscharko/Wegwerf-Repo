"use strict";

/**
 * Select only finite numeric values.
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function finiteNumbers(values) {
  return values.filter(Number.isFinite);
};
