// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 600392;
var summary =
  'Object.preventExtensions([]).length = 0 should do nothing, not throw';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/


function testEmpty()
{
  var a = [];
  assert.sameValue(a.length, 0);
  assert.sameValue(Object.preventExtensions(a), a);
  assert.sameValue(a.length, 0);
  a.length = 0;
  assert.sameValue(a.length, 0);
}
testEmpty();

function testEmptyStrict()
{
  "use strict";
  var a = [];
  assert.sameValue(a.length, 0);
  assert.sameValue(Object.preventExtensions(a), a);
  assert.sameValue(a.length, 0);
  a.length = 0;
  assert.sameValue(a.length, 0);
}
testEmptyStrict();

function testNonEmpty()
{
  var a = [1, 2, 3];
  assert.sameValue(a.length, 3);
  assert.sameValue(Object.preventExtensions(a), a);
  assert.sameValue(a.length, 3);
  a.length = 0;
  assert.sameValue(a.length, 0);
}
testNonEmpty();

function testNonEmptyStrict()
{
  "use strict";
  var a = [1, 2, 3];
  assert.sameValue(a.length, 3);
  assert.sameValue(Object.preventExtensions(a), a);
  assert.sameValue(a.length, 3);
  a.length = 0;
  assert.sameValue(a.length, 0);
}
testNonEmptyStrict();

/******************************************************************************/

print("All tests passed!");
