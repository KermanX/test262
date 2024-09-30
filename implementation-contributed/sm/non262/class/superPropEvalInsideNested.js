// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-class-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// It's invalid to eval super.prop inside a nested non-method, even if it
// appears inside a method definition
assertThrowsInstanceOf(() =>
({
    method() {
        (function () {
            eval('super.toString');
        })();
    }
}).method(), SyntaxError);

