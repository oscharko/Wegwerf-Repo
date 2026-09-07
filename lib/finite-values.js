"use strict";

/**
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function finiteValues(values) {
  return values.filter((value) => Number.isFinite(value));
};

