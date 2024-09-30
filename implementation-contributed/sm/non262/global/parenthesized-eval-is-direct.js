// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-global-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
print("(eval)(...) is a direct eval, (1, eval)() isn't, etc.");

/**************
 * BEGIN TEST *
 **************/

/*
 * Justification:
 *
 *   https://mail.mozilla.org/pipermail/es5-discuss/2010-October/003724.html
 *
 * Note also bug 537673.
 */

var t = "global";

function group()
{
  var t = "local";
  return (eval)("t");
}
assert.sameValue(group(), "local");

function groupAndComma()
{
  var t = "local";
  return (1, eval)("t");
}
assert.sameValue(groupAndComma(), "global");

function groupAndTrueTernary()
{
  var t = "local";
  return (true ? eval : null)("t");
}
assert.sameValue(groupAndTrueTernary(), "global");

function groupAndEmptyStringTernary()
{
  var t = "local";
  return ("" ? null : eval)("t");
}
assert.sameValue(groupAndEmptyStringTernary(), "global");

function groupAndZeroTernary()
{
  var t = "local";
  return (0 ? null : eval)("t");
}
assert.sameValue(groupAndZeroTernary(), "global");

function groupAndNaNTernary()
{
  var t = "local";
  return (0 / 0 ? null : eval)("t");
}
assert.sameValue(groupAndNaNTernary(), "global");

/******************************************************************************/

print("All tests passed!");
