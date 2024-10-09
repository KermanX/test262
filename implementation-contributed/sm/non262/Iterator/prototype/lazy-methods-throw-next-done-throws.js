// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: |
  Lazy %Iterator.prototype% methods throw if `next.done` throws.
info: |
  Iterator Helpers proposal 2.1.5
features:
- Iterator
- iterator-helpers
includes: [non262-shell.js]
flags:
- noStrict
---*/

//
//
class TestError extends Error {}
class TestIterator extends Iterator {
  next() {
    return {
      get done() {
        throw new TestError();
      }
    };
  }

  closed = false;
  return() {
    this.closed = true;
    return {done: true};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.flatMap(x => [x]),
];

for (const method of methods) {
  const iterator = new TestIterator();
  assert.sameValue(iterator.closed, false);
  assertThrowsInstanceOf(() => method(iterator).next(), TestError);
  assert.sameValue(iterator.closed, false);
}

