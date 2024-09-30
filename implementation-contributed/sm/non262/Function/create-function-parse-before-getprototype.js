// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Function-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/var getProtoCalled = false;

var newTarget = Object.defineProperty(function(){}.bind(), "prototype", {
    get() {
        getProtoCalled = true;
        return null;
    }
});

assertThrowsInstanceOf(() => {
    Reflect.construct(Function, ["@error"], newTarget);
}, SyntaxError);

assert.sameValue(getProtoCalled, false);

