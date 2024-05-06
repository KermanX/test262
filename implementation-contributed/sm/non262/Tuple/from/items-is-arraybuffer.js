// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var arrayBuffer = new ArrayBuffer(7);

var result = Tuple.from(arrayBuffer);

assert.sameValue(result.length, 0);

