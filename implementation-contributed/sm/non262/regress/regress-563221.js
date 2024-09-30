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
// Contributor: Jason Orendorff <jorendorff@mozilla.com>

"" + eval("(function () { if (x) ; else if (y) n(); else { " + Array(10000).join("e;") + " } });");

if (this.assert.sameValue)
