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
function f(assert.sameValue) {
    if (typeof clear === 'function')
        clear(this);
    return f;
}

// This must be called before clear().
f();  // don't assert
