// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [compareArray.js, non262-TypedArray-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Test conversions to different element types.
let tests = [
    /* Int8Array */
    {
        from: Int8Array,
        to: Int8Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, -128, -127, -1, 0, 1, 127, -128, -127],
    },
    {
        from: Int8Array,
        to: Uint8Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, 128, 129, 255, 0, 1, 127, 128, 129],
    },
    {
        from: Int8Array,
        to: Uint8ClampedArray,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, 0, 0, 0, 0, 1, 127, 0, 0],
    },
    {
        from: Int8Array,
        to: Int16Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, -128, -127, -1, 0, 1, 127, -128, -127],
    },
    {
        from: Int8Array,
        to: Uint16Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, 65408, 65409, 65535, 0, 1, 127, 65408, 65409],
    },
    {
        from: Int8Array,
        to: Int32Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, -128, -127, -1, 0, 1, 127, -128, -127],
    },
    {
        from: Int8Array,
        to: Uint32Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, 4294967168, 4294967169, 4294967295, 0, 1, 127, 4294967168, 4294967169],
    },
    {
        from: Int8Array,
        to: Float32Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, -128, -127, -1, 0, 1, 127, -128, -127],
    },
    {
        from: Int8Array,
        to: Float64Array,
        values: [-129, -128, -127, -1, 0, 1, 127, 128, 129],
        expected: [127, -128, -127, -1, 0, 1, 127, -128, -127],
    },

    /* Uint8Array */
    {
        from: Uint8Array,
        to: Int8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, -128, -127, -2, -1, 0],
    },
    {
        from: Uint8Array,
        to: Uint8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Uint8ClampedArray,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Int16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Uint16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Int32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Uint32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Float32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },
    {
        from: Uint8Array,
        to: Float64Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 0],
    },

    /* Uint8ClampedArray */
    {
        from: Uint8ClampedArray,
        to: Int8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, -128, -127, -2, -1, -1],
    },
    {
        from: Uint8ClampedArray,
        to: Uint8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Uint8ClampedArray,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Int16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Uint16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Int32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Uint32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Float32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },
    {
        from: Uint8ClampedArray,
        to: Float64Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256],
        expected: [0, 1, 127, 128, 129, 254, 255, 255],
    },

    /* Int16Array */
    {
        from: Int16Array,
        to: Int8Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [-1, 0, 1, 127, -128, -127, -1, 0, 1, 127, -128, -127, -1, 0, 1],
    },
    {
        from: Int16Array,
        to: Uint8Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [255, 0, 1, 127, 128, 129, 255, 0, 1, 127, 128, 129, 255, 0, 1],
    },
    {
        from: Int16Array,
        to: Uint8ClampedArray,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [255, 0, 0, 0, 0, 0, 0, 0, 1, 127, 128, 129, 255, 0, 0],
    },
    {
        from: Int16Array,
        to: Int16Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, -32768, -32767],
    },
    {
        from: Int16Array,
        to: Uint16Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, 32768, 32769, 65407, 65408, 65409, 65535, 0, 1, 127, 128, 129, 32767, 32768, 32769],
    },
    {
        from: Int16Array,
        to: Int32Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, -32768, -32767],
    },
    {
        from: Int16Array,
        to: Uint32Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, 4294934528, 4294934529, 4294967167, 4294967168, 4294967169, 4294967295, 0, 1, 127, 128, 129, 32767, 4294934528, 4294934529],
    },
    {
        from: Int16Array,
        to: Float32Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, -32768, -32767],
    },
    {
        from: Int16Array,
        to: Float64Array,
        values: [-32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769],
        expected: [32767, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, -32768, -32767],
    },

    /* Uint16Array */
    {
        from: Uint16Array,
        to: Int8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, -128, -127, -2, -1, 0, -1, 0, 1, -2, -1, 0],
    },
    {
        from: Uint16Array,
        to: Uint8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 0, 255, 0, 1, 254, 255, 0],
    },
    {
        from: Uint16Array,
        to: Uint8ClampedArray,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 255, 255, 255, 255, 255, 255, 0],
    },
    {
        from: Uint16Array,
        to: Int16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, -32768, -32767, -2, -1, 0],
    },
    {
        from: Uint16Array,
        to: Uint16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0],
    },
    {
        from: Uint16Array,
        to: Int32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0],
    },
    {
        from: Uint16Array,
        to: Uint32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0],
    },
    {
        from: Uint16Array,
        to: Float32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0],
    },
    {
        from: Uint16Array,
        to: Float64Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0],
    },

    /* Int32Array */
    {
        from: Int32Array,
        to: Int8Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [-1, 0, 1, -1, 0, 1, 127, -128, -127, -1, 0, 1, 127, -128, -127, -1, 0, 1, -1, 0, 1],
    },
    {
        from: Int32Array,
        to: Uint8Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [255, 0, 1, 255, 0, 1, 127, 128, 129, 255, 0, 1, 127, 128, 129, 255, 0, 1, 255, 0, 1],
    },
    {
        from: Int32Array,
        to: Uint8ClampedArray,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 127, 128, 129, 255, 255, 255, 255, 0, 0],
    },
    {
        from: Int32Array,
        to: Int16Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [-1, 0, 1, 32767, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, -32768, -32767, -1, 0, 1],
    },
    {
        from: Int32Array,
        to: Uint16Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [65535, 0, 1, 32767, 32768, 32769, 65407, 65408, 65409, 65535, 0, 1, 127, 128, 129, 32767, 32768, 32769, 65535, 0, 1],
    },
    {
        from: Int32Array,
        to: Int32Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [2147483647, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, -2147483648, -2147483647],
    },
    {
        from: Int32Array,
        to: Uint32Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [2147483647, 2147483648, 2147483649, 4294934527, 4294934528, 4294934529, 4294967167, 4294967168, 4294967169, 4294967295, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
    },
    {
        from: Int32Array,
        to: Float32Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [2147483648, -2147483648, -2147483648, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483648, -2147483648, -2147483648],
    },
    {
        from: Int32Array,
        to: Float64Array,
        values: [-2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649],
        expected: [2147483647, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, 0, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, -2147483648, -2147483647],
    },

    /* Uint32Array */
    {
        from: Uint32Array,
        to: Int8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, -128, -127, -2, -1, 0, -1, 0, 1, -2, -1, 0, -1, 0, 1, -2, -1, 0],
    },
    {
        from: Uint32Array,
        to: Uint8Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 0, 255, 0, 1, 254, 255, 0, 255, 0, 1, 254, 255, 0],
    },
    {
        from: Uint32Array,
        to: Uint8ClampedArray,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0],
    },
    {
        from: Uint32Array,
        to: Int16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, -32768, -32767, -2, -1, 0, -1, 0, 1, -2, -1, 0],
    },
    {
        from: Uint32Array,
        to: Uint16Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 0, 65535, 0, 1, 65534, 65535, 0],
    },
    {
        from: Uint32Array,
        to: Int32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, -2147483648, -2147483647, -2, -1, 0],
    },
    {
        from: Uint32Array,
        to: Uint32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 0],
    },
    {
        from: Uint32Array,
        to: Float32Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483648, 2147483648, 2147483648, 4294967296, 4294967296, 0],
    },
    {
        from: Uint32Array,
        to: Float64Array,
        values: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 4294967296],
        expected: [0, 1, 127, 128, 129, 254, 255, 256, 32767, 32768, 32769, 65534, 65535, 65536, 2147483647, 2147483648, 2147483649, 4294967294, 4294967295, 0],
    },

    /* Float32Array */
    {
        from: Float32Array,
        to: Int8Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, -1, 0, 1, 127, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, -128, -127, -1, 0, 1, 0, 0, 0, 0, 0],
    },
    {
        from: Float32Array,
        to: Uint8Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, 255, 0, 1, 127, 128, 129, 255, 255, 255, 255, 0, 0, 1, 1, 1, 1, 127, 128, 129, 255, 0, 1, 0, 0, 0, 0, 0],
    },
    {
        from: Float32Array,
        to: Uint8ClampedArray,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 127, 128, 129, 255, 255, 255, 255, 255, 255, 255, 0],
    },
    {
        from: Float32Array,
        to: Int16Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, 32767, -32768, -32767, -129, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, -32768, -32767, 0, 0, 0, 0, 0],
    },
    {
        from: Float32Array,
        to: Uint16Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, 32767, 32768, 32769, 65407, 65408, 65409, 65535, 65535, 65535, 65535, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, 0, 0, 0, 0, 0],
    },
    {
        from: Float32Array,
        to: Int32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, -2147483648, -2147483648, -2147483648, -32769, -32768, -32767, -129, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, -2147483648, -2147483648, -2147483648, 0, 0],
    },
    {
        from: Float32Array,
        to: Uint32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 2147483648, 2147483648, 2147483648, 4294934527, 4294934528, 4294934529, 4294967167, 4294967168, 4294967169, 4294967295, 4294967295, 4294967295, 4294967295, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, 2147483648, 2147483648, 2147483648, 0, 0],
    },
    {
        from: Float32Array,
        to: Float32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [-Infinity, -2147483648, -2147483648, -2147483648, -32769, -32768, -32767, -129, -128, -127, -1.600000023841858, -1.5, -1.399999976158142, -1, -0, 0, 1, 1.399999976158142, 1.5, 1.600000023841858, 127, 128, 129, 32767, 32768, 32769, 2147483648, 2147483648, 2147483648, Infinity, NaN],
    },
    {
        from: Float32Array,
        to: Float64Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [-Infinity, -2147483648, -2147483648, -2147483648, -32769, -32768, -32767, -129, -128, -127, -1.600000023841858, -1.5, -1.399999976158142, -1, -0, 0, 1, 1.399999976158142, 1.5, 1.600000023841858, 127, 128, 129, 32767, 32768, 32769, 2147483648, 2147483648, 2147483648, Infinity, NaN],
    },

    /* Float64Array */
    {
        from: Float64Array,
        to: Int8Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, -1, 0, 1, -1, 0, 1, 127, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, -128, -127, -1, 0, 1, -1, 0, 1, 0, 0],
    },
    {
        from: Float64Array,
        to: Uint8Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 255, 0, 1, 255, 0, 1, 127, 128, 129, 255, 255, 255, 255, 0, 0, 1, 1, 1, 1, 127, 128, 129, 255, 0, 1, 255, 0, 1, 0, 0],
    },
    {
        from: Float64Array,
        to: Uint8ClampedArray,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 127, 128, 129, 255, 255, 255, 255, 255, 255, 255, 0],
    },
    {
        from: Float64Array,
        to: Int16Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, -1, 0, 1, 32767, -32768, -32767, -129, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, -32768, -32767, -1, 0, 1, 0, 0],
    },
    {
        from: Float64Array,
        to: Uint16Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 65535, 0, 1, 32767, 32768, 32769, 65407, 65408, 65409, 65535, 65535, 65535, 65535, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, 65535, 0, 1, 0, 0],
    },
    {
        from: Float64Array,
        to: Int32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 2147483647, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1, -1, -1, -1, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, -2147483648, -2147483647, 0, 0],
    },
    {
        from: Float64Array,
        to: Uint32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [0, 2147483647, 2147483648, 2147483649, 4294934527, 4294934528, 4294934529, 4294967167, 4294967168, 4294967169, 4294967295, 4294967295, 4294967295, 4294967295, 0, 0, 1, 1, 1, 1, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, 0, 0],
    },
    {
        from: Float64Array,
        to: Float32Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [-Infinity, -2147483648, -2147483648, -2147483648, -32769, -32768, -32767, -129, -128, -127, -1.600000023841858, -1.5, -1.399999976158142, -1, -0, 0, 1, 1.399999976158142, 1.5, 1.600000023841858, 127, 128, 129, 32767, 32768, 32769, 2147483648, 2147483648, 2147483648, Infinity, NaN],
    },
    {
        from: Float64Array,
        to: Float64Array,
        values: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
        expected: [-Infinity, -2147483649, -2147483648, -2147483647, -32769, -32768, -32767, -129, -128, -127, -1.6, -1.5, -1.4, -1, -0, 0, 1, 1.4, 1.5, 1.6, 127, 128, 129, 32767, 32768, 32769, 2147483647, 2147483648, 2147483649, Infinity, NaN],
    },
];

for (let {from, to, values, expected} of tests) {
    let ta = new from(values);
    ta.constructor = to;
    assert.compareArray(ta.slice(0), expected, `${from.name} -> ${to.name}`);
}

