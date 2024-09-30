// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-JSON-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'small-codepoints.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 554079;
var summary = 'JSON.parse should reject U+0000 through U+001F';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

for (var i = 0; i <= 0x1F; i++)
  testJSON('["a' + String.fromCharCode(i) + 'c"]', true);
