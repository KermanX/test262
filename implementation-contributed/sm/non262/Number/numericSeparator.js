/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-Number-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOf(function() { eval('let a = 100_00_;'); }, SyntaxError);
assertThrowsInstanceOf(() => eval("let b = 10__;"), SyntaxError);
assertThrowsInstanceOf(() => eval("let b = 1._2;"), SyntaxError);

