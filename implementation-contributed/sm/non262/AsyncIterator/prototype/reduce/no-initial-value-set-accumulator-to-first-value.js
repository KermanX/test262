// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js, shell.js]
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
const reducer = (acc, _) => acc;
async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().reduce(reducer).then(result => assert.sameValue(result, 1));

