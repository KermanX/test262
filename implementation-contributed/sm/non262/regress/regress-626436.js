// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributors: Christian Holler <decoder@own-hero.net>, Jesse Ruderman <jruderman@gmail.com>

(1 ? 2 : delete(0 ? 0 : {})).x;

