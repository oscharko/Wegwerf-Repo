"use strict";

/**
 * Select only finite numeric values from a list.
 * @param {number[]} values
 * @returns {number[]}
 */
function selectFiniteValues(values) {
  return values.filter(Number.isFinite);
}

module.exports = selectFiniteValues;
