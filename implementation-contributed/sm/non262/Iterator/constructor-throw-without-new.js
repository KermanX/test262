// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  Iterator constructor throws when called without new.

    Iterator is not enabled unconditionally
includes: [non262-shell.js, shell.js]
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/

assertThrowsInstanceOf(() => Iterator(), TypeError);

