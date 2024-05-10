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
if (typeof getAvailableLocalesOf === "undefined") {
  var getAvailableLocalesOf = SpecialPowers.Cu.getJSTestingFunctions().getAvailableLocalesOf;
}

function IsIntlService(c) {
  return typeof c === "function" &&
         c.hasOwnProperty("prototype") &&
         c.prototype.hasOwnProperty("resolvedOptions");
}

const intlConstructors = Object.getOwnPropertyNames(Intl).map(name => Intl[name]).filter(IsIntlService);

// Test all Intl service constructors.
for (let intlConstructor of intlConstructors) {
  // Retrieve all available locales of the given Intl service constructor.
  let available = getAvailableLocalesOf(intlConstructor.name);
  let availableSet = new Set(available);

  available.filter(x => {
    return new Intl.Locale(x);
  }).filter(loc => {
    // Find all locales which have both a script and a region subtag.
    return loc.script && loc.region;
  }).forEach(loc => {
    let noScript = `${loc.language}-${loc.region}`;

    // The locale without a script subtag must also be available.
    assert.sameValue(availableSet.has(noScript), true, `Missing locale ${noScript} for ${loc}`);
  });
}

