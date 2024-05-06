// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
const optionsList = [
    {minimumFractionDigits: -0, maximumFractionDigits: -0},
    {minimumFractionDigits: -0, maximumFractionDigits: +0},
    {minimumFractionDigits: +0, maximumFractionDigits: -0},
    {minimumFractionDigits: +0, maximumFractionDigits: +0},
];

for (let options of optionsList) {
    let numberFormat = new Intl.NumberFormat("en-US", options);

    let {minimumFractionDigits, maximumFractionDigits} = numberFormat.resolvedOptions();
    assert.sameValue(minimumFractionDigits, +0);
    assert.sameValue(maximumFractionDigits, +0);

    assert.sameValue(numberFormat.format(123), "123");
}

