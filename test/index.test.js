"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average, median, range, populationVariance } = require("../index.js");

test("sum adds a list of numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum of an empty list is 0", () => {
  assert.equal(sum([]), 0);
});

test("average computes the mean of a list of numbers", () => {
  assert.equal(average([1, 2, 3]), 2);
});

test("average of an empty list is 0", () => {
  assert.equal(average([]), 0);
});

test("average ignores non-finite entries", () => {
  assert.equal(average([1, 2, NaN, Infinity, -Infinity, 3]), 2);
});

test("average remains finite for repeated maximum values", () => {
  assert.equal(average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
  assert.equal(
    average([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]),
    Number.MAX_VALUE,
  );
});

test("average of opposite-signed maximum values is 0", () => {
  assert.equal(average([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
});

test("median of an empty list is 0", () => {
  assert.equal(median([]), 0);
});

test("median returns the middle value of an odd-length list", () => {
  assert.equal(median([9, 1, 5]), 5);
});

test("median returns the mean of the middle pair in an even-length list", () => {
  assert.equal(median([7, 1, 3, 9]), 5);
});

test("median ignores non-finite entries", () => {
  assert.equal(median([1, NaN, Infinity, 3, -Infinity, 2]), 2);
});

test("median does not mutate the caller's array", () => {
  const values = [4, 1, 3, 2];

  assert.equal(median(values), 2.5);
  assert.deepEqual(values, [4, 1, 3, 2]);
});

test("range returns null for an empty list", () => {
  assert.equal(range([]), null);
});

test("range ignores non-finite entries", () => {
  assert.deepEqual(range([1, NaN, Infinity, -Infinity, 3, 2]), { min: 1, max: 3 });
});

test("range returns null when no finite values remain", () => {
  assert.equal(range([NaN, Infinity, -Infinity]), null);
});

test("range handles negative values", () => {
  assert.deepEqual(range([-9, -1, -5]), { min: -9, max: -1 });
});

test("range handles a single finite value", () => {
  assert.deepEqual(range([NaN, 4, Infinity]), { min: 4, max: 4 });
});

test("populationVariance returns 0 for an empty list", () => {
  assert.equal(populationVariance([]), 0);
});

test("populationVariance returns 0 for one finite value", () => {
  assert.equal(populationVariance([NaN, 4, Infinity]), 0);
});

test("populationVariance computes the population variance for finite values", () => {
  assert.equal(populationVariance([1, 2, 3, 4]), 1.25);
});

test("populationVariance ignores non-finite entries", () => {
  assert.equal(populationVariance([1, 2, NaN, Infinity, -Infinity, 3]), 2 / 3);
});
