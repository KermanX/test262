/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(typeof Symbol(), "symbol");
assert.sameValue(typeof Symbol("ponies"), "symbol");
assert.sameValue(typeof Symbol.for("ponies"), "symbol");

assert.sameValue(typeof Object(Symbol()), "object");

