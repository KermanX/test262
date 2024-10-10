// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  The "length" property of Iterator

    Iterator is not enabled unconditionally
includes: [non262-shell.js]
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator, 'length');
assert.sameValue(propDesc.value, 0);
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

