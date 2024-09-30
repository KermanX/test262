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
// Contributor: Bob Clary <bclary@bclary.com>

try {
    new {prototype: TypeError.prototype};
} catch (e) {}

