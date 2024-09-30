// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-TypedArray-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/const testArray = [1n];
for (const constructor of anyTypedArrayConstructors) {
    assertThrowsInstanceOf(() => new constructor(testArray), TypeError);
    assertThrowsInstanceOf(() => new constructor(testArray.values()), TypeError);
}

