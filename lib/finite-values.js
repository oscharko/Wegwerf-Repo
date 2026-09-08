"use strict";

/**
 * Select finite numeric values from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function finiteValues(values) {
  return values.filter((value) => Number.isFinite(value));
}

module.exports = finiteValues;
