"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { sum, average, median, range, populationVariance, summarize } = require("../index.js");

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

test("range returns null for an empty list", () => {
  assert.equal(range([]), null);
});

test("range returns null when all values are non-finite", () => {
  assert.equal(range([NaN, Infinity, -Infinity]), null);
});

test("range ignores non-finite entries in mixed samples", () => {
  assert.deepEqual(range([NaN, 3, Infinity, -2, -Infinity, 7]), {
    min: -2,
    max: 7,
  });
});

test("range handles negative-only samples", () => {
  assert.deepEqual(range([-9, -3, -12, -4]), { min: -12, max: -3 });
});

test("range handles a single finite value", () => {
  assert.deepEqual(range([Infinity, 5, NaN]), { min: 5, max: 5 });
});

test("populationVariance returns 0 for an empty list", () => {
  assert.equal(populationVariance([]), 0);
});

test("populationVariance returns 0 for a single finite value", () => {
  assert.equal(populationVariance([Infinity, 5, NaN]), 0);
});

test("populationVariance returns the population variance for a known sample", () => {
  assert.equal(populationVariance([2, 4, 4, 4, 5, 5, 7, 9]), 4);
});

test("populationVariance ignores non-finite values", () => {
  assert.equal(populationVariance([1, NaN, 2, Infinity, 3, -Infinity]), 2 / 3);
});

test("populationVariance returns 0 when all values are non-finite", () => {
  assert.equal(populationVariance([NaN, Infinity, -Infinity]), 0);
});

test("summarize returns zeroed defaults when no finite values remain", () => {
  assert.deepEqual(summarize([NaN, Infinity, -Infinity]), {
    count: 0,
    sum: 0,
    average: 0,
    median: 0,
    min: null,
    max: null,
    populationVariance: 0,
  });
});

test("summarize ignores non-finite values in mixed samples", () => {
  assert.deepEqual(summarize([1, NaN, 2, Infinity, 3, -Infinity]), {
    count: 3,
    sum: 6,
    average: 2,
    median: 2,
    min: 1,
    max: 3,
    populationVariance: 2 / 3,
  });
});

test("summarize returns a consistent snapshot for a known sample", () => {
  const values = [2, 4, 4, 4, 5, 5, 7, 9];

  assert.deepEqual(summarize(values), {
    count: values.length,
    sum: sum(values),
    average: average(values),
    median: median(values),
    min: range(values).min,
    max: range(values).max,
    populationVariance: populationVariance(values),
  });
});

test("summarize does not mutate the caller input", () => {
  const values = [3, 1, 2, Infinity];

  assert.deepEqual(summarize(values), {
    count: 3,
    sum: 6,
    average: 2,
    median: 2,
    min: 1,
    max: 3,
    populationVariance: 2 / 3,
  });
  assert.deepEqual(values, [3, 1, 2, Infinity]);
});
