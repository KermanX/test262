// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-module-shell.js, non262-shell.js]
flags:
- module
negative:
  phase: parse
  type: SyntaxError
description: |
  pending
esid: pending
---*/

// 'await' is always a keyword when parsing modules.
function f() {
    await;
}
$DONOTEVALUATE();
