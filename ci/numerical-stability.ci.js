"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const api = require("../index.js");

test("average remains finite when the mathematical mean is finite", () => {
  assert.equal(api.average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});

test("average of opposite-signed extremes is their finite mathematical mean", () => {
  assert.equal(api.average([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
});

// Issue #3 fixture evolution. Skips only while `median` is not exported, so this CI-only file keeps
// passing on the pre-feature base; once the API exists both values are strictly required.
test(
  "median remains finite for maximum-magnitude samples",
  { skip: typeof api.median === "function" ? false : "median is not exported yet" },
  () => {
    assert.equal(api.median([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
    assert.equal(api.median([-Number.MAX_VALUE, Number.MAX_VALUE]), 0);
  },
);
