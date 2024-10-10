/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-Array-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Check superficial features of Array.from.
var desc = Object.getOwnPropertyDescriptor(Array, "from");
assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, true);
assert.sameValue(Array.from.length, 1);
assertThrowsInstanceOf(() => new Array.from(), TypeError);  // not a constructor

