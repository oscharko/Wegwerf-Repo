"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { average } = require("../index.js");

test("average remains finite when the mathematical mean is finite", () => {
  assert.equal(average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});

test("average ignores non-finite values around large finite numbers", () => {
  assert.equal(average([Number.MAX_VALUE, NaN, Infinity, Number.MAX_VALUE]), Number.MAX_VALUE);
});
