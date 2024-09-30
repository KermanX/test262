// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-class-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
class Base {
    constructor() {}
}
class Mid extends Base {
    constructor() { super(); }
    f() { return new super.constructor(); }
}
class Derived extends Mid {
    constructor() { super(); }
}

let d = new Derived();
var df = d.f();
assert.sameValue(df.constructor, Base);

