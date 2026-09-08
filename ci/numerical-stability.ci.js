"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { average } = require("../index.js");

test("average remains finite when the mathematical mean is finite", () => {
  assert.equal(average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
  assert.equal(
    average([Number.MAX_VALUE, Number.MAX_VALUE, NaN, Infinity, -Infinity]),
    Number.MAX_VALUE,
  );
});
