"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average } = require("../index.js");

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
});

test("average of opposite-signed maximum values is 0", () => {
  assert.equal(average([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
});
