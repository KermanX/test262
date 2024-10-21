// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a number (value is -Infinity)
includes: [non262-shell.js]
flags:
- noStrict
features:
- Tuple
esid: pending
---*/
assert.sameValue(#[true].indexOf(true, -Infinity), 0, '#[true].indexOf(true, -Infinity)');

