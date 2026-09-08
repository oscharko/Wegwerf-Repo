"use strict";

const selectFiniteNumbers = require("./lib/selectFiniteNumbers.js");
const median = require("./lib/median.js");
const range = require("./lib/range.js");
const summarize = require("./lib/summarize.js");
const computeMean = require("./lib/computeMean.js");
const populationVariance = require("./lib/populationVariance.js");

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

  return computeMean(finiteValues);
}

module.exports = { sum, average, median, range, populationVariance, summarize };
