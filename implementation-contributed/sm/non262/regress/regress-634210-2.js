/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-regress-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var a = [];
for (var i = 0; i < 2; i++) {
    a[i] = {m: function () {}};
    Object.defineProperty(a[i], "m", {writable: false});
}
assert.sameValue(a[0].m === a[1].m, false);

