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

source = `class A {
  // Ensure this name parses.
  #℘;
}`;

Function(source);

