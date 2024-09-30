/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-String-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 501739;
var summary =
  "String.prototype.match behavior with zero-length matches involving " +
  "forward lookahead";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var r = /(?=x)/g;

var res = "aaaaaaaaaxaaaaaaaaax".match(r);
assert.sameValue(res.length, 2);

/******************************************************************************/

print("Tests complete");
