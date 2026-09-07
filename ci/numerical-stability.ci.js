"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { average } = require("../index.js");

test("average remains finite when the mathematical mean is finite", () => {
  assert.strictEqual(average([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
});
