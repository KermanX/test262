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

assert.sameValue(Iterator.prototype.filter.name, 'filter');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.filter, 'name');
assert.sameValue(propertyDescriptor.value, 'filter');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof assert.sameValue == 'function')
