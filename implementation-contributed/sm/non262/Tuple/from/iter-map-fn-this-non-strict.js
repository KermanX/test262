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
---*/var thisVals = [];
var nextResult = {
  done: false,
  value: {}
};
var nextNextResult = {
  done: false,
  value: {}
};
var mapFn = function() {
  thisVals.push(this);
};
var items = {};
var global = function() {
  return this;
}();

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextResult;
      nextResult = nextNextResult;
      nextNextResult = {
        done: true
      };

      return result;
    }
  };
};

Tuple.from(items, mapFn);

assert.sameValue(thisVals.length, 2);
assert.sameValue(thisVals[0], global);
assert.sameValue(thisVals[1], global);

