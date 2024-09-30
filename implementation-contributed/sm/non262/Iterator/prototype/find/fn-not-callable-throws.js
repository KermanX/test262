// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js, shell.js]
flags:
- noStrict
features:
- Iterator
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const iter = [].values();

assertThrowsInstanceOf(() => iter.find(), TypeError);
assertThrowsInstanceOf(() => iter.find(undefined), TypeError);
assertThrowsInstanceOf(() => iter.find(null), TypeError);
assertThrowsInstanceOf(() => iter.find(0), TypeError);
assertThrowsInstanceOf(() => iter.find(false), TypeError);
assertThrowsInstanceOf(() => iter.find(''), TypeError);
assertThrowsInstanceOf(() => iter.find(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.find({}), TypeError);

