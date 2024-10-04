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
// Contributors: Christian Holler <decoder@own-hero.net>, Jesse Ruderman <jruderman@gmail.com>

(1 ? 2 : delete(0 ? 0 : {})).x;

