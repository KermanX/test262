// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Intl
- addIntlExtras
description: |
  pending
esid: pending
---*/
addMozIntlDisplayNames(this);

const tests = {
  "en": {
    long: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    // short: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    short: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    narrow: ["M", "T", "W", "T", "F", "S", "S"],
  },
  "de": {
    long: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    // short: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    short: ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."],
    narrow: ["M", "D", "M", "D", "F", "S", "S"],
  },
  "fr": {
    long: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
    // short: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."],
    short: ["lu", "ma", "me", "je", "ve", "sa", "di"],
    narrow: ["L", "M", "M", "J", "V", "S", "D"],
  },
  "zh": {
    long: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    short: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    narrow: ["一", "二", "三", "四", "五", "六", "日"],
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  let defaultCalendar = new Intl.DateTimeFormat(locale).resolvedOptions().calendar;

  for (let [style, styleTests] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "weekday", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.locale, locale);
    assert.sameValue(resolved.calendar, defaultCalendar);
    assert.sameValue(resolved.style, style);
    assert.sameValue(resolved.type, "weekday");
    assert.sameValue(resolved.fallback, "code");

    for (let i = 0; i < 7; i++) {
      assert.sameValue(dn.of(i + 1), styleTests[i]);

      // Also works with strings.
      assert.sameValue(dn.of(String(i + 1)), styleTests[i]);

      // Also works with objects.
      assert.sameValue(dn.of(Object(i + 1)), styleTests[i]);
    }
  }
}

{
  let dn = new Intl.DisplayNames("en", {type: "weekday"});

  // Performs ToString on the input and then validates the stringified result.
  assertThrowsInstanceOf(() => dn.of(), RangeError);
  assertThrowsInstanceOf(() => dn.of(null), RangeError);
  assertThrowsInstanceOf(() => dn.of(Symbol()), TypeError);

  // Throws an error if |code| isn't an integer.
  assertThrowsInstanceOf(() => dn.of(1.5), RangeError);
  assertThrowsInstanceOf(() => dn.of(-Infinity), RangeError);
  assertThrowsInstanceOf(() => dn.of(Infinity), RangeError);
  assertThrowsInstanceOf(() => dn.of(NaN), RangeError);

  // Throws an error if outside of [1, 7].
  assertThrowsInstanceOf(() => dn.of(-1), RangeError);
  assertThrowsInstanceOf(() => dn.of(0), RangeError);
  assertThrowsInstanceOf(() => dn.of(8), RangeError);
}

