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
---*/var BUGNUMBER = 738511;
var summary =
  "new Date(value) should call ToPrimitive on value before testing for " +
  "string-ness";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(new Date(new String("2012-01-31T00:00:00.000Z")).valueOf(),
         1327968000000,
         "Date constructor passed a String object should parse it");

/******************************************************************************/

print("Tests complete");
