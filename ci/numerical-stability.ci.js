"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { average } = require("../index.js");

test("average remains finite when the mathematical mean is finite", () => {
  assert.equal(average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});

test("average remains finite while ignoring non-finite values", () => {
  assert.equal(average([Number.MAX_VALUE, Infinity, Number.MAX_VALUE, NaN]), Number.MAX_VALUE);
});
