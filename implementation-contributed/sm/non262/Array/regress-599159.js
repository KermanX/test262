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
var b = Object.create(Array.prototype);
b.length = 12;
assert.sameValue(b.length, 12);

