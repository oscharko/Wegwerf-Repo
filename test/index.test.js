"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average, median, range } = require("../index.js");

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

test("range returns null for empty input", () => {
  assert.equal(range([]), null);
});

test("range returns null when all entries are non-finite", () => {
  assert.equal(range([NaN, Infinity, -Infinity]), null);
});

test("range ignores non-finite entries", () => {
  assert.deepEqual(range([1, NaN, Infinity, -Infinity, 3, 2]), {
    min: 1,
    max: 3,
  });
});

test("range handles negative numbers", () => {
  assert.deepEqual(range([-5, -1, -3]), {
    min: -5,
    max: -1,
  });
});

test("range handles a single finite number", () => {
  assert.deepEqual(range([NaN, 4, Infinity]), { min: 4, max: 4 });
});
