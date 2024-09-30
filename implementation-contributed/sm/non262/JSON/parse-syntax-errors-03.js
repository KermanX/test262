// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-JSON-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

testJSON('[', true);
testJSON('[1', true);
testJSON('[1,]', true);
testJSON('[1,{', true);
testJSON('[1,}', true);
testJSON('[1,{]', true);
testJSON('[1,}]', true);
testJSON('[1,{"', true);
testJSON('[1,}"', true);
testJSON('[1,{"\\', true);
testJSON('[1,}"\\', true);
testJSON('[1,"', true);
testJSON('[1,"\\', true);

testJSON('{', true);
testJSON('{1', true);
testJSON('{,', true);
testJSON('{"', true);
testJSON('{"\\', true);
testJSON('{"\\u', true);
testJSON('{"\\uG', true);
testJSON('{"\\u0', true);
testJSON('{"\\u01', true);
testJSON('{"\\u012', true);
testJSON('{"\\u0123', true);
testJSON('{"\\u0123"', true);
testJSON('{"a"', true);
testJSON('{"a"}', true);
testJSON('{"a":', true);
testJSON('{"a",}', true);
testJSON('{"a":}', true);
testJSON('{"a":,}', true);
testJSON('{"a":5,}', true);
testJSON('{"a":5,[', true);
testJSON('{"a":5,"', true);
testJSON('{"a":5,"', true);
testJSON('{"a":5,"\\', true);
testJSON("a[false ]".substring(1, 7) /* "[false" */, true);

testJSON('this', true);

testJSON('[1,{}]', false);
testJSON('{}', false);
testJSON('{"a":5}', false);
testJSON('{"\\u0123":5}', false);

/******************************************************************************/

print("Tests complete");
