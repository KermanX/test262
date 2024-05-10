// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
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
var BUGNUMBER = 901351;
var summary = "Behavior when the JSON.parse reviver mutates the holder object";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// A little trickiness to account for the undefined-ness of property
// enumeration order.
var first = "unset";

var proxyObj = null;

var obj = JSON.parse('{ "a": 0, "b": 1 }', function(prop, v) {
  if (first === "unset")
  {
    first = prop;
    var second = (prop === "a") ? "b" : "a";

    proxyObj = newGlobal().evaluate("({ c: 42, d: 17 })");
    Object.defineProperty(this, second, { value: proxyObj });
  }
  return v;
});

if (first === "a")
{
  assert.sameValue(obj.a, 0);
  assert.sameValue(obj.b, proxyObj);
  assert.sameValue(obj.b.c, 42);
  assert.sameValue(obj.b.d, 17);
}
else
{
  assert.sameValue(obj.a, proxyObj);
  assert.sameValue(obj.a.c, 42);
  assert.sameValue(obj.a.d, 17);
  assert.sameValue(obj.b, 1);
}

/******************************************************************************/

print("Tests complete");
