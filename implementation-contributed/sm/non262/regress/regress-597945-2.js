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
var a = {d: true, w: true};
Object.defineProperty(a, "d", {set: undefined});
delete a.d;
delete a.w;
a.d = true;

