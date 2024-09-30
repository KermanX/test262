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
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function isSyntaxError(code) {
  try {
    eval(code);
    return false;
  } catch (exception) {
    if (SyntaxError.prototype.isPrototypeOf(exception))
      return true;
    throw exception;
  };
};

/* 
 * Duplicate parameter names must be tolerated (as per ES3), unless
 * the parameter list uses destructuring, in which case we claim the
 * user has opted in to a modicum of sanity, and we forbid duplicate
 * parameter names.
 */
assert.sameValue(isSyntaxError("function f(x,x){}"),                false);

assert.sameValue(isSyntaxError("function f(x,[x]){})"),             true);
assert.sameValue(isSyntaxError("function f(x,{y:x}){})"),           true);
assert.sameValue(isSyntaxError("function f(x,{x}){})"),             true);

assert.sameValue(isSyntaxError("function f([x],x){})"),             true);
assert.sameValue(isSyntaxError("function f({y:x},x){})"),           true);
assert.sameValue(isSyntaxError("function f({x},x){})"),             true);

assert.sameValue(isSyntaxError("function f([x,x]){}"),              true);
assert.sameValue(isSyntaxError("function f({x,x}){}"),              true);
assert.sameValue(isSyntaxError("function f({y:x,z:x}){}"),          true);

assert.sameValue(isSyntaxError("function f(x,x,[y]){}"),            true);
assert.sameValue(isSyntaxError("function f(x,x,{y}){}"),            true);
assert.sameValue(isSyntaxError("function f([y],x,x){}"),            true);
assert.sameValue(isSyntaxError("function f({y},x,x){}"),            true);

assert.sameValue(isSyntaxError("function f(a,b,c,d,e,f,g,h,b,[y]){}"),  true);
assert.sameValue(isSyntaxError("function f([y],a,b,c,d,e,f,g,h,a){}"),  true);
assert.sameValue(isSyntaxError("function f([a],b,c,d,e,f,g,h,i,a){}"),  true);
assert.sameValue(isSyntaxError("function f(a,b,c,d,e,f,g,h,i,[a]){}"),  true);
assert.sameValue(isSyntaxError("function f(a,b,c,d,e,f,g,h,i,[a]){}"),  true);

