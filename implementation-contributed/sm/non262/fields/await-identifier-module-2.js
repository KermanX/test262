// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-fields-shell.js
- non262-shell.js
- shell.js
flags:
- module
- noStrict
negative:
  phase: early
  type: SyntaxError
description: |
  pending
esid: pending
---*/
async () => class { x = await };
