// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Number-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call(true)'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call("")'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call({})'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call(null)'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call([])'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call(undefined)'), true);
assert.sameValue(raisesException(TypeError)('Number.prototype.toString.call(new Boolean(true))'), true);

assert.sameValue(completesNormally('Number.prototype.toString.call(42)'), true);
assert.sameValue(completesNormally('Number.prototype.toString.call(new Number(42))'), true);

function testAround(middle)
{
    var range = 260;
    var low = middle - range/2;
    for (var i = 0; i < range; ++i)
        assert.sameValue(low + i, parseInt(String(low + i)));
}

testAround(-Math.pow(2,32));
testAround(-Math.pow(2,16));
testAround(0);
testAround(+Math.pow(2,16));
testAround(+Math.pow(2,32));

