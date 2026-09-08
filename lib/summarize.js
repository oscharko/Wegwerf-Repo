"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");
const computeMean = require("./computeMean.js");
const median = require("./median.js");
const range = require("./range.js");
const populationVariance = require("./populationVariance.js");

/**
 * Build a composed statistical summary for a list of numbers.
 * @param {number[]} values
 * @returns {{ count: number, sum: number, average: number, median: number, min: number | null, max: number | null, populationVariance: number }}
 */
function summarize(values) {
  const finiteValues = selectFiniteNumbers(values);
  const bounds = range(finiteValues);

  return {
    count: finiteValues.length,
    sum: finiteValues.reduce((total, value) => total + value, 0),
    average: computeMean(finiteValues),
    median: median(finiteValues),
    min: bounds ? bounds.min : null,
    max: bounds ? bounds.max : null,
    populationVariance: populationVariance(finiteValues),
  };
}

module.exports = summarize;
