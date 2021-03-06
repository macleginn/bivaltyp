const languageData = [
  [
    "language_no",
    "glottocode",
    "language",
    "language_ru",
    "language_external",
    "expert",
    "expert_ru",
    "macroarea",
    "family (WALS)",
    "genus (WALS)",
    "latitude",
    "longitude",
    "number of nominal cases",
    "overallN",
    "transitives",
    "intransitives",
    "transitivity ratio",
    "intransitivity ratio",
    "X",
    "Y",
    "XY",
    "number of classes",
    "entropy (nat)",
    "normalised entropy",
    "entropy of intransitives (nat)"
  ],
  [
    1,
    "russ1263",
    "Russian",
    "русский",
    "Russian",
    "Sergey Say",
    "Сергей Сергеевич Сай",
    "Europe",
    "Indo-European",
    "Slavic",
    58.0,
    38.0,
    "6",
    130,
    54,
    76,
    0.42,
    0.5800000000000001,
    6,
    68,
    2,
    23,
    2.267104688054901,
    2.244433641174352,
    2.716907937686096
  ],
  [
    2,
    "stan1318",
    "Arabic_Standard",
    "арабский литературный",
    "Standard Arabic",
    "Ramazan Mamedshaxov",
    "Рамазан Гамидович Мамедшахов",
    "West Asia and the Caucasus",
    "Afro-Asiatic",
    "Semitic",
    27.96,
    43.85,
    "3",
    118,
    72,
    46,
    0.61,
    0.39,
    5,
    41,
    0,
    14,
    1.4977005610794425,
    1.482723555468648,
    2.1266379419147863
  ],
  [
    3,
    "para1311",
    "Guarani_Paraguayan",
    "гуарани",
    "Paraguayan Guaraní",
    "Dmitry Gerasimov",
    "Дмитрий Валентинович Герасимов",
    "South America",
    "Tupian",
    "Tupi-Guaraní",
    -25.61,
    -57.09,
    "0",
    57,
    37,
    20,
    0.65,
    0.35,
    4,
    16,
    0,
    12,
    1.4526941371466733,
    1.5108019026325403,
    2.293412589485357
  ],
  [
    4,
    "esto1258",
    "Estonian",
    "эстонский",
    "Estonian",
    "Irina Külmoja",
    "Ирина Павловна Кюльмоя",
    "Europe",
    "Uralic",
    "Finnic",
    58.55,
    25.82,
    "14",
    89,
    30,
    59,
    0.34,
    0.6599999999999999,
    2,
    57,
    0,
    9,
    1.661254587524549,
    1.6778671333997943,
    1.5419263054885857
  ],
  [
    5,
    "tsak1249",
    "Tsakhur",
    "цахурский",
    "Tsakhur",
    "Dmitry Gerasimov",
    "Дмитрий Валентинович Герасимов",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lezgic",
    41.59,
    46.89,
    "20",
    55,
    30,
    25,
    0.55,
    0.45,
    8,
    17,
    0,
    14,
    1.8054378319242468,
    1.877655345201217,
    2.4561429055846933
  ],
  [
    6,
    "tuvi1240",
    "Tuvinian",
    "тувинский",
    "Tuvinian",
    "Sofia Oskolskaya",
    "Софья Алексеевна Оскольская",
    "North and Central Asia",
    "Altaic",
    "Turkic",
    51.7,
    94.37,
    "8",
    129,
    60,
    69,
    0.47,
    0.53,
    7,
    60,
    2,
    15,
    1.8426010860761988,
    1.8241750752154369,
    2.15353278973494
  ],
  [
    7,
    "finn1318",
    "Finnish_Ingrian",
    "ингерманландский финский",
    "Ingrian Finnish",
    "Daria Mishchenko",
    "Дарья Федоровна Мищенко",
    "Europe",
    "Uralic",
    "Finnic",
    59.47,
    29.71,
    "13",
    116,
    44,
    72,
    0.38,
    0.62,
    3,
    67,
    2,
    17,
    2.069832110317932,
    2.049133789214752,
    2.2653939873625166
  ],
  [
    8,
    "basq1248",
    "Basque",
    "баскский",
    "Basque",
    "Natalia Zaika",
    "Наталья Михайловна Заика",
    "Europe",
    "Basque",
    "Basque",
    43.28,
    -1.32,
    "16",
    116,
    65,
    51,
    0.56,
    0.44,
    4,
    47,
    0,
    16,
    1.6523622697892093,
    1.6358386470913169,
    2.198349822340529
  ],
  [
    9,
    "stan1290",
    "French",
    "французский",
    "French",
    "Elena Kordi",
    "Елена Евгеньевна Корди",
    "Europe",
    "Indo-European",
    "Romance",
    48.0,
    2.0,
    "0",
    125,
    70,
    55,
    0.56,
    0.44,
    3,
    52,
    0,
    11,
    1.5452127093785932,
    1.5297605822848073,
    1.9529157025595918
  ],
  [
    10,
    "stan1295",
    "German",
    "немецкий",
    "German",
    "Sandra Birzer",
    "Сандра Бирцер",
    "Europe",
    "Indo-European",
    "Germanic",
    52.0,
    10.0,
    "4",
    127,
    70,
    57,
    0.55,
    0.45,
    3,
    54,
    0,
    19,
    1.8371725469974545,
    1.8188008215274798,
    2.5606621526045634
  ],
  [
    11,
    "bagv1239",
    "Bagvalal",
    "багвалинский",
    "Bagvalal",
    "Dmitry Gerasimov",
    "Дмитрий Валентинович Герасимов",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Avar-Andic-Tsezic",
    42.4,
    46.1,
    "20",
    65,
    29,
    36,
    0.45,
    0.55,
    14,
    22,
    0,
    21,
    2.2041883702053258,
    2.2703140213114854,
    2.7387592326154846
  ],
  [
    12,
    "nucl1643",
    "Japanese",
    "японский",
    "Japanese",
    "Yukari Konuma",
    "Юкари Конума",
    "East and Southeast Asia",
    "Japanese",
    "Japanese",
    35.0,
    135.0,
    "8",
    115,
    62,
    53,
    0.54,
    0.46,
    10,
    41,
    2,
    9,
    1.3710164738496995,
    1.3573063091112023,
    1.4775000570188643
  ],
  [
    13,
    "lith1251",
    "Lithuanian",
    "литовский",
    "Lithuanian",
    "Natalia Zaika",
    "Наталья Михайловна Заика",
    "Europe",
    "Indo-European",
    "Baltic",
    55.14,
    23.96,
    "7",
    127,
    56,
    71,
    0.44,
    0.56,
    3,
    64,
    4,
    17,
    2.0450989478196866,
    2.0246479583414896,
    2.43078552597128
  ],
  [
    14,
    "kalm1244",
    "Kalmyk",
    "калмыцкий",
    "Kalmyk",
    "Sergey Say",
    "Сергей Сергеевич Сай",
    "Europe",
    "Altaic",
    "Mongolic",
    46.57,
    45.32,
    "9",
    121,
    61,
    60,
    0.5,
    0.5,
    7,
    53,
    0,
    13,
    1.6211203615594625,
    1.6049091579438677,
    1.871481452989788
  ],
  [
    15,
    "cent1989",
    "Khmer",
    "кхмерский",
    "Khmer",
    "Sergey Dmitrenko",
    "Сергей Юрьевич Дмитренко",
    "East and Southeast Asia",
    "Austro-Asiatic",
    "Khmer",
    12.05,
    105.02,
    "0",
    81,
    60,
    21,
    0.74,
    0.26,
    0,
    21,
    0,
    7,
    1.0063867195705505,
    1.0164505867662559,
    1.6744089372507132
  ],
  [
    16,
    "bash1264",
    "Bashkir",
    "башкирский",
    "Bashkir",
    "Sergey Say",
    "Сергей Сергеевич Сай",
    "Europe",
    "Altaic",
    "Turkic",
    53.6,
    56.56,
    "6",
    113,
    52,
    61,
    0.46,
    0.54,
    6,
    55,
    0,
    11,
    1.5885499663251703,
    1.5726644666619187,
    1.664578717394361
  ],
  [
    17,
    "stan1325",
    "Latvian",
    "латышский",
    "Latvian",
    "Natalia Perkova",
    "Наталья Викторовна Перкова",
    "Europe",
    "Indo-European",
    "Baltic",
    56.83,
    24.31,
    "5",
    105,
    52,
    53,
    0.5,
    0.5,
    5,
    45,
    3,
    12,
    1.7688689772043156,
    1.7688689772043156,
    2.131236804234147
  ],
  [
    18,
    "guro1248",
    "Guro",
    "гуро",
    "Guro",
    "Olga Kuznecova",
    "Ольга Васильевна Кузнецова",
    "Sub-Saharan Africa",
    "Mande",
    "Eastern Mande",
    7.35,
    -6.31,
    "0",
    92,
    39,
    53,
    0.42,
    0.5800000000000001,
    5,
    48,
    0,
    18,
    2.077876924646312,
    2.0986556938927747,
    2.423858558420144
  ],
  [
    19,
    "loma1260",
    "Loma",
    "лоома",
    "Loma",
    "Daria Mishchenko",
    "Дарья Федоровна Мищенко",
    "Sub-Saharan Africa",
    "Mande",
    "Western Mande",
    8.2,
    -9.23,
    "0",
    87,
    49,
    38,
    0.56,
    0.44,
    6,
    32,
    0,
    14,
    1.6867056311926751,
    1.7035726875046018,
    2.2930750596799294
  ],
  [
    20,
    "lezg1247",
    "Lezgian",
    "лезгинский",
    "Lezgian",
    "Ramazan Mamedshaxov",
    "Рамазан Гамидович Мамедшахов",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lezgic",
    41.52,
    47.9,
    "18",
    116,
    40,
    76,
    0.34,
    0.6599999999999999,
    16,
    56,
    4,
    24,
    2.4310795410977986,
    2.4067687456868203,
    2.727364166122694
  ],
  [
    21,
    "mode1248",
    "Greek_Modern",
    "новогреческий",
    "Modern Greek",
    "Ekaterina Zheltova",
    "Екатерина Александровна Желтова",
    "Europe",
    "Indo-European",
    "Greek",
    38.36,
    23.13,
    "4",
    127,
    85,
    42,
    0.67,
    0.33,
    6,
    36,
    0,
    7,
    1.1144731500329723,
    1.1033284185326429,
    1.450805020083924
  ],
  [
    22,
    "anci1242",
    "Greek_Ancient",
    "древнегреческий",
    "Ancient Greek",
    "Ildar Ibragimov",
    "Ильдар Ильбекович Ибрагимов",
    "Europe",
    "Indo-European",
    "Greek",
    39.82,
    21.91,
    "5",
    121,
    67,
    54,
    0.55,
    0.45,
    3,
    51,
    0,
    12,
    1.3786071366518178,
    1.3648210652852997,
    1.5488953987283305
  ],
  [
    23,
    "tosk1239",
    "Albanian",
    "албанский",
    "Albanian",
    "Varvara Diveeva",
    "Варвара Андреевна Дивеева",
    "Europe",
    "Indo-European",
    "Albanian",
    41.0,
    20.0,
    "4",
    128,
    67,
    61,
    0.52,
    0.48,
    9,
    51,
    1,
    14,
    1.6741406654244546,
    1.6573992587702098,
    2.060784305022718
  ],
  [
    24,
    "stan1288",
    "Spanish",
    "испанский",
    "Spanish",
    "Elena Gorbova",
    "Елена Викторовна Горбова",
    "Europe",
    "Indo-European",
    "Romance",
    40.0,
    -4.0,
    "0",
    123,
    72,
    51,
    0.59,
    0.41,
    10,
    41,
    0,
    10,
    1.4479089648398396,
    1.4334298751914412,
    1.8556312706390103
  ],
  [
    25,
    "iris1253",
    "Irish",
    "ирландский",
    "Irish",
    "Dmitry Nikolaev",
    "Дмитрий Сергеевич Николаев",
    "Europe",
    "Indo-European",
    "Celtic",
    53.22,
    -7.62,
    "2",
    119,
    51,
    68,
    0.43,
    0.5700000000000001,
    11,
    43,
    14,
    25,
    2.113277608531444,
    2.0921448324461296,
    2.5031466317042024
  ],
  [
    26,
    "nucl1235",
    "Armenian_Eastern",
    "армянский",
    "Eastern Armenian",
    "Vasilisa Kagirova",
    "Василиса Андреевна Кагирова",
    "West Asia and the Caucasus",
    "Indo-European",
    "Armenian",
    40.0,
    45.0,
    "5",
    127,
    63,
    64,
    0.5,
    0.5,
    6,
    58,
    0,
    11,
    1.6940491495914107,
    1.6771086580954968,
    1.9862263611805255
  ],
  [
    27,
    "nort2697",
    "Azerbaijani",
    "азербайджанский",
    "Azerbaijani",
    "Evgenija Teplukhina",
    "Евгения В. Теплухина",
    "West Asia and the Caucasus",
    "Altaic",
    "Turkic",
    40.0,
    47.72,
    "7",
    126,
    58,
    68,
    0.46,
    0.54,
    5,
    59,
    4,
    13,
    1.6000678240073294,
    1.5840671457672562,
    1.6863124134221312
  ],
  [
    28,
    "vlax1238",
    "Romani_Kalderash",
    "цыганский (кэлдэрарский)",
    "Kalderash Romani",
    "Kirill Kozhanov",
    "Кирилл Александрович Кожанов",
    "Europe",
    "Indo-European",
    "Indic",
    46.09,
    18.16,
    "8",
    120,
    49,
    71,
    0.41,
    0.5900000000000001,
    9,
    60,
    2,
    16,
    2.05654160692386,
    2.035976190854621,
    2.3328936559770668
  ],
  [
    29,
    "stan1293",
    "English",
    "английский",
    "English",
    "Dmitry Nikolaev, Johanna Nichols",
    "Дмитрий Сергеевич Николаев, Джоханна Николс",
    "Europe",
    "Indo-European",
    "Germanic",
    53.0,
    -1.0,
    "2",
    123,
    79,
    44,
    0.64,
    0.36,
    0,
    44,
    0,
    12,
    1.3486746221806438,
    1.3351878759588374,
    1.9472506148797744
  ],
  [
    30,
    "mand1415",
    "Chinese_Mandarin",
    "китайский",
    "Mandarin Chinese",
    "Elena Kolpachkova",
    "Елена Николаевна Колпачкова",
    "East and Southeast Asia",
    "Sino-Tibetan",
    "Chinese",
    40.02,
    116.23,
    "0",
    120,
    97,
    23,
    0.81,
    0.18999999999999995,
    0,
    23,
    0,
    9,
    0.8267255998904224,
    0.8184583438915182,
    1.7639736840958151
  ],
  [
    31,
    "poli1260",
    "Polish",
    "польский",
    "Polish",
    "George Moroz",
    "Георгий Алексеевич Мороз",
    "Europe",
    "Indo-European",
    "Slavic",
    51.84,
    18.63,
    "7",
    128,
    53,
    75,
    0.41,
    0.5900000000000001,
    5,
    68,
    2,
    19,
    2.204920968871632,
    2.182871759182916,
    2.605427868897914
  ],
  [
    32,
    "dutc1256",
    "Dutch",
    "нидерландский",
    "Dutch",
    "Mikhail Knyazev",
    "Михаил Юрьевич Князев",
    "Europe",
    "Indo-European",
    "Germanic",
    52.0,
    5.0,
    "0",
    116,
    71,
    45,
    0.61,
    0.39,
    0,
    45,
    0,
    11,
    1.4129169082011277,
    1.3987877391191164,
    1.9207107220575603
  ],
  [
    33,
    "ital1282",
    "Italian",
    "итальянский",
    "Italian",
    "Anna Alexandrova",
    "Анна Александрова",
    "Europe",
    "Indo-European",
    "Romance",
    43.05,
    12.65,
    "0",
    118,
    69,
    49,
    0.58,
    0.42,
    7,
    42,
    0,
    8,
    1.4347866773152105,
    1.4204388105420582,
    1.8207466461403667
  ],
  [
    34,
    "komi1268",
    "Komi_Zyrian",
    "коми-зырянский",
    "Komi-Zyrian",
    "Ekaterina Sergeeva",
    "Екатерина Николаевна Сергеева",
    "Europe",
    "Uralic",
    "Permic",
    64.05,
    54.95,
    "16",
    119,
    53,
    66,
    0.45,
    0.55,
    8,
    58,
    0,
    19,
    2.0962039748171843,
    2.075241935069012,
    2.54053426840878
  ],
  [
    35,
    "osse1243",
    "Ossetic",
    "осетинский",
    "Ossetic",
    "Arseniy Vydrin",
    "Арсений Павлович Выдрин",
    "West Asia and the Caucasus",
    "Indo-European",
    "Iranian",
    42.98,
    44.61,
    "9",
    116,
    45,
    71,
    0.39,
    0.61,
    7,
    64,
    0,
    14,
    1.9372775911173297,
    1.9179048152061564,
    2.074053826913657
  ],
  [
    36,
    "serb1264",
    "Serbian",
    "сербский",
    "Serbian",
    "Anastasia Makarova",
    "Анастасия Леонидовна Макарова",
    "Europe",
    "Indo-European",
    "Slavic",
    44.32,
    21.92,
    "6",
    123,
    61,
    62,
    0.5,
    0.5,
    8,
    53,
    1,
    21,
    2.0011256689702157,
    1.981114412280513,
    2.594926115482206
  ],
  [
    37,
    "chuk1273",
    "Chukchi",
    "чукотский",
    "Chukchi",
    "Maria Pupynina",
    "Мария Юрьевна Пупынина",
    "North and Central Asia",
    "Chukotko-Kamchatkan",
    "Northern Chukotko-Kamchatkan",
    68.64,
    170.04,
    "13",
    121,
    71,
    50,
    0.59,
    0.41,
    5,
    45,
    0,
    9,
    1.3223894047923892,
    1.309165510744465,
    1.5593976700802816
  ],
  [
    38,
    "norw1259",
    "Norwegian_Bokmal",
    "норвежский (букмол)",
    "Norwegian Bokmål",
    "Maria Nordrum, Olga Kuznecova",
    "Мария Нордрум, Ольга Васильевна Кузнецова",
    "Europe",
    "Indo-European",
    "Germanic",
    61.11,
    8.89,
    "0",
    129,
    82,
    47,
    0.64,
    0.36,
    2,
    45,
    0,
    14,
    1.4780737600630791,
    1.4632930224624483,
    2.2566729881175096
  ],
  [
    39,
    "roma1327",
    "Romanian",
    "румынский",
    "Romanian",
    "Daria Suetina (Konior)",
    "Дарья Владимировна Суетина (Конёр)",
    "Europe",
    "Indo-European",
    "Romance",
    46.39,
    24.23,
    "2",
    121,
    71,
    50,
    0.59,
    0.41,
    6,
    40,
    4,
    16,
    1.6478374284710346,
    1.6313590541863243,
    2.346981887382604
  ],
  [
    40,
    "ingu1240",
    "Ingush",
    "ингушский",
    "Ingush",
    "Johanna Nichols",
    "Джоханна Николс",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Nakh",
    43.11,
    45.03,
    "8",
    104,
    34,
    70,
    0.33,
    0.6699999999999999,
    24,
    44,
    2,
    16,
    2.063134443406682,
    2.063134443406682,
    2.1262893340570965
  ],
  [
    41,
    "ukra1253",
    "Ukrainian",
    "украинский",
    "Ukrainian",
    "Natalia Zaika",
    "Наталья Михайловна Заика",
    "Europe",
    "Indo-European",
    "Slavic",
    49.8,
    29.95,
    "7",
    129,
    57,
    72,
    0.44,
    0.56,
    6,
    64,
    2,
    20,
    2.1733461837171766,
    2.151612721880005,
    2.6641630607303544
  ],
  [
    42,
    "komi1269",
    "Komi_Permyak",
    "коми-пермяцкий",
    "Komi-Permyak",
    "Ekaterina Sergeeva, Galina Nekrasova",
    "Екатерина Николаевна Сергеева, Галина Александровна Некрасова",
    "Europe",
    "Uralic",
    "Permic",
    59.66,
    54.8,
    "23",
    120,
    55,
    65,
    0.46,
    0.54,
    6,
    59,
    0,
    22,
    2.1299197153006832,
    2.108620518147676,
    2.6589208374344406
  ],
  [
    43,
    "erzy1239",
    "Erzya",
    "эрзянский",
    "Erzya",
    "Ksenia Shagal",
    "Ксения Андреевна Шагал",
    "Europe",
    "Uralic",
    "Mordvin",
    54.26,
    46.18,
    "12",
    110,
    52,
    58,
    0.47,
    0.53,
    6,
    52,
    0,
    17,
    2.0127328629788472,
    1.9926055343490583,
    2.5054852184212737
  ],
  [
    44,
    "nucl1302",
    "Georgian",
    "грузинский",
    "Georgian",
    "Alexander Rostovtsev-Popiel",
    "Александр Александрович Ростовцев-Попель",
    "West Asia and the Caucasus",
    "Kartvelian",
    "Kartvelian",
    41.85,
    43.79,
    "7",
    125,
    34,
    91,
    0.27,
    0.73,
    25,
    61,
    5,
    15,
    2.0903537368973817,
    2.0694501995284083,
    2.06746673493811
  ],
  [
    45,
    "nana1257",
    "Nanai",
    "нанайский",
    "Nanai",
    "Daria Mishchenko",
    "Дарья Федоровна Мищенко",
    "North and Central Asia",
    "Altaic",
    "Tungusic",
    48.43,
    134.8,
    "9",
    121,
    70,
    51,
    0.58,
    0.42,
    2,
    47,
    2,
    11,
    1.3905312963744647,
    1.37662598341072,
    1.6839491187549085
  ],
  [
    46,
    "fore1265",
    "Enets_Forest",
    "лесной энецкий",
    "Forest Enets",
    "Maria Ovsjannikova",
    "Мария Александровна Овсянникова",
    "North and Central Asia",
    "Uralic",
    "Samoyedic",
    68.7,
    86.3,
    "6",
    104,
    57,
    47,
    0.55,
    0.45,
    6,
    41,
    0,
    11,
    1.5253318534766502,
    1.5253318534766502,
    1.8516748680385315
  ],
  [
    47,
    "mand1436",
    "Mandinka",
    "мандинка",
    "Mandinka",
    "Denis Creissels",
    "Дени Крессель",
    "Sub-Saharan Africa",
    "Mande",
    "Western Mande",
    13.15,
    -14.07,
    "0",
    115,
    64,
    51,
    0.56,
    0.44,
    7,
    44,
    0,
    16,
    1.5557561959602868,
    1.5401986340006841,
    1.959537105443507
  ],
  [
    48,
    "jola1263",
    "Joola_Fonyi",
    "диола-фоньи",
    "Joola-Fonyi",
    "Denis Creissels",
    "Дени Крессель",
    "Sub-Saharan Africa",
    "Bak",
    "Northen Atlantic",
    12.76,
    -15.74,
    "0",
    115,
    91,
    24,
    0.79,
    0.21,
    6,
    18,
    0,
    6,
    0.7159323616753088,
    0.7087730380585557,
    0.97610557717795
  ],
  [
    49,
    "soni1259",
    "Soninke",
    "сонинке",
    "Soninke",
    "Denis Creissels",
    "Дени Крессель",
    "Sub-Saharan Africa",
    "Mande",
    "Western Mande",
    13.13,
    -11.72,
    "0",
    107,
    63,
    44,
    0.59,
    0.41,
    8,
    36,
    0,
    10,
    1.220308987287676,
    1.220308987287676,
    1.320504727441532
  ],
  [
    50,
    "nucl1301",
    "Turkish",
    "турецкий",
    "Turkish",
    "Maria Ovsjannikova",
    "Мария Александровна Овсянникова",
    "West Asia and the Caucasus",
    "Altaic",
    "Turkic",
    39.87,
    32.87,
    "6",
    125,
    60,
    65,
    0.48,
    0.52,
    6,
    58,
    1,
    10,
    1.442729560294877,
    1.4283022646919283,
    1.4430434484709915
  ],
  [
    51,
    "yaku1245",
    "Yakut",
    "якутский",
    "Yakut",
    "Ajtalina Nogovitsyna",
    "Айталина Петровна Ноговицына",
    "North and Central Asia",
    "Altaic",
    "Turkic",
    61.7,
    133.98,
    "8",
    124,
    66,
    58,
    0.53,
    0.47,
    4,
    54,
    0,
    12,
    1.5440177810966913,
    1.5285776032857243,
    1.8235551432138195
  ],
  [
    52,
    "buri1258",
    "Buriat",
    "бурятский",
    "Buriat",
    "Aleksandra Azargaeva",
    "Александра Викторовна Азаргаева",
    "North and Central Asia",
    "Altaic",
    "Mongolic",
    50.85,
    105.56,
    "7",
    120,
    56,
    64,
    0.47,
    0.53,
    8,
    56,
    0,
    14,
    1.693837136321449,
    1.6768987649582343,
    1.880463425639308
  ],
  [
    53,
    "hung1274",
    "Hungarian",
    "венгерский",
    "Hungarian",
    "Vasilisa Zhigulskaja",
    "Василиса Романовна Жигульская",
    "Europe",
    "Uralic",
    "Ugric",
    46.91,
    19.66,
    "21",
    126,
    62,
    64,
    0.49,
    0.51,
    8,
    53,
    3,
    19,
    1.9456164769746715,
    1.926160312204925,
    2.466046953605267
  ],
  [
    54,
    "moks1248",
    "Moksha",
    "мокшанский",
    "Moksha",
    "Maria Kholodilova",
    "Мария Александровна Холодилова",
    "Europe",
    "Uralic",
    "Mordvin",
    54.19,
    42.67,
    "17",
    115,
    58,
    57,
    0.5,
    0.5,
    6,
    50,
    1,
    16,
    1.8924033228049453,
    1.8734792895768961,
    2.4196281445448538
  ],
  [
    55,
    "even1259",
    "Evenki",
    "эвенкийский",
    "Evenki",
    "Nadezhda Bulatova",
    "Надежда Яковлевна Булатова",
    "North and Central Asia",
    "Altaic",
    "Tungusic",
    61.97,
    94.69,
    "14",
    118,
    67,
    51,
    0.57,
    0.4300000000000001,
    7,
    44,
    0,
    13,
    1.6509033631402994,
    1.6343943295088963,
    2.237320077092985
  ],
  [
    56,
    "udih1248",
    "Udihe",
    "удэгейский",
    "Udihe",
    "Elena Perekhvalskaja",
    "Елена Всеволодовна Перехвальская",
    "North and Central Asia",
    "Altaic",
    "Tungusic",
    46.63,
    135.68,
    "9",
    102,
    63,
    39,
    0.62,
    0.38,
    4,
    35,
    0,
    11,
    1.3681897061404027,
    1.3681897061404027,
    1.8385773085396966
  ],
  [
    57,
    "beng1280",
    "Bengali",
    "бенгальский",
    "Bengali",
    "Mayya Shlyakhter",
    "Майя Евгеньевна Шляхтер",
    "South Asia",
    "Indo-European",
    "Indic",
    24.0,
    90.0,
    "4",
    116,
    67,
    49,
    0.58,
    0.42,
    9,
    38,
    2,
    15,
    1.6577590176106685,
    1.6411814274345615,
    2.312187428186012
  ],
  [
    58,
    "occi1239",
    "Gascon",
    "гасконский",
    "Gascon",
    "Natalia Zaika",
    "Наталья Михайловна Заика",
    "Europe",
    "Indo-European",
    "Romance",
    44.0,
    2.0,
    "0",
    125,
    72,
    53,
    0.58,
    0.42,
    4,
    49,
    0,
    11,
    1.4912184475248906,
    1.4763062630496415,
    1.9095947314196628
  ],
  [
    59,
    "west2392",
    "Mari_Western",
    "горномарийский",
    "Western Mari",
    "Ksenia Studenikina",
    "Ксения Андреевна Студеникина",
    "Europe",
    "Uralic",
    "Mari",
    56.32,
    46.57,
    "10",
    122,
    61,
    61,
    0.5,
    0.5,
    8,
    53,
    0,
    13,
    1.7788755944597798,
    1.7610868385151819,
    2.1714568277996693
  ],
  [
    60,
    "abaz1241",
    "Abaza",
    "абазинский",
    "Abaza",
    "Peter Arkadiev",
    "Петр Михайлович Аркадьев",
    "West Asia and the Caucasus",
    "Northwest Caucasian",
    "Northwest Caucasian",
    44.25,
    42.0,
    "0",
    114,
    41,
    73,
    0.36,
    0.64,
    17,
    56,
    0,
    32,
    2.5395237602502556,
    2.514128522647753,
    2.945740814935149
  ],
  [
    61,
    "slov1268",
    "Slovenian",
    "словенский",
    "Slovenian",
    "Andreja Žele, Mladen Uhlik",
    "Андрея Желе, Младен Ухлик",
    "Europe",
    "Indo-European",
    "Slavic",
    46.25,
    14.78,
    "6",
    129,
    66,
    63,
    0.51,
    0.49,
    8,
    54,
    1,
    21,
    1.9779190575251864,
    1.9581398669499344,
    2.5896788771301367
  ],
  [
    62,
    "lati1261",
    "Latin",
    "латынь",
    "Latin",
    "Inna Popova",
    "Инна Дмитриевна Попова",
    "Europe",
    "Indo-European",
    "Romance*",
    41.9,
    12.45,
    "6",
    128,
    80,
    48,
    0.62,
    0.38,
    5,
    43,
    0,
    12,
    1.3996836858607251,
    1.385686849002118,
    1.9683211938739813
  ],
  [
    63,
    "czec1258",
    "Czech",
    "чешский",
    "Czech",
    "Anastasia Makarova",
    "Анастасия Борисовна Макарова",
    "Europe",
    "Indo-European",
    "Slavic",
    49.87,
    15.1,
    "7",
    128,
    57,
    71,
    0.45,
    0.55,
    6,
    64,
    1,
    23,
    2.1951662068708413,
    2.173214544802133,
    2.7186703413275968
  ],
  [
    64,
    "icel1247",
    "Icelandic",
    "исландский",
    "Icelandic",
    "Ingunn Hreinberg Indriðadóttir",
    "Ингунн Хрейнберг",
    "Europe",
    "Indo-European",
    "Germanic",
    63.48,
    -19.02,
    "4",
    126,
    45,
    81,
    0.36,
    0.64,
    5,
    73,
    3,
    26,
    2.4329592163600284,
    2.4086296241964282,
    2.7707596858470267
  ],
  [
    65,
    "bela1254",
    "Belarusian",
    "белорусский",
    "Belarusian",
    "Olga Gorickaja",
    "Ольга Сергеевна Горицкая",
    "Europe",
    "Indo-European",
    "Slavic",
    54.0,
    28.0,
    "6",
    129,
    56,
    73,
    0.43,
    0.5700000000000001,
    6,
    65,
    2,
    21,
    2.1984770052245337,
    2.1764922351722884,
    2.675492704059043
  ],
  [
    66,
    "finn1318",
    "Finnish",
    "финский",
    "Finnish",
    "Ksenia Shagal",
    "Ксения Андреевна Шагал",
    "Europe",
    "Uralic",
    "Finnic",
    62.0,
    25.0,
    "15",
    128,
    38,
    90,
    0.3,
    0.7,
    4,
    83,
    3,
    16,
    1.9155102153457408,
    1.8963551131922836,
    1.8592953131318928
  ],
  [
    67,
    "mace1250",
    "Macedonian",
    "македонский",
    "Macedonian",
    "Vladimir Fedorov, Maria Khazhomia",
    "Владимир Сергеевич Федоров, Мария Ивановна Хажомия",
    "Europe",
    "Indo-European",
    "Slavic",
    41.6,
    21.79,
    "0",
    129,
    60,
    69,
    0.47,
    0.53,
    7,
    62,
    0,
    14,
    1.8405211741437573,
    1.8221159624023202,
    2.1496442587308113
  ],
  [
    68,
    "rutu1240",
    "Rutul",
    "рутульский",
    "Rutul",
    "Michael Daniel, Anastasia Vasilisina, Stepan Mikhajlov",
    "Михаил Александрович Даниэль, Анастасия Алексеевна Василисина, Степан Кириллович Михайлов",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lezgic",
    41.62,
    47.32,
    "15",
    116,
    31,
    85,
    0.27,
    0.73,
    24,
    56,
    5,
    27,
    2.686083622721806,
    2.659222786494588,
    2.8735082142130306
  ],
  [
    69,
    "adyg1241",
    "Adyghe",
    "адыгейский",
    "Adyghe",
    "Peter Arkadiev, Irina Bagirokova",
    "Петр Михайлович Аркадьев, Ирина Михайловна Багирокова",
    "West Asia and the Caucasus",
    "Northwest Caucasian",
    "Northwest Caucasian",
    45.1,
    40.0,
    "4",
    121,
    40,
    81,
    0.33,
    0.6699999999999999,
    19,
    62,
    0,
    35,
    2.6419280565008103,
    2.6155087759358016,
    2.9986197347212005
  ],
  [
    70,
    "gooa1234",
    "Goo",
    "гоо",
    "Goo",
    "Ekaterina Aplonova",
    "Екатерина Сергеевна Аплонова",
    "Sub-Saharan Africa",
    "Mande",
    "Eastern Mande",
    7.58,
    -7.56,
    "0",
    92,
    42,
    50,
    0.46,
    0.54,
    6,
    33,
    11,
    25,
    2.2690100867385508,
    2.2917001876059366,
    2.906553062614875
  ],
  [
    71,
    "chuv1255",
    "Chuvash",
    "чувашский",
    "Chuvash",
    "Maria Kholodilova",
    "Мария Александровна Холодилова",
    "Europe",
    "Altaic",
    "Turkic",
    55.49,
    47.16,
    "8",
    128,
    73,
    55,
    0.57,
    0.4300000000000001,
    9,
    45,
    1,
    17,
    1.666211977167014,
    1.649549857395344,
    2.287674976132459
  ],
  [
    72,
    "udmu1245",
    "Udmurt",
    "удмуртский",
    "Udmurt",
    "Ksenia Shagal",
    "Ксения Андреевна Шагал",
    "Europe",
    "Uralic",
    "Permic",
    56.13,
    52.64,
    "15",
    126,
    52,
    74,
    0.41,
    0.5900000000000001,
    8,
    64,
    2,
    22,
    2.194480570681872,
    2.1725357649750534,
    2.582412458018547
  ],
  [
    73,
    "croa1245",
    "Croatian",
    "хорватский",
    "Croatian",
    "Mislav Benić",
    "Мислав Бенич",
    "Europe",
    "Indo-European",
    "Slavic",
    45.55,
    15.98,
    "6",
    128,
    65,
    63,
    0.51,
    0.49,
    10,
    52,
    1,
    23,
    2.0477600547337333,
    2.027282454186396,
    2.752477357620473
  ],
  [
    74,
    "bulg1262",
    "Bulgarian",
    "болгарский",
    "Bulgarian",
    "Krasimira Petrova",
    "Красимира Петрова",
    "Europe",
    "Indo-European",
    "Slavic",
    43.36,
    25.05,
    "0",
    129,
    67,
    62,
    0.52,
    0.48,
    5,
    56,
    1,
    14,
    1.6822428714921875,
    1.6654204427772656,
    2.0595204456746266
  ],
  [
    75,
    "udii1243",
    "Udi",
    "удинский",
    "Udi",
    "Timur Maisak",
    "Тимур Анатольевич Майсак",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lezgic",
    40.9,
    47.72,
    "10",
    123,
    59,
    64,
    0.48,
    0.52,
    13,
    47,
    4,
    23,
    2.0505709050123944,
    2.0300651959622704,
    2.61038706454959
  ],
  [
    76,
    "assy1241",
    "Assyrian_Neo_Aramaic",
    "ассирийский новоарамейский (урмийский)",
    "Assyrian Neo-Aramaic",
    "Sergey Say",
    "Сергей Сергеевич Сай",
    "West Asia and the Caucasus",
    "Afro-Asiatic",
    "Semitic",
    36.75,
    43.0,
    "0",
    123,
    49,
    74,
    0.4,
    0.6,
    6,
    58,
    10,
    15,
    2.0406899865423336,
    2.02028308667691,
    2.274408164032823
  ],
  [
    77,
    "kaza1248",
    "Kazakh",
    "казахский",
    "Kazakh",
    "Anastasia Zhuk",
    "Анастасия Ивановна Жук",
    "North and Central Asia",
    "Altaic",
    "Turkic",
    50.0,
    70.0,
    "6",
    130,
    62,
    68,
    0.48,
    0.52,
    8,
    60,
    0,
    12,
    1.5928218571287538,
    1.5768936385574663,
    1.7220032160629897
  ],
  [
    78,
    "chec1245",
    "Chechen",
    "чеченский",
    "Chechen",
    "Zarina Molochieva",
    "Зарина Молочиева",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Nakh",
    43.5,
    45.5,
    "10",
    115,
    36,
    79,
    0.31,
    0.69,
    27,
    49,
    3,
    21,
    2.3293769630251657,
    2.306083193394914,
    2.486129343233356
  ],
  [
    79,
    "icar1234",
    "Dargwa_Icari",
    "даргинский (ицаринский)",
    "Icari Dargwa",
    "Rasul Mutalov",
    "Расул Османович Муталов",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lak-Dargwa",
    41.98,
    47.57,
    "26",
    122,
    38,
    84,
    0.31,
    0.69,
    16,
    63,
    5,
    26,
    2.467433842645768,
    2.4427595042193104,
    2.6827767442591344
  ],
  [
    80,
    "skol1241",
    "Saami_Skolt",
    "колтта-саамский",
    "Skolt Saami",
    "Alena Blinova, Ksenia Shagal, Timothy Feist",
    "Алена Алексеевна Блинова, Ксения Андреевна Шагал, Тимоти Фейст",
    "Europe",
    "Uralic",
    "Saami",
    69.52,
    28.63,
    "9",
    120,
    67,
    53,
    0.56,
    0.44,
    4,
    48,
    1,
    17,
    1.7137856523532136,
    1.6966477958296815,
    2.3263235106791944
  ],
  [
    81,
    "aghu1253",
    "Aghul",
    "агульский",
    "Aghul",
    "Timur Maisak, Solmaz Merdanova",
    "Тимур Анатольевич Майсак, Солмаз Рамадановна Мерданова",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Lezgic",
    41.7,
    47.68,
    "26",
    113,
    32,
    81,
    0.28,
    0.72,
    26,
    50,
    5,
    29,
    2.6111001564248517,
    2.5849891548606028,
    2.8112768466613884
  ],
  [
    82,
    "sout2674",
    "Saami_South",
    "южносаамский",
    "South Saami",
    "Richard Kowalik, Ksenia Shagal",
    "Рикард Ковалик, Ксения Андреевна Шагал",
    "Europe",
    "Uralic",
    "Saami",
    62.88,
    13.7,
    "8",
    108,
    77,
    31,
    0.71,
    0.29000000000000004,
    1,
    30,
    0,
    16,
    1.2687309366139652,
    1.2687309366139652,
    2.331593207956958
  ],
  [
    83,
    "hebr1245",
    "Hebrew_Modern",
    "иврит",
    "Modern Hebrew",
    "Dmitry Nikolaev",
    "Дмитрий Сергеевич Николаев",
    "West Asia and the Caucasus",
    "Afro-Asiatic",
    "Semitic",
    31.11,
    35.02,
    "0",
    127,
    61,
    66,
    0.48,
    0.52,
    5,
    61,
    0,
    11,
    1.7337498050182,
    1.7164123069680182,
    2.0038633931119145
  ],
  [
    84,
    "swed1254",
    "Swedish",
    "шведский",
    "Swedish",
    "Ksenia Shagal, Emil Ingelsten, David Avellan-Hultman",
    "Ксения Андреевна Шагал, Эмиль Ингельстен, Давид Авеллан-Хултман",
    "Europe",
    "Indo-European",
    "Germanic",
    59.8,
    17.39,
    "0",
    128,
    81,
    47,
    0.63,
    0.37,
    0,
    47,
    0,
    13,
    1.4197358013520962,
    1.4055384433385751,
    2.0760346297914376
  ],
  [
    85,
    "zilo1248",
    "Andi_Zilo",
    "андийский (зиловский)",
    "Zilo Andi",
    "Neige Rochant",
    "Неж Рошан",
    "West Asia and the Caucasus",
    "Nakh-Daghestanian",
    "Avar-Andic-Tsezic",
    42.81,
    46.29,
    "21",
    123,
    36,
    87,
    0.29,
    0.71,
    24,
    58,
    5,
    26,
    2.6037051207884625,
    2.5776680695805783,
    2.8264108305004854
  ],
  [
    86,
    "ulch1241",
    "Ulcha",
    "ульчский",
    "Ulcha",
    "Natalia Stoynova",
    "Наталья Марковна Стойнова",
    "North and Central Asia",
    "Altaic",
    "Tungusic",
    51.85,
    140.29,
    "8",
    108,
    66,
    42,
    0.61,
    0.39,
    5,
    35,
    2,
    13,
    1.3678895584035802,
    1.3678895584035802,
    1.7990770647575365
  ]
]