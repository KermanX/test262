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

var gTestfile = 'stringify-replacer-array-hijinks.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 648471;
var summary =
  "Better/more correct handling for replacer arrays with getter array index " +
  "properties";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var bigOdd = Math.pow(2, 50) + 1;

function two()
{
  return Math.random() < 0.5 ? 2 : "2";
}

assert.sameValue(JSON.stringify({ 1: 1 }, [1, 1]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [1, "1"]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [1, bigOdd % two()]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, ["1", 1]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, ["1", "1"]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, ["1", bigOdd % two()]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [bigOdd % two(), 1]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [bigOdd % two(), "1"]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [bigOdd % two(), bigOdd % two()]), '{"1":1}');


assert.sameValue(JSON.stringify({ 1: 1 }, [1, new String(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [1, new Number(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, ["1", new Number(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, ["1", new String(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [bigOdd % two(), new Number(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [bigOdd % two(), new String(1)]), '{"1":1}');


assert.sameValue(JSON.stringify({ 1: 1 }, [new String(1), new String(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [new String(1), new Number(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [new Number(1), new String(1)]), '{"1":1}');

assert.sameValue(JSON.stringify({ 1: 1 }, [new Number(1), new Number(1)]), '{"1":1}');

/******************************************************************************/

print("Tests complete");
