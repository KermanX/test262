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
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// getOwnPropertySymbols(proxy) calls the getOwnPropertyNames hook (only).

var symbols = [Symbol(), Symbol("moon"), Symbol.for("sun"), Symbol.iterator];
var hits = 0;

function HandlerProxy() {
    return new Proxy({}, {
        get: function (t, key) {
            if (key !== "ownKeys")
                throw new Error("tried to access handler[" + String(key) + "]");
            hits++;
            return t => symbols;
        }
    });
}

function OwnKeysProxy() {
    return new Proxy({}, new HandlerProxy);
}

assert.deepEqual(Object.getOwnPropertySymbols(new OwnKeysProxy), symbols);
assert.sameValue(hits, 1);

