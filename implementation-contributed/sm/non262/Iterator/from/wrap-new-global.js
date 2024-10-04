// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js]
flags:
- noStrict
features:
- Iterator
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const otherGlobal = newGlobal({newCompartment: true});

const iter = [1, 2, 3].values();
assert.sameValue(iter, Iterator.from(iter));
assert.sameValue(iter !== otherGlobal.Iterator.from(iter), true);

