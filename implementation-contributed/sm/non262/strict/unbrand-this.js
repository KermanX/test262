// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
/*---
includes: [non262-shell.js, non262-strict-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/* Test JSOP_UNBRANDTHIS's behavior on object and non-object |this| values. */

function strict() {
  "use strict";
  this.insert = function(){ bar(); };
  function bar() {}
}

var exception;

// Try 'undefined' as a |this| value.
exception = null;
try {
  strict.call(undefined);
} catch (x) {
  exception = x;
}
assert.sameValue(exception instanceof TypeError, true);

// Try 'null' as a |this| value.
exception = null;
try {
  strict.call(null);
} catch (x) {
  exception = x;
}
assert.sameValue(exception instanceof TypeError, true);

// An object as a |this| value should be fine.
exception = null;
try {
  strict.call({});
} catch (x) {
  exception = x;
}
assert.sameValue(exception, null);

