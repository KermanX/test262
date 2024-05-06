// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributor: Jason Orendorff <jorendorff@mozilla.com>

var obj = {a: 0, b: 1, c: 2};
delete obj.b;  // switch to dictionary mode
Object.defineProperty(obj, 'g',
                      {get: function () { return -1; }, configurable: true});
for (var i = 3; i < 20; i++)
    obj['x' + i] = i;  // get property table
for (var i = 3; i < 20; i++)
    delete obj['x' + i];  // add to freelist
delete obj.g;  // must update lastProp->freeslot, to avoid assertion

// extra junk to try to hit the assertion, if freeslot is not updated
gc();
obj.d = 3;
obj.e = 4;

