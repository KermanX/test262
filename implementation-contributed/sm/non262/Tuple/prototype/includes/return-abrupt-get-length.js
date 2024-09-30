// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.includes
description: |
  Return abrupt from Get(O, "length")
info: |
  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  2. Let len be ? ToLength(? Get(O, "length")).
  ...
includes: [non262-Tuple-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
features:
- Tuple
---*/

var obj = {};

Object.defineProperty(obj, "length", {
  get: function() {
    throw new Test262Error();
  }
});

assertThrowsInstanceOf(() => #[].includes.call(obj, 7), TypeError,
		       "value of TupleObject must be a tuple");

