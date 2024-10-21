// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
/* Step 6b. */
/* AddEntriesFromIterable should throw if next() throws */

var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new SyntaxError();
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(iter);
}, SyntaxError, "from() should throw if next() throws");

