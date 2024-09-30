// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js, shell.js]
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
class TestIterator extends AsyncIterator {
  constructor(value) {
    super();
    this.value = value;
  }

  next() {
    return Promise.resolve(this.value);
  }
}

const sum = (x, y) => x + y;
function check(value) {
  const iter = new TestIterator(value);
  iter.reduce(sum).then(() => assert.sameValue(true, false, 'expected error'), err => {
    assert.sameValue(err instanceof TypeError, true);
  });
}

check();
check(undefined);
check(null);
check(0);
check(false);
check('');
check(Symbol(''));

