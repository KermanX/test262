// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js, non262-strict-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(testLenientAndStrict('function f(eval,[x]){}',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

