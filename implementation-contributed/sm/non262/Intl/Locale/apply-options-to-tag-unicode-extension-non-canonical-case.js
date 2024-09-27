// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Locale-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// "U" is not in canonical case.
let loc1 = new Intl.Locale("en-U-nu-latn", {numberingSystem: "thai"});
assert.sameValue(loc1.toString(), "en-u-nu-thai");

// First letter of "Nu" is not in canonical case.
let loc2 = new Intl.Locale("en-u-Nu-latn", {numberingSystem: "thai"});
assert.sameValue(loc2.toString(), "en-u-nu-thai");

// Second letter of "nU" is not in canonical case.
let loc3 = new Intl.Locale("en-u-nU-latn", {numberingSystem: "thai"});
assert.sameValue(loc3.toString(), "en-u-nu-thai");

