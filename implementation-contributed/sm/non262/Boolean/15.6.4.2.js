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

assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call(42)'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call("")'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call({})'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call(null)'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call([])'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call(undefined)'), true);
assert.sameValue(raisesException(TypeError)('Boolean.prototype.toString.call(new String())'), true);

assert.sameValue(completesNormally('Boolean.prototype.toString.call(true)'), true);
assert.sameValue(completesNormally('Boolean.prototype.toString.call(new Boolean(true))'), true);

