/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-misc-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var o = {}
try {
    eval('o.\\u82f1 = 42;');
}
catch (e) {
    assert.sameValue('should not fail', true);
}
assert.sameValue(o['\u82f1'], 42);

