/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
- S
- c
- i
- l
- n
- o
- r
- t
- y
includes: [non262-regress-shell.js, non262-shell.js]
description: |
  pending
esid: pending
---*/

"use strict";
assertThrowsInstanceOf(
    () => eval("(function() { eval(); function eval() {} })"),
    SyntaxError
)

