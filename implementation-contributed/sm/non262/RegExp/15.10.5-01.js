/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-RegExp-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 614603;
var summary = "RegExp.length";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(RegExp.length, 2);
assert.sameValue(/a/.constructor.length, 2);

print("All tests passed!");
