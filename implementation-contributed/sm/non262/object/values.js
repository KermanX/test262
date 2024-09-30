// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, non262-object-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

if ("values" in Object) {
    assert.sameValue(Object.values.length, 1);

    var o, values;

    o = { a: 3, b: 2 };
    values = Object.values(o);
    assert.deepEqual(values, [3, 2]);

    o = { get a() { return 17; }, b: 2 };
    values = Object.values(o),
    assert.deepEqual(values, [17, 2]);

    o = { __iterator__: function() { throw new Error("non-standard __iterator__ called?"); } };
    values = Object.values(o);
    assert.deepEqual(values, [o.__iterator__]);

    o = { a: 1, b: 2 };
    delete o.a;
    o.a = 3;
    values = Object.values(o);
    assert.deepEqual(values, [2, 3]);

    o = [0, 1, 2];
    values = Object.values(o);
    assert.deepEqual(values, [0, 1, 2]);

    o = /./.exec("abc");
    values = Object.values(o);
    assert.deepEqual(values, ["a", 0, "abc", undefined]);

    o = { a: 1, b: 2, c: 3 };
    delete o.b;
    o.b = 5;
    values = Object.values(o);
    assert.deepEqual(values, [1, 3, 5]);

    function f() { }
    f.prototype.p = 1;
    o = new f();
    o.g = 1;
    values = Object.values(o);
    assert.deepEqual(values, [1]);

    var o = {get a() {delete this.b; return 1}, b: 2, c: 3};
    values = Object.values(o);
    assert.deepEqual(values, [1, 3]);

    assertThrowsInstanceOf(() => Object.values(), TypeError);
    assertThrowsInstanceOf(() => Object.values(undefined), TypeError);
    assertThrowsInstanceOf(() => Object.values(null), TypeError);

    assert.deepEqual(Object.values(1), []);
    assert.deepEqual(Object.values(true), []);
    if (typeof Symbol === "function")
        assert.deepEqual(Object.values(Symbol("foo")), []);

    assert.deepEqual(Object.values("foo"), ["f", "o", "o"]);

    values = Object.values({
        get a(){
            Object.defineProperty(this, "b", {enumerable: false});
            return "A";
        },
        b: "B"
    });
    assert.deepEqual(values, ["A"]);

    let ownKeysCallCount = 0;
    let getOwnPropertyDescriptorCalls = [];
    let target = { a: 1, b: 2, c: 3 };
    o = new Proxy(target, {
        ownKeys() {
            ownKeysCallCount++;
            return ["c", "a"];
        },
        getOwnPropertyDescriptor(target, key) {
            getOwnPropertyDescriptorCalls.push(key);
            return Object.getOwnPropertyDescriptor(target, key);
        }
    });
    values = Object.values(o);
    assert.sameValue(ownKeysCallCount, 1);
    assert.deepEqual(values, [3, 1]);
    assert.deepEqual(getOwnPropertyDescriptorCalls, ["c", "a"]);
}

