/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */


/*---
includes: [non262-Date-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/var BUGNUMBER = 771946;
var summary = "Fractional days, months, years shouldn't trigger asserts";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

new Date(0).setFullYear(1.5);
new Date(0).setUTCDate(1.5);
new Date(0).setMonth(1.5);

/******************************************************************************/

print("Tests complete");
