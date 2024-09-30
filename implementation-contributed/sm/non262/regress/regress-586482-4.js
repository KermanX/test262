// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-regress-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var expect, actual;

var obj = {
    f: function() {
        expect = this.g;
        actual = arguments.callee.caller;
        print("Ok");
    }
};

var obj2 = { __proto__: obj, g: function() { this.f(); }};

var obj3 = { __proto__: obj2, h: function() { this.g(); }};

var obj4 = { __proto__: obj3 }

obj4.h();

assert.sameValue(expect, actual, "ok");
