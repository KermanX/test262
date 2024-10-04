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
//-----------------------------------------------------------------------------
var BUGNUMBER = 459405;
var summary = 'Math is not ReadOnly';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  expect = 'foo';

  try
  {
    var Math = 'foo';
    actual = Math;
  }
  catch(ex)
  {
    actual = ex + '';
  }

  assert.sameValue(expect, actual, summary);
}
