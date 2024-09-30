/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-Function-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 528082;
var summary = 'named function expression function-name-as-upvar slot botch';

printBugNumber(BUGNUMBER);
printStatus(summary);

function f() {
    return function g(a) { return function () { return g; }(); }();
}
var actual = typeof f();
var expect = "function";

assert.sameValue(expect, actual, summary);

printStatus("All tests passed!");
