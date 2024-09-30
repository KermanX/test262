/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-object-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
info: |
  uses shell load() function
description: |
  pending
esid: pending
---*/
loadRelativeToScript("defineProperty-setup.js");
runDictionaryPropertyPresentTestsFraction(30, 32);
