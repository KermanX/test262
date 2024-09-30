// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Tuple-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/

var desc = Object.getOwnPropertyDescriptor(Tuple.prototype.slice, "name");
assert.sameValue(desc.value, "slice");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

