"use strict";

const selectFiniteNumbers = require("./lib/selectFiniteNumbers");

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

  let mean = 0;

  for (let index = 0; index < finiteValues.length; index += 1) {
    const count = index + 1;
    const value = finiteValues[index];

    mean = mean / count * index + value / count;
  }

  return Object.is(mean, -0) ? 0 : mean;

}

module.exports = { sum, average };
