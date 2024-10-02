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
function* f(a, b, c, d) {
    yield arguments.length;
}
assert.sameValue(0, f().next().value, "bug 530879");
