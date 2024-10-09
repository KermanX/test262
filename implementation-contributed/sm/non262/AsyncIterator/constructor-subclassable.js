// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  AsyncIterator constructor can be subclassed.
includes: [non262-shell.js]
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
class TestIterator extends AsyncIterator {
}

assert.sameValue(new TestIterator() instanceof AsyncIterator, true);

