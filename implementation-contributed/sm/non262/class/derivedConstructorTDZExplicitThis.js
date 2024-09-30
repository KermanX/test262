// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-class-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/class foo extends null {
    constructor() {
        this;
        assert.sameValue(false, true);
    }
}

for (let i = 0; i < 1100; i++)
    assertThrownErrorContains(() => new foo(), "this");

