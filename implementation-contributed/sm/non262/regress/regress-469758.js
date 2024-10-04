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
assertThrowsInstanceOfWithMessageCheck(
    () => {
      {let i=1}
      {let j=1; [][j][2]}
    },
    TypeError,
    message => message.endsWith("[][j] is undefined"));

