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
---*/var TuplePrototype = Tuple.prototype;

assert.sameValue(typeof TuplePrototype.map, 'function');

assertThrowsInstanceOf(function() {
  TuplePrototype.map();
}, TypeError, "Tuple.prototype.map() with no argument");

