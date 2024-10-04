/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-regress-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
(function () {
    var obj = {prop: 1};
    var [x, {prop: y}] = [function () { return y; }, obj];
    assert.sameValue(y, 1);
    assert.sameValue(x(), 1);
})();

