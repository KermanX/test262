/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-JSON-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'stringify-ignore-noncallable-toJSON.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 584909;
var summary = "If the toJSON property isn't callable, don't try to call it";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj =
  {
    p: { toJSON: null },
    m: { toJSON: {} }
  };

assert.sameValue(JSON.stringify(obj), '{"p":{"toJSON":null},"m":{"toJSON":{}}}');

/******************************************************************************/

print("Tests complete");
