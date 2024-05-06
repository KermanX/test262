// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var desc = Object.getOwnPropertyDescriptor(Tuple.valueOf, "length");
assert.sameValue(desc.value, 0);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.valueOf), false);

assertThrowsInstanceOf(() => {
  new Tuple.valueOf([]);
}, TypeError, '`new Tuple.valueOf()` throws TypeError');

