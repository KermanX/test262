// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Math-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
assertNear(Math.expm1(1e-300), 1e-300);
assertNear(Math.expm1(1e-100), 1e-100);
assertNear(Math.expm1(1e-14), 1.000000000000005e-14);
assertNear(Math.expm1(1e-6), 0.0000010000005000001665);

var expm1_data = [
    [ -1.875817529344e-70, -1.875817529344e-70 ],
    [ -7.09962844069878e-15, -7.099628440698755e-15 ],
    [ -2.114990849122478e-10, -2.1149908488988187e-10 ],
    [ -0.0000031404608812881633, -0.000003140455950046052 ],

    [ -0.0000011039855962733358, -0.0000011039849868814618 ],
    [ -0.000015114666893502755, -0.0000151145526675006 ],
    [ -0.000033870281179478836, -0.000033869707587981166 ],
    [ -0.00043952149320897676, -0.00043942491778698985 ],
    [ -0.005553725496786973, -0.005538332073473123 ],
    [ -0.05122020579778827, -0.049930563302241604 ],
    [ -0.4721357117742938, -0.3763311320344197 ],
    [ -1.2781607348262256, -0.7214508446489242 ],

    [ 1.875817529344e-70, 1.875817529344e-70 ],
    [ 6.261923313140869e-30, 6.261923313140869e-30 ],
    [ 7.09962844069878e-15, 7.099628440698805e-15 ],
    [ 1.3671879628418538e-12, 1.3671879628427884e-12 ],
    [ 2.114990849122478e-10, 2.1149908493461373e-10 ],
    [ 1.6900931765206906e-8, 1.6900931908027652e-8 ],
    [ 0.0000031404608812881633, 0.0000031404658125405988 ],

    [ 0.0000011039855962733358, 0.0000011039862056656584 ],
    [ 0.000015114666893502755, 0.000015114781120655907 ],
    [ 0.000033870281179478836, 0.00003387085478392845 ],
    [ 0.00043952149320897676, 0.0004396180969330924 ],
    [ 0.005553725496786973, 0.005569176019645543 ],
    [ 0.05122020579778827, 0.05255464640120383 ],
    [ 0.4721357117742938, 0.6034149712523235 ],
    [ 1.2781607348262256, 2.590030631181154 ],

    [ 3.0693960800487883, 20.528897017773147 ],
    [ 5.560441648750136, 258.9376120972927 ],
    [ 7.4227656046482595, 1672.6557833191303 ],
    [ 11.378926299184645, 87458.07941992789 ],
];

for (var [x, y] of expm1_data)
    assertNear(Math.expm1(x), y);

var sloppy_tolerance = 34;

var expm1_data_sloppy = [
    [ 20.11881628179155, 546375092.2355127 ],
    [ 33.45034324980283, 336743709091858.2 ],
    [ 46.43974518513109, 147409364838076710000 ],
    [ 54.60105936314322, 5.163435870507142e+23 ],
    [ 84.29619209850242, 4.067907545704549e+36 ],
    [ 125.38131800315817, 2.8340959047812913e+54 ],
    [ 216.85489905212918, 1.5096839294759775e+94 ],
];

for (var [x, y] of expm1_data_sloppy)
    assertNear(Math.expm1(x), y, sloppy_tolerance);

