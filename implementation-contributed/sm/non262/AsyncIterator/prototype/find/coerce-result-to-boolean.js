// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
features:
- AsyncIterator
- IsHTMLDDA
includes: [non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
async function* gen(value) {
  yield value;
}
const fn = x => x;
function check(value, expected) {
  gen(value).find(fn).then(result => assert.sameValue(result, expected));
}

check(true, true);
check(1, 1);
check('test', 'test');

check(false, undefined);
check(0, undefined);
check('', undefined);
check(null, undefined);
check(undefined, undefined);
check(NaN, undefined);
check(-0, undefined);
check(0n, undefined);
check(Promise.resolve(false), undefined);

let array = [];
check(array, array);

let object = {};
check(object, object);

const htmlDDA = createIsHTMLDDA();
check(htmlDDA, undefined);

