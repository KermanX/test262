// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/

assert.sameValue(Iterator.prototype.drop.name, 'drop');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.drop, 'name');
assert.sameValue(propertyDescriptor.value, 'drop');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof assert.sameValue == 'function')
