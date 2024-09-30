/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-global-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
//-----------------------------------------------------------------------------
var BUGNUMBER = 520095;
var summary =
  "decodeURI{,Component} should return the specified character for " +
  "'%EF%BF%BE' and '%EF%BF%BF', not return U+FFFD";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(decodeURI("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURI("%EF%BF%BF"), "\uFFFF");
assert.sameValue(decodeURIComponent("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURIComponent("%EF%BF%BF"), "\uFFFF");

/******************************************************************************/

print("All tests passed!");
