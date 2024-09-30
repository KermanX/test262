// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-regress-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Igor Bukanov
 */

// Test that we can terminate looping array enumeration
function test() {
    if (typeof timeout != "function")
	return;

    var p = new Proxy({}, { onwKeys: function() { return Array(1e9); }});

    expectExitCode(6);
    timeout(0.001);

    var n = 0;
    for (i in p) { ++n;}
    return n;
}

test();
