"use strict";

const selectFiniteNumbers = require("./selectFiniteNumbers.js");

/**
 * Compose a consistent statistical summary for finite numeric samples.
 * @param {number[]} values
 * @param {{ average: Function, median: Function, populationVariance: Function, range: Function }} statistics
 * @returns {{ count: number, sum: number, average: number, median: number, min: number | null, max: number | null, populationVariance: number }}
 */
module.exports = function summarize(values, statistics) {
  const finiteValues = selectFiniteNumbers(values);
  const total = finiteValues.reduce((runningTotal, value) => runningTotal + value, 0);
  const normalizedTotal = Object.is(total, -0) ? 0 : total;

  if (finiteValues.length === 0) {
    return {
      count: 0,
      sum: 0,
      average: 0,
      median: 0,
      min: null,
      max: null,
      populationVariance: 0,
    };
  }

  const bounds = statistics.range(values);

  return {
    count: finiteValues.length,
    sum: normalizedTotal,
    average: statistics.average(values),
    median: statistics.median(values),
    min: bounds.min,
    max: bounds.max,
    populationVariance: statistics.populationVariance(values),
  };
};
