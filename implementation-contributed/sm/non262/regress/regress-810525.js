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
var expect = '';
var actual = '';

function test(s) {
    var threw = false;
    try {
        eval(s);
    } catch (e) {
        assert.sameValue(e.message.indexOf('(intermediate value)'), -1);
        threw = true;
    } finally {
        assert.sameValue(threw, true);
    }
}

test("({p:1, q:2}).m()");
test("[].m()");
test("[1,2,3].m()");
test("/hi/.m()");

