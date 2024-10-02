/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-Array-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
//-----------------------------------------------------------------------------
var BUGNUMBER = 566651;
var summary = 'setting array.length to null should not throw an uncatchable exception';
var actual = 0;
var expect = 0;

printBugNumber(BUGNUMBER);
printStatus (summary);

var a = [];
a.length = null;

assert.sameValue(expect, actual, summary);
