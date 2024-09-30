// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js, non262-strict-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = 'assign-to-callee-name.js';
var BUGNUMBER = 610350;
var summary =
  "Assigning to a function expression's name within that function should " +
  "throw a TypeError in strict mode code";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var f = function assignSelfStrict() { "use strict"; assignSelfStrict = 12; };

try
{
  var r = f();
  throw new Error("should have thrown a TypeError, returned " + r);
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true,
           "didn't throw a TypeError: " + e);
}

var assignSelf = 42;
var f2 = function assignSelf() { assignSelf = 12; };

f2(); // shouldn't throw, does nothing
assert.sameValue(assignSelf, 42);

/******************************************************************************/

print("All tests passed!");
