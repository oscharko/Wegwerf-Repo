"use strict";

/**
 * Select only finite numbers from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function finiteNumbers(values) {
  return values.filter(Number.isFinite);
}

module.exports = finiteNumbers;
