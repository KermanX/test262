/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
flags:
- onlyStrict
includes: [non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict";
assertThrowsInstanceOf(
    () => eval("(function() { eval(); function eval() {} })"),
    SyntaxError
)

