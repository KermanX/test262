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
var withSorted = Tuple.prototype.withSorted;

var thisVals = [[undefined, "undefined"],
                [null, "null"],
                [42, "42"],
                ["1", "1"],
                [true, "true"],
                [false, "false"],
                [Symbol("s"), "Symbol(\"s\")"],
                [[], "[]"],
                [{}, "{}"]];

for (pair of thisVals) {
    thisVal = pair[0];
    errorMsg = "this is: " + pair[1];
    assertThrowsInstanceOf(() => withSorted.call(thisVal),
                           TypeError, errorMsg);
}

