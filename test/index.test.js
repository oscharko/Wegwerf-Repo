"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average, median } = require("../index.js");

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

test("average of repeated Number.MAX_VALUE stays within input bounds", () => {
  assert.equal(
    average([Number.MAX_VALUE, Number.MAX_VALUE]),
    Number.MAX_VALUE,
  );
  assert.equal(
    average([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]),
    Number.MAX_VALUE,
  );
});

test("average of opposite-signed Number.MAX_VALUE inputs is 0", () => {
  assert.equal(average([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
});

test("median of an empty list is 0", () => {
  assert.equal(median([]), 0);
});

test("median returns the middle value of an odd finite list", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median returns the mean of the two middle values of an even finite list", () => {
  assert.equal(median([9, 1, 3, 7]), 5);
});

test("median ignores non-finite entries", () => {
  assert.equal(median([1, 2, NaN, Infinity, -Infinity, 3]), 2);
});

test("median does not mutate the caller input", () => {
  const values = [3, 1, 2, Infinity];
  assert.equal(median(values), 2);
  assert.deepEqual(values, [3, 1, 2, Infinity]);
});

test("median stays numerically stable for maximum-magnitude pairs", () => {
  assert.equal(median([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
  assert.equal(median([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
});
