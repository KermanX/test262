// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Tuple-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var t = #[];
assert.sameValue(#[].flat(), #[]);
assert.sameValue(#[#[],#[]].flat(), #[]);
assert.sameValue(#[#[], #[1]].flat(), #[1]);
assert.sameValue(#[#[], #[1, t]].flat(), #[1, t]);

