// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-shell.js, non262-strict-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/**
 * These test cases check implementation-specific error messages for invalid
 * octal literals, octal escape sequences, and non-octal decimal escape
 * sequences in strings in strict mode code, where the error can't be reported
 * at time of tokenization.
 */
var JSMSG_DEPRECATED_OCTAL_LITERAL = "\"0\"-prefixed octal literals are deprecated; use the \"0o\" prefix instead";
var JSMSG_DEPRECATED_OCTAL_ESCAPE = "octal escape sequences can't be used in untagged template literals or in strict mode code";
var JSMSG_DEPRECATED_EIGHT_OR_NINE_ESCAPE = "the escapes \\8 and \\9 can't be used in untagged template literals or in strict mode code";

function checkPrologue(val, msg) {
  assertThrowsInstanceOfWithMessage(
    () => eval('function invalid () { "' + val + '"; "use strict"; }'),
    SyntaxError,
    msg
  );
}

checkPrologue('\\8', JSMSG_DEPRECATED_EIGHT_OR_NINE_ESCAPE);
checkPrologue('\\222', JSMSG_DEPRECATED_OCTAL_ESCAPE);
checkPrologue('\\222\\8', JSMSG_DEPRECATED_EIGHT_OR_NINE_ESCAPE);

function checkAfter(val, msg) {
  assertThrowsInstanceOfWithMessage(
    () => eval('function invalid () { "use strict" \n ' + val + ' }'),
    SyntaxError,
    msg
  );
}

checkAfter('0755', JSMSG_DEPRECATED_OCTAL_LITERAL);
checkAfter('"\\8"', JSMSG_DEPRECATED_EIGHT_OR_NINE_ESCAPE);
checkAfter('"\\222"', JSMSG_DEPRECATED_OCTAL_ESCAPE);
checkAfter('"\\222\\8"', JSMSG_DEPRECATED_EIGHT_OR_NINE_ESCAPE);

