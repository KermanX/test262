// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [compareArray.js, non262-RegExp-shell.js, non262-shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- lead and trail patterns in RegExpUnicodeEscapeSequence.";

print(BUGNUMBER + ": " + summary);

// ==== standalone ====

assert.compareArray(/\uD83D\uDC38/u.exec("\u{1F438}"),
              ["\u{1F438}"]);

// no unicode flag
assert.compareArray(/\uD83D\uDC38/.exec("\u{1F438}"),
              ["\u{1F438}"]);

// RegExp constructor
assert.compareArray(new RegExp("\\uD83D\\uDC38", "u").exec("\u{1F438}"),
              ["\u{1F438}"]);

// RegExp constructor, no unicode flag
assert.compareArray(new RegExp("\\uD83D\\uDC38", "").exec("\u{1F438}"),
              ["\u{1F438}"]);

// ==== ? ====

assert.compareArray(/\uD83D\uDC38?/u.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38?/u.exec(""),
              [""]);

// lead-only target
assert.compareArray(/\uD83D\uDC38?/u.exec("\uD83D"),
              [""]);

// no unicode flag
assert.compareArray(/\uD83D\uDC38?/.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.sameValue(/\uD83D\uDC38?/.exec(""),
         null);

assert.compareArray(/\uD83D\uDC38?/.exec("\uD83D"),
              ["\uD83D"]);

// RegExp constructor
assert.compareArray(new RegExp("\\uD83D\\uDC38?", "u").exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(new RegExp("\\uD83D\\uDC38?", "u").exec(""),
              [""]);

assert.compareArray(new RegExp("\\uD83D\\uDC38?", "u").exec("\uD83D"),
              [""]);

// RegExp constructor, no unicode flag
assert.compareArray(new RegExp("\\uD83D\\uDC38?", "").exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.sameValue(new RegExp("\\uD83D\\uDC38?", "").exec(""),
         null);

assert.compareArray(new RegExp("\\uD83D\\uDC38?", "").exec("\uD83D"),
              ["\uD83D"]);

// ==== + ====

assert.compareArray(/\uD83D\uDC38+/u.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38+/u.exec("\u{1F438}\u{1F438}"),
              ["\u{1F438}\u{1F438}"]);
assert.sameValue(/\uD83D\uDC38+/u.exec(""),
         null);

// lead-only target
assert.sameValue(/\uD83D\uDC38+/u.exec("\uD83D"),
         null);
assert.compareArray(/\uD83D\uDC38+/u.exec("\uD83D\uDC38\uDC38"),
              ["\uD83D\uDC38"]);

// no unicode flag
assert.compareArray(/\uD83D\uDC38+/.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38+/.exec("\u{1F438}\u{1F438}"),
              ["\u{1F438}"]);
assert.sameValue(/\uD83D\uDC38+/.exec("\uD83D"),
         null);
assert.compareArray(/\uD83D\uDC38+/.exec("\uD83D\uDC38\uDC38"),
              ["\uD83D\uDC38\uDC38"]);
assert.sameValue(/\uD83D\uDC38+/.exec(""),
         null);

// ==== * ====

assert.compareArray(/\uD83D\uDC38*/u.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38*/u.exec("\u{1F438}\u{1F438}"),
              ["\u{1F438}\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38*/u.exec(""),
              [""]);

// lead-only target
assert.compareArray(/\uD83D\uDC38*/u.exec("\uD83D"),
              [""]);
assert.compareArray(/\uD83D\uDC38*/u.exec("\uD83D\uDC38\uDC38"),
              ["\uD83D\uDC38"]);

// no unicode flag
assert.compareArray(/\uD83D\uDC38*/.exec("\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38*/.exec("\u{1F438}\u{1F438}"),
              ["\u{1F438}"]);
assert.compareArray(/\uD83D\uDC38*/.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83D\uDC38*/.exec("\uD83D\uDC38\uDC38"),
              ["\uD83D\uDC38\uDC38"]);
assert.sameValue(/\uD83D\uDC38*/.exec(""),
         null);

// ==== lead-only ====

// match only non-surrogate pair
assert.compareArray(/\uD83D/u.exec("\uD83D\uDBFF"),
              ["\uD83D"]);
assert.sameValue(/\uD83D/u.exec("\uD83D\uDC00"),
         null);
assert.sameValue(/\uD83D/u.exec("\uD83D\uDFFF"),
         null);
assert.compareArray(/\uD83D/u.exec("\uD83D\uE000"),
              ["\uD83D"]);

// match before non-tail char
assert.compareArray(/\uD83D/u.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/u.exec("\uD83DA"),
              ["\uD83D"]);

// no unicode flag
assert.compareArray(/\uD83D/.exec("\uD83D\uDBFF"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/.exec("\uD83D\uDC00"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/.exec("\uD83D\uDFFF"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/.exec("\uD83D\uE000"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83D/.exec("\uD83DA"),
              ["\uD83D"]);

// ==== trail-only ====

// match only non-surrogate pair
assert.compareArray(/\uDC38/u.exec("\uD7FF\uDC38"),
              ["\uDC38"]);
assert.sameValue(/\uDC38/u.exec("\uD800\uDC38"),
         null);
assert.sameValue(/\uDC38/u.exec("\uDBFF\uDC38"),
         null);
assert.compareArray(/\uDC38/u.exec("\uDC00\uDC38"),
              ["\uDC38"]);

// match after non-lead char
assert.compareArray(/\uDC38/u.exec("\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/u.exec("A\uDC38"),
              ["\uDC38"]);

// no unicode flag
assert.compareArray(/\uDC38/.exec("\uD7FF\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/.exec("\uD800\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/.exec("\uDBFF\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/.exec("\uDC00\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/.exec("\uDC38"),
              ["\uDC38"]);
assert.compareArray(/\uDC38/.exec("A\uDC38"),
              ["\uDC38"]);

// ==== invalid trail ====

assert.compareArray(/\uD83D\u3042*/u.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83D\u3042*/u.exec("\uD83D\u3042"),
              ["\uD83D\u3042"]);
assert.compareArray(/\uD83D\u3042*/u.exec("\uD83D\u3042\u3042"),
              ["\uD83D\u3042\u3042"]);

assert.compareArray(/\uD83D\u{3042}*/u.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83D\u{3042}*/u.exec("\uD83D\u3042"),
              ["\uD83D\u3042"]);
assert.compareArray(/\uD83D\u{3042}*/u.exec("\uD83D\u3042\u3042"),
              ["\uD83D\u3042\u3042"]);

assert.compareArray(/\uD83DA*/u.exec("\uD83D"),
              ["\uD83D"]);
assert.compareArray(/\uD83DA*/u.exec("\uD83DA"),
              ["\uD83DA"]);
assert.compareArray(/\uD83DA*/u.exec("\uD83DAA"),
              ["\uD83DAA"]);

// ==== wrong patterns ====

assertThrowsInstanceOf(() => eval(`/\\u/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\u0/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\u00/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\u000/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\u000G/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\u0.00/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u0/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u00/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u000/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u000G/u`), SyntaxError);
assertThrowsInstanceOf(() => eval(`/\\uD83D\\u0.00/u`), SyntaxError);

