"use strict";

/**
 * Select only finite numbers from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function finiteNumbers(values) {
  return values.filter((value) => Number.isFinite(value));
};
