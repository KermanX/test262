/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-regress-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Contributors: Gary Kwong <gary@rumblingedge.com>,
//               Jason Orendorff <jorendorff@mozilla.com>

function c(a) {
    this.f = function () { a; };
}
c(0);  // set both BRANDED and GENERIC bits in global scope
Object.defineProperty(this, "f", {configurable: true, enumerable: true, value: 3});

