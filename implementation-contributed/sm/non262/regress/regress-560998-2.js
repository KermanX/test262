/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var x = {};
for (var i = 0; i < 2; i++) {
    Object.defineProperty(x, "y", {configurable: true, value: function () {}});
    x.y();
}
