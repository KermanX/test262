// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, non262-object-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var BUGNUMBER = 1079188;
var summary = "Coerce the argument passed to Object.getOwnPropertyDescriptor using ToObject";
print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(), TypeError);
assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(undefined), TypeError);
assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(null), TypeError);

Object.getOwnPropertyDescriptor(1);
Object.getOwnPropertyDescriptor(true);
if (typeof Symbol === "function") {
    Object.getOwnPropertyDescriptor(Symbol("foo"));
}

assert.deepEqual(Object.getOwnPropertyDescriptor("foo", "length"), {
    value: 3,
    writable: false,
    enumerable: false,
    configurable: false
});

assert.deepEqual(Object.getOwnPropertyDescriptor("foo", 0), {
    value: "f",
    writable: false,
    enumerable: true,
    configurable: false
});

