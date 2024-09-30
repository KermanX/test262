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
//-----------------------------------------------------------------------------
var BUGNUMBER = 547087;
var summary = 'JS_EnumerateStandardClasses uses wrong attributes for undefined';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

for (var p in this);

assert.sameValue(Object.getOwnPropertyDescriptor(this, "undefined").writable, false);

/******************************************************************************/

print("All tests passed!");
