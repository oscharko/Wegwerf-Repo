# Wegwerf-Repo

A minimal, throwaway Node.js library used as a **Keiko qualification fixture**.

This repository exists to exercise an end-to-end Keiko Code task: reading a GitHub issue,
fixing a small, deliberately planted bug, committing on a feature branch, pushing, opening a
draft pull request, watching a required CI check fail and then pass after a repair, getting a
PR description generated, marking the PR ready for review, and having a human merge it to close
the issue.

## API

- `sum(values)` — returns the sum of a list of numbers.
- `average(values)` — returns the mean of a list of numbers.

## Development

```bash
npm test
```

## Usage

```js
const { sum, average } = require("./index.js");

sum([1, 2, 3]); // 6
average([2, 4]); // 3
```

The library has no runtime dependencies. Run `npm test` to execute the `node:test` suite.
