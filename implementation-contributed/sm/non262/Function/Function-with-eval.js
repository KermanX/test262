/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-Function-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(new Function(
            "eval('var foo = 915805');" +
            "return foo;"
         )(),
         915805);

assert.sameValue(new Function(
            "eval('function foo() {" +
                      "return 915805;" +
                  "}');" +
            "return foo;"
         )()(),
         915805);

/******************************************************************************/

print("Tests complete");
