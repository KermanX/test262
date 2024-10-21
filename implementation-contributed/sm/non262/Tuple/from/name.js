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

desc = Object.getOwnPropertyDescriptor(Tuple.from, "name");
assert.sameValue(desc.value, "from");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

