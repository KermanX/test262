// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [detachArrayBuffer.js, non262-TypedArray-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Bug 1291003
if (typeof $DETACHBUFFER === "function") {
    for (let constructor of typedArrayConstructors) {
        const elementSize = constructor.BYTES_PER_ELEMENT;

        let targetOffset;
        let buffer = new ArrayBuffer(2 * elementSize);
        let typedArray = new constructor(buffer, 1 * elementSize, 1);
        typedArray.constructor = {
            [Symbol.species]: function(ab, offset, length) {
                targetOffset = offset;
                return new constructor(1);
            }
        };

        let beginIndex = {
            valueOf() {
                $DETACHBUFFER(buffer);
                return 0;
            }
        };
        typedArray.subarray(beginIndex);

        assert.sameValue(targetOffset, 1 * elementSize);
    }
}

