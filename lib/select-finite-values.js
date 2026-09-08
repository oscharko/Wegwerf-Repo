"use strict";

/**
 * Select only finite numeric values.
 * @param {number[]} values
 * @returns {number[]}
 */
function selectFiniteValues(values) {
  return values.filter(Number.isFinite);
}

module.exports = selectFiniteValues;
