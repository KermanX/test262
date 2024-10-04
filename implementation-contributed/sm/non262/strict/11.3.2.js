/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js, non262-strict-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/*
 * Postfix decrement expressions must not have 'eval' or 'arguments'
 * as their operands.
 */
assert.sameValue(testLenientAndStrict('arguments--',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('eval--',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(arguments)--',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);
assert.sameValue(testLenientAndStrict('(eval)--',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

