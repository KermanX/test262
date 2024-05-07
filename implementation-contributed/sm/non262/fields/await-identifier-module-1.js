// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- module
- noStrict
features: []
negative:
  phase: early
  type: SyntaxError
description: |
  pending
esid: pending
---*/
async () => class { [await] = 1 };
