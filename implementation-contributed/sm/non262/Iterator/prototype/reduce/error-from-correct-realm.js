// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
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
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

const iter = [].values();

assertThrowsInstanceOf(() => iter.reduce(), TypeError);
assertThrowsInstanceOf(
  otherGlobal.Iterator.prototype.reduce.bind(iter),
  otherGlobal.TypeError,
  'TypeError comes from the realm of the method.',
);

