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
function test(arg) {
    eval(arg);
    {
        function arguments() { return 1; }
    }
    return arguments;
}

assert.sameValue("function", typeof test("42"), "function sub-statement must override arguments");
