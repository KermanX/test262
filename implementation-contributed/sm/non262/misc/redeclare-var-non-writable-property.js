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
var BUGNUMBER = 539488;
var summary =
  '|var| statements for existing, read-only/permanent properties should not ' +
  'be errors';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var undefined;

/******************************************************************************/

print("All tests passed!");
