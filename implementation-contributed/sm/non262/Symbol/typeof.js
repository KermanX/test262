// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Symbol-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

assert.sameValue(typeof Symbol(), "symbol");
assert.sameValue(typeof Symbol("ponies"), "symbol");
assert.sameValue(typeof Symbol.for("ponies"), "symbol");

assert.sameValue(typeof Object(Symbol()), "object");

