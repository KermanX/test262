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

let iter = [1, 2, 3].values().filter(x => x % 2);

for (const v of [1, 3]) {
  let result = iter.next();
  assert.sameValue(result.done, false);
  assert.sameValue(result.value, v);
}

assert.sameValue(iter.next().done, true);

