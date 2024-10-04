// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-class-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
let arrow;

class foo extends class { } {
    constructor() {
        arrow = () => this;
        super();
    }
}

assert.sameValue(new foo(), arrow());

