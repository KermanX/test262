// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features: []
info: |
  uses shell load() function
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - part1';

print(BUGNUMBER + ": " + summary);

function test() {
  loadRelativeToScript('normalize-generateddata-input.js');

  for (var test1 of tests_part1) {
    runNormalizeTest(test1);
  }
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

