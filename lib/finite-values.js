"use strict";

/**
 * Select only finite numbers from a list of values.
 * @param {number[]} values
 * @returns {number[]}
 */
function finiteValues(values) {
  return values.filter(Number.isFinite);
}

module.exports = finiteValues;
