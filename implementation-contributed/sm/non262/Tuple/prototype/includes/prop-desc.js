// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
  '"includes" property of Tuple.prototype'
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

var desc = Object.getOwnPropertyDescriptor(Tuple.prototype, "includes");
assert.sameValue(desc.writable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

