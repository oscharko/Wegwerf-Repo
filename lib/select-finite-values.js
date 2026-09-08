"use strict";

/**
 * Select only finite numeric values from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
module.exports = function selectFiniteValues(values) {
  return values.filter(Number.isFinite);
};
