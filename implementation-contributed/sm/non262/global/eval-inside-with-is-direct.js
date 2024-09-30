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
var BUGNUMBER = 601307;
var summary = "with (...) eval(...) is a direct eval";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var t = "global";
function test()
{
  var t = "local";
  with ({})
    return eval("t");
}
assert.sameValue(test(), "local");

/******************************************************************************/

print("All tests passed!");
