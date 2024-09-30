/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js, non262-strict-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(testLenientAndStrict('function f(eval,[x]){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

