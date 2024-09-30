// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [non262-Math-shell.js, non262-shell.js, shell.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/for (var i = -20; i < 20; i++)
    assertNear(Math.sinh(i), (Math.exp(i) - Math.exp(-i)) / 2);

assert.sameValue(Math.sinh(1000), Infinity);
assert.sameValue(Math.sinh(Number.MAX_VALUE), Infinity);
assertNear(Math.sinh(1e-30), 1e-30);
assertNear(Math.sinh(1e-10), 1e-10);

var sinh_data = [
    [-6.902103625349695, -497.1816406250001],
    [-6.898143347143859, -495.21655273437517],
    [-6.883664481302669, -488.0980224609375],
    [-6.880304842490273, -486.46093750000006],
    [-6.871561546509046, -482.2261962890624],
    [-6.841973895837549, -468.167236328125],
    [-6.836376331805493, -465.5539550781251],
    [-6.833654100575195, -464.2883300781251],
    [-6.8320816635009045, -463.55883789062483],
    [-6.8108680173663085, -453.82861328125],
    [-6.799689165151487, -448.78356933593756],
    [-6.793579326246197, -446.0499267578126],
    [-6.762510387544996, -432.4046630859374],
    [-6.743225720989222, -424.14575195312506],
    [-6.691758395994307, -402.86828613281244],
    [-6.690743430063694, -402.4595947265625],
    [-6.6596501292114505, -390.1383056640624],
    [-6.652956360641761, -387.5355224609375],
    [-6.635954365364267, -381.00231933593767],
    [-6.619587562578274, -374.81726074218744],
    [-6.617681179427804, -374.10339355468744],
    [-6.614762741096185, -373.0131835937501],
    [-6.60690568753706,  -370.0938720703124],
    [-6.591738907156094, -364.5230712890626],
    [-6.583066984213974, -361.3756103515625],
    [-6.573999516974134, -358.1136474609374],
    [-6.553610904389896, -350.8861083984376],
    [-6.553097634736138, -350.7060546875001],
    [-6.538320325468202, -345.56164550781267],
    [-6.529090881007076, -342.386962890625],
    [-6.527791927233787, -341.94250488281256],
    [-6.514383886150781, -337.38830566406244],
    [-6.488639771044976, -328.8133544921875],
    [-6.480460592697477, -326.13488769531256],
    [-6.439759999015992, -313.1274414062499],
    [-6.434927968512049, -311.61804199218744],
    [-6.4082177348965725, -303.4047851562501],
    [-6.369671035834965, -291.93200683593756],
    [-6.362310184909175, -289.79101562500006],
    [-6.356373428913315, -288.0756835937499],
    [-6.337756593913614, -282.76220703125006],
    [-6.32424009706147,  -278.96594238281256],
    [-6.314232650754295, -276.18811035156256],
    [-6.290994606392703, -269.8439941406249],
    [-6.240182555852785, -256.4750976562499],
    [-6.2102675039793604, -248.9161987304687],
    [-6.197335184435549, -245.71783447265628],
    [-6.194021350132335, -244.90490722656253],
    [-6.184119163536406, -242.4917602539062],
    [-6.104686221071835, -223.97491455078116],
    [-6.100669325836893, -223.07702636718747],
    [-6.093582856519022, -221.50177001953122],
    [-6.0598807500687935, -214.16101074218741],
    [-6.0062142965262515, -202.97058105468741],
    [-5.9923121073369945, -200.1683349609375],
    [-5.981859446096083, -198.08691406249997],
    [-5.9497792165852905, -191.83300781250006],
    [-5.90509449745879,  -183.44958496093747],
    [-5.902097012275789, -182.90051269531256],
    [-5.8144483910067954, -167.55175781250006],
    [-5.786154254111214, -162.8773803710938],
    [-5.765917008989405, -159.61425781250006],
    [-5.703902219845274, -150.0162963867188],
    [-5.6926689504460395, -148.34051513671872],
    [-5.685206387751923, -147.23760986328122],
    [-5.660572815631807, -143.6548461914062],
    [-5.625516713960633, -138.70599365234375],
    [-5.476934234171879, -119.55416870117192],
    [-5.467584665632571, -118.4415588378906],
    [-5.417932675603434, -112.70410156250004],
    [-5.406565756574079, -111.43020629882811],
    [-5.373195678988387, -107.77297973632808],
    [-5.3723285712183735, -107.67956542968749],
    [-5.348004040102253, -105.09179687499999],
    [-5.31087758970896,  -101.261474609375],
    [-5.255348419702703, -95.79150390624997],
    [-5.206986845736275, -91.26885986328122],
    [-5.162914035396619, -87.33349609375003],
    [-5.052952927749896, -78.23873901367186],
    [-5.048772883924985, -77.91235351562501],
    [-5.034848487644809, -76.83489990234378],
    [-4.808269821238499, -61.25564575195312],
    [-4.689849459883311, -54.413803100585945],
    [-4.476720236388958, -43.96719360351561],
    [-4.431216695067421, -42.01084899902342],
    [-4.114720236218123, -30.60937499999999],
    [-3.9785790831656023, -26.711166381835938],
    [-3.9220215830953484, -25.24131774902344],
    [-3.3770026324620295, -14.624359130859379],
    [-3.214961448471211, -12.431087493896483],
    [-3.021397455139021, -10.235607147216797],
    [-2.937831931335705, -9.41094970703125],
    [-1.267878515574959, -1.6359391212463381],
    [1.6504814008555524e-12, 1.6504814008555524e-12],
    [2.0654207510961697e-12, 2.0654207510961697e-12],
    [6.933230031758164e-12, 6.933230031758164e-12],
    [1.3351444949627478e-11, 1.3351444949627478e-11],
    [1.6399812063916386e-11, 1.6399812063916386e-11],
    [5.730159402528301e-11, 5.730159402528301e-11],
    [1.113731329382972e-10, 1.113731329382972e-10],
    [1.4214707189097453e-10, 1.4214707189097453e-10],
    [3.8006320313144215e-10, 3.8006320313144215e-10],
    [6.09162720266454e-10, 6.09162720266454e-10],
    [1.0221641311147778e-9, 1.0221641311147778e-9],
    [2.8819222563924995e-9, 2.8819222563924995e-9],
    [4.7627768395841485e-9, 4.7627768395841485e-9],
    [8.854133426439148e-9, 8.854133426439148e-9],
    [2.305032609228874e-8, 2.3050326092288742e-8],
    [5.939249092534734e-8, 5.9392490925347374e-8],
    [1.1667648891489053e-7, 1.166764889148908e-7],
    [2.379967440901942e-7, 2.3799674409019644e-7],
    [4.6846594159431437e-7, 4.684659415943315e-7],
    [9.382699772685088e-7, 9.382699772686465e-7],
    [0.0000011039855962733358, 0.00000110398559627356],
    [0.000003291776010877096, 0.0000032917760108830407],
    [0.000007517213816683722, 0.00000751721381675452],
    [0.000015114666893502755, 0.000015114666894078255],
    [0.00002986399339999406, 0.00002986399340443313],
    [0.000033870281179478836, 0.00003387028118595481],
    [0.00009066011977069884, 0.00009066011989489198],
    [0.00021949532498377364, 0.00021949532674625516],
    [0.00043952149320897676, 0.00043952150736004114],
    [0.0006333151408864353, 0.0006333151832222939],
    [0.0011151230445582744, 0.001115123275667429],
    [0.0019624658370807177, 0.001962467096745968],
    [0.005553725496786973, 0.005553754046559334],
    [0.008691018931968294, 0.008691128343343735],
    [0.02992889492062484, 0.02993336319923401],
    [0.05122020579778827, 0.05124260485172272],
    [0.1117800293787828, 0.11201295256614685],
    [0.23269806521543376, 0.23480379581451416],
    [0.4721357117742938, 0.4898730516433716],
    [0.694611571189336,  0.7518312931060792],
    [1.2781607348262256, 1.6557407379150393],
    [1.9917262343245115, 3.5958566665649414],
    [2.009484184971722,  3.6627054214477544],
    [2.128787712416205,  4.142845153808595],
    [2.4846967934155475, 5.95706558227539],
    [3.083125584533294,  10.890350341796875],
    [4.002981567623351,  27.3714599609375],
    [4.080736210902826,  29.586067199707028],
    [4.120845430011113,  30.79753875732421],
    [4.351258506393416,  38.78157043457031],
    [4.540883728536112,  46.88148498535155],
    [4.547981853382592,  47.21551513671875],
    [4.5480891170767,    47.220581054687514],
    [4.599728302509061,  49.72361755371096],
    [4.8131842711857535, 61.557464599609396],
    [4.910082619934558,  67.82162475585939],
    [4.924747230639767,  68.82363891601564],
    [4.993937439635391,  73.75466918945312],
    [5.087099712053554,  80.95669555664065],
    [5.1389346970196295, 85.26406860351562],
    [5.138977285472121,  85.26770019531251],
    [5.223879832616765,  92.82385253906247],
    [5.241812789460327,  94.50357055664062],
    [5.447141014648796,  116.04467773437499],
    [5.511633288238573,  123.77554321289061],
    [5.578681289305598,  132.3592529296875],
    [5.633110296634631,  139.76330566406253],
    [5.662701238627725,  143.96093750000003],
    [5.678906941005323,  146.31298828124997],
    [5.737214893086866,  155.0980224609375],
    [5.739660763047893,  155.4778442382812],
    [5.741349685869528,  155.74066162109372],
    [5.790614371552514,  163.60546874999994],
    [5.879059869096351,  178.73510742187494],
    [5.884458728291027,  179.70269775390622],
    [5.885109945587401,  179.8197631835937],
    [5.893636014368936,  181.35949707031256],
    [5.965274032538233,  194.82861328125003],
    [5.967346683696556,  195.23284912109375],
    [5.986843466070591,  199.07666015624994],
    [6.019932686217942,  205.77423095703134],
    [6.021252909681261,  206.0460815429687],
    [6.037231102920489,  209.36480712890634],
    [6.043606439928324,  210.70385742187506],
    [6.06478541011501,   215.21398925781244],
    [6.112974120371601,  225.83892822265622],
    [6.117902255760311,  226.95465087890622],
    [6.1433256889594094, 232.79864501953136],
    [6.176483527820343,  240.64721679687503],
    [6.186757751007361,  243.13244628906241],
    [6.219667373726848,  251.26702880859372],
    [6.229418088083555,  253.72906494140634],
    [6.233184983047428,  254.68664550781241],
    [6.243005711460192,  257.20019531250006],
    [6.245102704489327,  257.74011230468744],
    [6.260468857392134,  261.73120117187506],
    [6.268152459140511,  263.74999999999994],
    [6.2748285545831655, 265.5167236328125],
    [6.305976070434008,  273.9171142578125],
    [6.32399546069982,   278.8977050781249],
    [6.324961403980197,  279.16723632812506],
    [6.370613506132747,  292.20727539062494],
    [6.375359978930309,  293.59753417968744],
    [6.3766447200146,    293.9749755859376],
    [6.380802563199264,  295.19982910156244],
    [6.387824152942429,  297.27990722656244],
    [6.390003820200831,  297.9285888671876],
    [6.3905985680679,    298.10583496093744],
    [6.397866642974941,  300.2803955078125],
    [6.421725738171608,  307.5310058593751],
    [6.423818963102848,  308.17541503906244],
    [6.428865255911759,  309.7344970703124],
    [6.443449261058927,  314.28479003906244],
    [6.444844602076255,  314.7236328125],
    [6.464094341970107,  320.84069824218756],
    [6.465356699668166,  321.24597167968744],
    [6.467400466944125,  321.90319824218756],
    [6.472218114936839,  323.457763671875],
    [6.4947499213823265, 330.8286132812501],
    [6.507305446835735,  335.00854492187483],
    [6.524202033435675,  340.71716308593756],
    [6.546694993078936,  348.46777343749994],
    [6.548591493378012,  349.1292724609374],
    [6.613194950203132,  372.4288330078126],
    [6.6247505436339065, 376.7574462890626],
    [6.629181796246806,  378.43066406249994],
    [6.6616087711302185, 390.9031982421874],
    [6.698989091751707,  405.79187011718744],
    [6.702857353572475,  407.3646240234375],
    [6.717505881986416,  413.37585449218756],
    [6.723197804327891,  415.73547363281256],
    [6.726699007993023,  417.1936035156251],
    [6.735483889307782,  420.87475585937483],
    [6.755219602793124,  429.26354980468756],
    [6.756366380816258,  429.75610351562506],
    [6.766177290841293,  433.99316406250006],
    [6.766217511883346,  434.01062011718767],
    [6.780091308338912,  440.0739746093749],
    [6.802889310303153,  450.22204589843744],
    [6.813484439494547,  455.017578125],
    [6.818196843455478,  457.16687011718744],
    [6.818940201487998,  457.50683593749994],
    [6.822833193143805,  459.29138183593756],
    [6.82327083544577,   459.49243164062506],
    [6.823817951018,     459.743896484375],
    [6.834945773756887,  464.8884277343749],
    [6.835113285253827,  464.96630859375017],
    [6.840964582694129,  467.6949462890624],
    [6.84346890521034,   468.86767578125017],
    [6.847141429556457,  470.5927734375002],
    [6.869243403190376,  481.10961914062483],
    [6.882355637062964,  487.4595947265624],
    [6.884531678915821,  488.5214843750001],
    [6.89341643293734,   492.8812255859376],
    [6.895822338701104,  494.06848144531233],
    [6.900653737167637,  496.46130371093733],
    [7.2670429692740965, 716.1540527343751],
    [8.188647968122073,  1799.925781250001],
    [8.872023251113289,  3564.8457031250014],
    [9.566596912986167,  7139.869140625004],
    [10.092554861905608, 12081.222656249996],
    [10.728112113864427, 22810.24218749999],
    [11.442480870715618, 46598.96875000003],
    [12.28759157077177,  108493.37500000009],
    [12.636950838344218, 153860.81249999988],
    [13.327813723030063, 307019.4999999998],
    [14.126778167009777, 682577.25],
    [15.090269265334971, 1788919.000000001],
    [15.835512291283944, 3769169],
    [15.973721689554742, 4327820.000000002],
    [16.910547205715446, 11044023.999999983],
    [17.573132558903225, 21423208.000000004],
    [18.649063156437965, 62828288.00000006],
    [18.760110887365155, 70207360.00000012],
    [19.547111966180875, 154231424.00000012],
    [20.193967491567523, 294509055.9999997],
    [21.484592263156223, 1070557183.9999999],
    [22.088297141021556, 1957922816.0000024],
    [22.780591462699917, 3912507392.0000005],
    [23.401438520318692, 7279233024.000007],
    [23.684949498080787, 9665245184.000017],
    [24.5355829820426,   22627590144.000004],
    [25.520740767599584, 60601991168.00004],
    [26.31438890085422,  134018236416.00002],
    [26.73876398039979,  204864946175.99973],
    [27.06660583008718,  284346286080.00024],
    [28.234874284944635, 914576637951.9989],
    [28.78280496108106,  1581915832319.9973]
];

for (var [x, y] of sinh_data)
    assertNear(Math.sinh(x), y);

