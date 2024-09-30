/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-regress-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Contributor: Andreas Gal <gal@uci.edu>

assert.sameValue(Object.getOwnPropertyNames(Array.prototype).indexOf("length") >= 0, true);

assert.sameValue("ok", "ok", "bug 583429");
