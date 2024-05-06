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

function f(x) {
    delete arguments[0];
    for(var i=0; i<20; i++) {
        arguments[0] !== undefined;
    }
}

/* Don't crash. */
f(1);

