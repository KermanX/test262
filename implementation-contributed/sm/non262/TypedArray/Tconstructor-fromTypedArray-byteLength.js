// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-TypedArray-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var g = newGlobal();

var arr = [1, 2, 3];
for (var constructor of anyTypedArrayConstructors) {
    var tarr = new constructor(arr);
    for (var constructor2 of anyTypedArrayConstructors) {
        var copied = new constructor2(tarr);
        assert.sameValue(copied.buffer.byteLength, arr.length * constructor2.BYTES_PER_ELEMENT);

        g.tarr = tarr;
        copied = g.eval(`new ${constructor2.name}(tarr);`);
        assert.sameValue(copied.buffer.byteLength, arr.length * constructor2.BYTES_PER_ELEMENT);
    }
}

