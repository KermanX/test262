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
function f(x) {
    delete arguments[0];
    for(var i=0; i<20; i++) {
        arguments[0] !== undefined;
    }
}

/* Don't crash. */
f(1);

