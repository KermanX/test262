// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  Iterator constructor can be subclassed.

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

class TestIterator extends Iterator {
}

assert.sameValue(new TestIterator() instanceof Iterator, true);

