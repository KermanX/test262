// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-lexical-environment-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Accessing an uninitialized variable due to @@unscopables is still a ReferenceError.

with ({x: 1, [Symbol.unscopables]: {x: true}})
    assertThrowsInstanceOf(() => x, ReferenceError);

let x;

