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
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 503860;
var summary = "Don't shadow a readonly or setter proto-property";
var expect = "PASS";
var actual = "FAIL";
var a = {y: 1};

function B(){}
B.prototype.__defineSetter__('x', function setx(val) { actual = expect; });
var b = new B;
b.y = 1;

var arr = [a, b];       // same shape prior to bug 497789 fix
for (var obj of arr)
    obj.x = 2;          // should call b's setter but doesn't

assert.sameValue(expect, actual, summary);
