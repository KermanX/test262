/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-JSON-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'stringify-missing-arguments.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 648471;
var summary = "JSON.stringify with no arguments";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(JSON.stringify(), undefined);

/******************************************************************************/

print("All tests passed!");
