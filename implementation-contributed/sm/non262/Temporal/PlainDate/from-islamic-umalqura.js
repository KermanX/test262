// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Temporal-PlainDate-shell.js, non262-Temporal-shell.js, non262-shell.js,
    shell.js]
flags:
- noStrict
features:
- Temporal
description: |
  pending
esid: pending
---*/

// https://github.com/unicode-org/icu4x/issues/4914
if (0) {
  let date = Temporal.PlainDate.from({
    calendar: "islamic-umalqura",
    year: -6823,
    monthCode: "M01",
    day: 1,
  });
  assert.sameValue(date.day, 1);
}

