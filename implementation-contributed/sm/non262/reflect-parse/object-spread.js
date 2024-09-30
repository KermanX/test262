// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-reflect-parse-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function property(key, value = key, shorthand = key === value) {
    return { key, value, shorthand };
}

function test() {
    // Any expression can be spreaded.
    assertExpr("({...x})", objExpr([spread(ident("x"))]));
    assertExpr("({...f()})", objExpr([spread(callExpr(ident("f"), []))]));
    assertExpr("({...123})", objExpr([spread(lit(123))]));

    // Multiple spread expression are allowed.
    assertExpr("({...x, ...obj.p})", objExpr([spread(ident("x")), spread(dotExpr(ident("obj"), ident("p")))]));

    // Spread expression can appear anywhere in an object literal.
    assertExpr("({p, ...x})", objExpr([property(ident("p")), spread(ident("x"))]));
    assertExpr("({p: a, ...x})", objExpr([property(ident("p"), ident("a")), spread(ident("x"))]));
    assertExpr("({...x, p: a})", objExpr([spread(ident("x")), property(ident("p"), ident("a"))]));

    // Trailing comma after spread expression is allowed.
    assertExpr("({...x,})", objExpr([spread(ident("x"))]));

    // __proto__ is not special in spread expressions.
    assertExpr("({...__proto__})", objExpr([spread(ident("__proto__"))]));
    assertExpr("({...__proto__, ...__proto__})", objExpr([spread(ident("__proto__")), spread(ident("__proto__"))]));
}

runtest(test);
