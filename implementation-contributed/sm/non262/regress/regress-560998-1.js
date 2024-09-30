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
// Contributor: Jesse Ruderman

for (let j = 0; j < 4; ++j) {
  function g() { j; }
  g();
}

