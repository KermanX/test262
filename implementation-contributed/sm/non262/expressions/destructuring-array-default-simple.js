// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-expressions-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1184922;
var summary = "Array destructuring with various default values in various context - simple literal";

print(BUGNUMBER + ": " + summary);

testDestructuringArrayDefault("'foo'");
testDestructuringArrayDefault("`foo`");
testDestructuringArrayDefault("func`foo`");

testDestructuringArrayDefault("/foo/");

testDestructuringArrayDefault("{}");
testDestructuringArrayDefault("[]");

