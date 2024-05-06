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

function outer() {
    function f() {}
    f.p = function() {};
    Object.seal(f);
    return f.p;
}

var m1 = outer();
var m2 = outer();
assert.sameValue(m1 === m2, false);

m1.foo = "hi";
assert.sameValue(m2.foo, undefined);

