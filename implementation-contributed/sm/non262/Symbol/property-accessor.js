// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, non262-Symbol-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var obj = {};
var sym = Symbol();

var gets = 0;
var sets = [];
Object.defineProperty(obj, sym, {
    get: function () { return ++gets; },
    set: function (v) { sets.push(v); }
});

// getter
for (var i = 1; i < 9; i++)
    assert.sameValue(obj[sym], i);

// setter
var expected = [];
for (var i = 0; i < 9; i++) {
    assert.sameValue(obj[sym] = i, i);
    expected.push(i);
}
assert.deepEqual(sets, expected);

// increment operator
gets = 0;
sets = [];
assert.sameValue(obj[sym]++, 1);
assert.deepEqual(sets, [2]);

// assignment
gets = 0;
sets = [];
assert.sameValue(obj[sym] *= 12, 12);
assert.deepEqual(sets, [12]);

