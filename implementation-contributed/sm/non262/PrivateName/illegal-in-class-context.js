// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-PrivateName-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/

assertThrowsInstanceOf(() => eval(`class A { #x; #x; }`), SyntaxError);

// No computed private fields
assertThrowsInstanceOf(
    () => eval(`var x = "foo"; class A { #[x] = 20; }`), SyntaxError);

function assertThrowsWithMessage(f, msg) {
    assertThrowsInstanceOfWithMessageCheck(f, SyntaxError,
        message => message.normalize() === msg.normalize());
}

assertThrowsWithMessage(() => eval(`class A { #x; h(o) { return !#x; }}`),
    "invalid use of private name in unary expression without object reference");
assertThrowsWithMessage(() => eval(`class A { #x; h(o) { return 1 + #x in o; }}`),
    "invalid use of private name due to operator precedence");


