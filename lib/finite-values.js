"use strict";

/**
 * Select finite numbers from a list of values.
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function finiteValues(values) {
  return values.filter((value) => Number.isFinite(value));
};
