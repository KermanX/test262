/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-misc-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(new Error().hasOwnProperty('message'), false);
assert.sameValue(new Error(undefined).hasOwnProperty('message'), false);

