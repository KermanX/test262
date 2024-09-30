// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-String-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Generated by make_unicode.py DO NOT MODIFY */
/* Unicode version: 15.0.0 */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var onlySpace = String.fromCharCode(
    0x0009 /* <control> (CHARACTER TABULATION) */,
    0x000A /* <control> (LINE FEED (LF)) */,
    0x000B /* <control> (LINE TABULATION) */,
    0x000C /* <control> (FORM FEED (FF)) */,
    0x000D /* <control> (CARRIAGE RETURN (CR)) */,
    0x0020 /* SPACE */,
    0x00A0 /* NO-BREAK SPACE (NON-BREAKING SPACE) */,
    0x1680 /* OGHAM SPACE MARK */,
    0x2000 /* EN QUAD */,
    0x2001 /* EM QUAD */,
    0x2002 /* EN SPACE */,
    0x2003 /* EM SPACE */,
    0x2004 /* THREE-PER-EM SPACE */,
    0x2005 /* FOUR-PER-EM SPACE */,
    0x2006 /* SIX-PER-EM SPACE */,
    0x2007 /* FIGURE SPACE */,
    0x2008 /* PUNCTUATION SPACE */,
    0x2009 /* THIN SPACE */,
    0x200A /* HAIR SPACE */,
    0x2028 /* LINE SEPARATOR */,
    0x2029 /* PARAGRAPH SEPARATOR */,
    0x202F /* NARROW NO-BREAK SPACE */,
    0x205F /* MEDIUM MATHEMATICAL SPACE */,
    0x3000 /* IDEOGRAPHIC SPACE */,
    0xFEFF /* ZERO WIDTH NO-BREAK SPACE (BYTE ORDER MARK) */
);

assert.sameValue(onlySpace.trim(), "");
assert.sameValue((onlySpace + 'aaaa').trim(), 'aaaa');
assert.sameValue(('aaaa' + onlySpace).trim(), 'aaaa');
assert.sameValue((onlySpace + 'aaaa' + onlySpace).trim(), 'aaaa');

