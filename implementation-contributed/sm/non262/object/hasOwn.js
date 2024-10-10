/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-object-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(Object.hasOwn({}, "any"), false);
assertThrowsInstanceOf(() => Object.hasOwn(null, "any"), TypeError);

var x = { test: 'test value'}
var y = {}
var z = Object.create(x);

assert.sameValue(Object.hasOwn(x, "test"), true);
assert.sameValue(Object.hasOwn(y, "test"), false);
assert.sameValue(Object.hasOwn(z, "test"), false);

