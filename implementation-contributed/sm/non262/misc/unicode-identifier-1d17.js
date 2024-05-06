// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var o = {}
try {
    eval('o.\\u1d17 = 42;');
}
catch (e) {
    assert.sameValue('should not fail', true);
}
assert.sameValue(o['\u1d17'], 42);

if (typeof assert.sameValue == 'function')
