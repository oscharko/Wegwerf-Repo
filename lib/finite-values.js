"use strict";

/**
 * Select finite numeric values from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function finiteValues(values) {
  return values.filter(Number.isFinite);
}

module.exports = finiteValues;
