"use strict";

const median = require("./lib/median.js");
const populationVariance = require("./lib/populationVariance.js");
const range = require("./lib/range.js");
const summarizeModule = require("./lib/summarize.js");
const selectFiniteNumbers = require("./lib/selectFiniteNumbers.js");

/**
 * Sum a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/**
 * Average a list of numbers.
 * @param {number[]} values
 * @returns {number}
 */
function average(values) {
  const finiteValues = selectFiniteNumbers(values);

  if (finiteValues.length === 0) {
    return 0;
  }

  let mean = finiteValues[0];

  for (let index = 1; index < finiteValues.length; index += 1) {
    const value = finiteValues[index];
    mean += value / (index + 1) - mean / (index + 1);
  }

  return Object.is(mean, -0) ? 0 : mean;
}

/**
 * Compose a statistical summary for finite numeric samples.
 * @param {number[]} values
 * @returns {{ count: number, sum: number, average: number, median: number, min: number | null, max: number | null, populationVariance: number }}
 */
function summarize(values) {
  return summarizeModule(values, {
    average,
    median,
    populationVariance,
    range,
  });
}

module.exports = { sum, average, median, populationVariance, range, summarize };
