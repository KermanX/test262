// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Make sure duplicated name is allowed in non-strict.
function f0(a, a) {
}

// SyntaxError should be thrown if arrow function has duplicated name.
assertThrowsInstanceOf(() => eval(`
(a, a) => {
};
`), SyntaxError);
assertThrowsInstanceOf(() => eval(`
(a, ...a) => {
};
`), SyntaxError);

