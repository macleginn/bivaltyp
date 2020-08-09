const predicateData = [
  [
    "predicate_no",
    "predicate_label_en",
    "argument_frame_en",
    "stimulus_sentence_en",
    "predicate_label_ru",
    "argument_frame_ru",
    "stimulus_sentence_ru",
    "present_tense"
  ],
  [
    1,
    "feel_pain",
    "X (have) Yache",
    "[P.]_x has a [head]_yache.",
    "болеть-1",
    "у X-а (болеть) Y",
    "У [П.]_x болит [голова]_y.",
    "yes"
  ],
  [
    2,
    "have#illness#",
    "X (have) Y",
    "[P.]_x has [the flu]_y.",
    "болеть-2",
    "X (болеть) Y-ом",
    "[П.]_x болеет [гриппом]_y.",
    "yes"
  ],
  [
    3,
    "be_afraid",
    "X (be afraid) of Y",
    "(P. has to go out of the house, but there is a dog barking in the yard).  [P.]_x is afraid of [the dog]_y.",
    "бояться",
    "X (бояться) Y-а",
    "(П. нужно выйти из дома, но во дворе лает собака). [П.]_x боится [собаки]_y.",
    "yes"
  ],
  [
    4,
    "throw",
    "X (throw) Y",
    "(Two boys are competing to see who can throw a stone the farthest.) [P.]_x threw [a stone]_y (first).",
    "бросить",
    "X (бросить) Y(-а)",
    "(Мальчики соревнуются, кто дальше кинет камень. Сначала) [П.]_x бросил [камень]_y.",
    NaN
  ],
  [
    5,
    "have_enough",
    "X (have enough) Y",
    "(P. has found a new job.) Now [P.]_x has enough [money]_y.",
    "быть достаточно",
    "X-у (хватать) Y-а",
    "([П.]_x нашел новую работу. Теперь) [П.]_x хватает [денег]_y.",
    "yes"
  ],
  [
    6,
    "resemble",
    "X (resemble) Y",
    "(M. is P.'s grandfather) [P.]_x resembles [M]_y.",
    "быть похожим",
    "X (быть похожим) на Y(-а)",
    "(М. — дедушка П.) [П.]_x похож на [М]_y.",
    "yes"
  ],
  [
    7,
    "believe",
    "X (believe) Y",
    "[P.]_x believes [M]_y.",
    "верить",
    "X (верить)Y-у",
    "[П.]_x верит [М]_y.",
    "yes"
  ],
  [
    8,
    "take",
    "X (take) Y",
    "[P.]_x took [a book]_y (from the shelf).",
    "взять",
    "X (брать) Y(-а)",
    "[П.]_x взял [книгу]_y (с полки).",
    NaN
  ],
  [
    9,
    "see",
    "X (see) Y",
    "[P.]_x sees [a house]_y_y.",
    "видеть",
    "X (видеть) Y(-а)",
    "[П.]_x видит [дом]_y.",
    "yes"
  ],
  [
    10,
    "influence",
    "X (influence) Y",
    "[Age]_x influences [memory]_y.",
    "влиять",
    "X (влиять) на Y(-а)",
    "[Возраст] влияет на [память]_y.",
    "yes"
  ],
  [
    11,
    "encounter",
    "X (encounter) Y",
    "[P.]_x encountered [M.]_y (accidentally, on the street). = [P.]_y_x ran into [M]_y.",
    "встречаться",
    "X (встречаться) с Y-ом",
    "[П.]_x встретился с [М.]_y (случайно, на улице).",
    NaN
  ],
  [
    12,
    "enter",
    "X (enter) Y",
    "[P.]_x entered [the house]_y.",
    "входить ",
    "X (входить) в Y (дом)",
    "[П.]_x вошел в [дом]_y.",
    NaN
  ],
  [
    13,
    "win",
    "X (beat) Y",
    "(P. and M. played chess.) [P.]_x beat [M]_y.",
    "выиграть",
    "X (выигрывать) у Y-а",
    "(П. играл с М. в шахматы). [П.]_x выиграл у [М]_y.",
    NaN
  ],
  [
    14,
    "go_out",
    "X (go out) of Y",
    "[P.]_x went out of [the house]_y.",
    "выходить",
    "X (выходить) из Y-а",
    "[П.]_x вышел из [дома]_y.",
    NaN
  ],
  [
    15,
    "drive",
    "X (drive) Y",
    "[P.]_x is driving [the cow]_y (to the pasture).",
    "гнать",
    "X (гнать) Y-а",
    "[П.]_x гонит [корову]_y (на пастбище).",
    "yes"
  ],
  [
    16,
    "bend",
    "X (bend) Y",
    "[P.]_x bent [the branch]_y.",
    "гнуть",
    "X (гнуть) Y",
    "[П.]_x согнул [ветку]_y.",
    NaN
  ],
  [
    17,
    "tell",
    "X (tell) Y",
    "[P.]_x told [M.]_y: (‘Call me this evening.’)",
    "говорить",
    "X (говорить) Y-у",
    "[П.]_x сказал [М.]_y: (\"Приходи ко мне в гости\").",
    NaN
  ],
  [
    18,
    "hold",
    "X (hold)Y",
    "[P.]_x is holding [a book]_y (in his hands).",
    "держать",
    "X (держать) Y(-а)",
    "[П.]_x держит [книгу]_y (в руках).",
    "yes"
  ],
  [
    19,
    "catch_up",
    "X (catch up) with Y",
    "(P. had an argument with M., M. went away, P. went after her.) [P.]_x caught up with [M]_y.",
    "догнать",
    "X (догонять) Y(-а)",
    "(П. поссорился с М., и М. ушла. П. пошел за ней). [П.]_x догнал [М]_y.",
    NaN
  ],
  [
    20,
    "milk",
    "X (milk) Y",
    "[P.]_x milked [the cow]_y.",
    "доить",
    "X (доить) Y-а",
    "[П.]_x подоил [корову]_y.",
    NaN
  ],
  [
    21,
    "reach",
    "X (reach) Y",
    "(P. was crossing the river in a boat.) [P.]_x reached [the bank]_y.",
    "достичь",
    "X (достичь) Y-а (берега) ",
    "(П. плыл на лодке через речку). [П.]_x достиг [берега]_y.",
    NaN
  ],
  [
    22,
    "touch",
    "X (touch) Y",
    "(The wall was covered with fresh paint.) [P.]_x touched [the wall]_y (and got dirty).",
    "дотронуться",
    "X (дотрагиваться) до Y-а",
    "(Стена недавно была покрашена). [П.]_x дотронулся до [стены]_y (и испачкался).",
    NaN
  ],
  [
    23,
    "fight",
    "X (fight) with Y",
    "(‘Look out of the window!’ ‘What’s happening?’) ‘[P.]_x is fighting with [M.]_y’",
    "драться",
    "X (драться) с Y-ом",
    "(— Посмотри во двор. — А что там?). [П.]_x дерется с [М]_y.",
    "yes"
  ],
  [
    24,
    "be_friends",
    "X (be friends) with Y",
    "[P.]_x is friends with [M]_y.",
    "дружить",
    "X (дружить) с Y-ом",
    "[П.]_x дружит с [М]_y.",
    "yes"
  ],
  [
    25,
    "think",
    "X (think) about Y",
    "(P. has a thoughtful look.) [P.]_x is thinking about [M]_y.",
    "думать",
    "X (думать) об Y-е (об отце)",
    "(У П. задумчивый вид). [П.]_x думает о [М]_y.",
    "yes"
  ],
  [
    26,
    "eat",
    "X (eat) Y",
    "[P.]_x ate [an apple]_y.",
    "есть",
    "X (есть) Y",
    "[П.]_x съел [яблоко]_y.",
    NaN
  ],
  [
    27,
    "fry",
    "X (fry) Y",
    "[P.]_x fried [the fish]_y.",
    "жарить",
    "X (жарить) Y",
    "[П.]_x пожарил [рыбу]_y.",
    NaN
  ],
  [
    28,
    "wait",
    "X (wait) for Y",
    "(P. and M. have arranged to meet at 2 p.m. at the post office.) [P.]_x is waiting for [M]_y.",
    "ждать",
    "X (ждать) Y-а (сына)",
    "(П. и М. договорились встретиться в два часа на почте). [П.]_x ждет [М]_y.",
    "yes"
  ],
  [
    29,
    "forget",
    "X (forget) (about) Y",
    "(P. had already visited this town and knew that there is a shorter road. When he went there once again this time, however, he chose the longer road.) [P.]_x forgot (about) [the other road]_y.",
    "забывать",
    "X (забывать) об Y-е",
    "(П. однажды уже ездил в этот город и знал, что туда есть более короткая дорога. Но сейчас он поехал туда снова и выбрал более длинную). [П.]_x забыл о [другой дороге]_y.",
    NaN
  ],
  [
    30,
    "depend",
    "X (depend) on Y",
    "[Memory]_x depends on [age]_y.",
    "зависеть",
    "X (зависеть) от Y-а",
    "[Память]_x зависит от [возраста]_y.",
    "yes"
  ],
  [
    31,
    "call",
    "X (call) Y",
    "(P. tried to open the door himself, but he didn’t manage. Then) [P.]_x called [M]_y.",
    "звать",
    "X (звать) Y-а",
    "(П. пытался сам открыть дверь, но не смог. Тогда) [П.]_x позвал [М]_y.",
    NaN
  ],
  [
    32,
    "get_to_know",
    "X (get to know) Y",
    "[P.]_x got to know [M.]_y a year ago.",
    "знакомиться",
    "X (знакомиться) с Y-ом",
    "[П.]_x познакомился с [М.]_y год тому назад.",
    NaN
  ],
  [
    33,
    "know",
    "X (know) Y",
    "[P.]_x knows [M]_y.",
    "знать ",
    "X (знать) Y-а",
    "[П.]_x знает [М]_y.",
    "yes"
  ],
  [
    34,
    "play#instrument#",
    "X (play) Y",
    "(What is P. doing?) [P.]_x is playing [the guitar]_y.",
    "играть",
    "X (играть) на Y-е",
    "(Что сейчас делает П.?) [П.]_x играет на [гитаре]_y.",
    "yes"
  ],
  [
    35,
    "avoid",
    "X (avoid) Y",
    "(P. owes M. a huge sum of money, which he cannot return. Instead of this) [P.]_x avoids [M]_y.",
    "избегать",
    "X (избегать) Y-а",
    "(П. должен М. крупную сумму денег, которую не может вернуть. Поэтому) [П.]_x избегает [М]_y.",
    "yes"
  ],
  [
    36,
    "make",
    "X (make) Y",
    "[P.]_x made [a mousetrap]_y.",
    "изготовить",
    "X (изготовить) Y",
    "[П.]_x изготовил [мышеловку]_y.",
    NaN
  ],
  [
    37,
    "make_fun",
    "X (make fun) of Y",
    "(M. did something very stupid. Now,) [P.]_x is making fun of [M]_y.",
    "издеваться",
    "X (издеваться) над Y-ом",
    "(М. сделал(а) что-то очень глупое. Теперь) [П.]_x издевается над [М]_y.",
    "yes"
  ],
  [
    38,
    "have",
    "X (have) Y",
    "[P.]_x has [a car]_y.",
    "иметь",
    "X (иметь) Y",
    "У [П.]_x есть [машина]_y.",
    "yes"
  ],
  [
    39,
    "look_for",
    "X (look for) Y",
    "[P.]_x is looking for [his keys]_y.",
    "искать",
    "X (искать) Y(-а)",
    "[П.]_x ищет [ключи]_y.",
    "yes"
  ],
  [
    40,
    "paint",
    "X (paint) Y",
    "[P.]_x painted [the fence]_y.",
    "красить",
    "X (красить) Y",
    "[П.]_x покрасил [забор]_y.",
    NaN
  ],
  [
    41,
    "bite",
    "X (bite) Y",
    "[A dog]_x bit [P.]_y.",
    "кусать",
    "X (кусать) Y-а",
    "[Собака]_x укусила [П]_y.",
    NaN
  ],
  [
    42,
    "forfeit",
    "X (lose) Y",
    "(There was a fire in the village. As a result) [P.]_x lost [his house]_y.",
    "лишаться",
    "X (лишаться) Y-а",
    "(В деревне был пожар. В результате) [П.]_x лишился [дома]_y.",
    NaN
  ],
  [
    43,
    "try_to_catch",
    "X (try to catch) Y",
    "(The cat sprang out of the house.) [P.]_x is trying to catch [the cat]_y.",
    "ловить",
    "X (ловить) Y(-а)",
    "(Кошка выскочила из дома). [П.]_x ловит [кошку]_y.",
    "yes"
  ],
  [
    44,
    "break",
    "X (break) Y",
    "[P.]_x broke [a stick]_y.",
    "ломать",
    "X (ломать) Y",
    "[П.]_x сломал [палку]_y.",
    NaN
  ],
  [
    45,
    "flatter",
    "X (flatter) Y",
    "([P.]_x tells M. that she is very beautiful.) [P.]_x is flattering [M]_y.",
    "льстить",
    "X (льстить) Y-у",
    "(П. говорит М., что она очень красивая). [П.]_x льстит [М]_y.",
    "yes"
  ],
  [
    46,
    "love1",
    "X (love) Y",
    "[P.]_x loves [M]_y.",
    "любить-1",
    "X (любить) Y-а (сына)",
    "[П.]_x любит [М]_y.",
    "yes"
  ],
  [
    47,
    "wave",
    "X (wave) Y",
    "(Look, there’s P. on the other side of the river.) [P.]_x is waving [a handkerchief]_y.",
    "махать",
    "X (махать) Y-ом",
    "(Смотрите, на другом берегу реки стоит П.). [П.]_x машет [платком]_y.",
    "yes"
  ],
  [
    48,
    "dream",
    "X (dream) of Y",
    "[P.]_x is dreaming of [a new car]_y.",
    "мечтать",
    "X (мечтать) об Y-е",
    "[П.]_x мечтает о [(новой) машине]_y.",
    "yes"
  ],
  [
    49,
    "wash",
    "X (wash) Y",
    "[P.]_x washed [the cup]_y.",
    "мыть",
    "X (мыть) Y",
    "[П.]_x вымыл [чашку]_y.",
    NaN
  ],
  [
    50,
    "put_on",
    "X (put_on) Y",
    "[P.]_x put on [his trousers]_y.",
    "надевать",
    "X (надевать) Y",
    "[П.]_x надел [штаны]_y.",
    NaN
  ],
  [
    51,
    "be_called",
    "X (be_called) Y",
    "(A boy saw his father’s compass and asked what this was. The father answered him:) ‘[This tool]_x is called [a compass]_y.’",
    "называться",
    "X (называться) Y",
    "(Мальчик увидел у отца компас и спросил, что это такое. Отец отвечает ему:) [Этот предмет / инструмент] называется [компас / компасом]_y.\"",
    "yes"
  ],
  [
    52,
    "punish",
    "X (punish) Y",
    "(P.’s son was misbehaving.) [P.]_x punished [his son]_y.",
    "наказывать",
    "X (наказывать) Y-а",
    "(Сын П. плохо себя вел) [П.]_x наказал [своего сына]_y.",
    NaN
  ],
  [
    53,
    "attack",
    "X (attack) Y",
    "[A bear]_x attacked [a fisherman]_y.",
    "напасть",
    "X (нападать) на Y-а",
    "[Медведь]_x напал на [рыбака]_y.",
    NaN
  ],
  [
    54,
    "fill#intr#",
    "X (fill) with Y",
    "(There was a bucket near the house during the rain.) [The bucket] filled with [water]_y.",
    "наполняться",
    "X (наполняться) Y-ом",
    "(Во время дождя ведро стояло на улице) [Ведро]_x наполнилось [водой]_y.",
    NaN
  ],
  [
    55,
    "find",
    "X (find) Y",
    "[P.]_x found [his keys]_y.",
    "находить",
    "X (находить) Y(-а)",
    "[П.]_x нашел [ключи]_y.",
    NaN
  ],
  [
    56,
    "be_short",
    "X (be short) Y",
    "(P. wants to buy a ticket. He counts his money and finds out that) [P.]_x is short / lacks [one euro]_y.",
    "недоставать",
    "X-у (недоставать) Y-a",
    "(П. хочет купить билет. Он посчитал деньги и выяснилось, что) [П.]_x недостает [одного доллара]_y.",
    "yes"
  ],
  [
    57,
    "hate",
    "X (hate) Y",
    "[P.]_x hates [M]_y.",
    "ненавидеть",
    "X (ненавидеть) Y-а",
    "[П.]_x ненавидит [М]_y.",
    "yes"
  ],
  [
    58,
    "like",
    "X (like) Y",
    "[P.]_x likes [this shirt]_y.",
    "нравиться",
    "X-у (нравиться) Y",
    "[П.]_x нравится [эта рубашка]_y.",
    "yes"
  ],
  [
    59,
    "need",
    "X (need) Y",
    "(P.’s house was burglarised with all the valuables taken. As a consequence,) [P.]_x needs [money]_y.",
    "нуждаться",
    "X (нуждаться) в Y-е",
    "(Дом П. ограбили и унесли все, что там было. Теперь) [П.]_x нуждается в [деньгах]_y / [П.]_x нужны [деньги]_y.",
    "yes"
  ],
  [
    60,
    "surround",
    "X (surround) Y",
    "[Walls]_x surround [the city]_y.",
    "окружать",
    "X (окружать) Y (стена город)",
    "[Стены]_x окружают [город]_y.",
    "yes"
  ],
  [
    61,
    "remain",
    "X (have) Y left",
    "(P. had 100 euro, but he bought a TV, so now) [P.]_x has [10 euros]_y left.",
    "оставаться",
    "у X-а (оставаться) Y",
    "(У П. было 100 долларов, но он купил телевизор и теперь) у [П.]_x осталось [10 долларов]_y.",
    "yes"
  ],
  [
    62,
    "answer",
    "X (answer) Y",
    "(The teacher asked P. what his parents’ names are.) [P.]_x answered [the teacher]_y.",
    "отвечать",
    "X (отвечать) Y-у",
    "(Учитель спросил у П., как зовут его родителей). [П.]_x ответил [учителю]_y.",
    NaN
  ],
  [
    63,
    "open",
    "X (open) Y",
    "[P.]_x opened [a can]_y.",
    "открывать",
    "X (открывать) Y",
    "[П.]_x открыл [банку]_y.",
    NaN
  ],
  [
    64,
    "be_different",
    "X (be different) from Y",
    "(M. told P. that they have identical shirts. P. answered her,) ‘No, [my shirt]_x is different from [yours]_y (, it is darker).’",
    "отличаться",
    "X (отличаться) от Y-а",
    "(М. сказал П., что у них одинаковые рубашки. П. отвечает ему: «Нет,) [моя рубашка]_x отличается от [твоей]_y (она более темная\").",
    "yes"
  ],
  [
    65,
    "fall_behind",
    "X (fall behind) Y",
    "(P. and M. started out to school together, but) [P.]_x fell behind [M]_y.",
    "отстать",
    "X (отставать) от Y-а",
    "(П. и М. вместе пошли в школу, но) [П.]_x отстал от [М]_y.",
    NaN
  ],
  [
    66,
    "plough",
    "X (plough) Y",
    "[P.]_x is ploughing [the field]_y.",
    "пахать",
    "X (пахать) Y",
    "[П.]_x пашет [поле]_y.",
    "yes"
  ],
  [
    67,
    "smell",
    "X (smell) like / of Y",
    "(I was mending my car.) [My hands]_x smell like / smell of [gasoline]_y.",
    "пахнуть",
    "X (пахнуть) Y-ом",
    "(Я чинил машину). [Мои руки] пахнут [бензином]_y.",
    "yes"
  ],
  [
    68,
    "cross",
    "X (cross) Y",
    "(P. saw that the shop is on the other side of the road.) [P.]_x crossed [the road]_y (and entered the shop).",
    "пересечь",
    "X (пересекать) Y (улицу) ",
    "(П. увидел, что магазин на другой стороне дороги. Тогда). [П.]_x пересек [дорогу]_y (и вошел в магазин).",
    NaN
  ],
  [
    69,
    "sing",
    "X (sing) Y",
    "[P.]_x sang [a beautiful song]_y.",
    "петь",
    "X (петь) Y",
    "[П.]_x спел [красивую песню]_y.",
    NaN
  ],
  [
    70,
    "write",
    "X (write) Y",
    "[P.]_x wrote [a letter]_y.",
    "писать",
    "X (писать) Y",
    "[П.]_x [написал письмо]_y.",
    NaN
  ],
  [
    71,
    "drink",
    "X (drink) Y",
    "(P. was given a glass of milk by his mother.) [P.]_x drank [the milk]_y.",
    "пить",
    "X (пить) Y",
    "(Мама налила П. стакан молока) [П.]_x выпил [молоко]_y.",
    NaN
  ],
  [
    72,
    "melt",
    "X (melt) Y",
    "[P.]_x melted [a piece of lead]_y.",
    "плавить",
    "X (плавить) Y",
    "[П.]_x расплавил [кусок свинца]_y.",
    NaN
  ],
  [
    73,
    "match",
    "X (match) Y",
    "(A girl tries a belt in the shop and says, ‘Great,) [this belt]_x goes well with / matches [my dress]_y.’",
    "подходить",
    "X (подходить) к Y-у (пояс к платью)",
    "(Девушка меряет в магазине пояс и говорит: «Отлично,) [этот пояс]_x подходит к [моему платью]_y».",
    "yes"
  ],
  [
    74,
    "leave",
    "X (leave) Y",
    "[P.]_x left [his native city]_y.",
    "покидать",
    "X (покидать) Y(-а)",
    "[П.]_x покинул [родной город]_y.",
    NaN
  ],
  [
    75,
    "cover",
    "X (cover) Y",
    "[The carpet]_x covers [the whole floor]_y.",
    "покрывать",
    "X (покрывать) Y",
    "[Ковер]_x покрывает [весь пол]_y.",
    "yes"
  ],
  [
    76,
    "remember",
    "X (remember) Y",
    "[P.]_x remembers [the house (where he grew up)]_y well.",
    "помнить",
    "X (помнить) Y-а",
    "[П.]_x хорошо помнит [дом (в котором вырос)]_y.",
    "yes"
  ],
  [
    77,
    "help",
    "X (help) Y",
    "(M. didn’t manage to do her homework by herself.) [P.]_x helped [M]_y.",
    "помочь",
    "X (помогать) Y-у",
    "(М. не могла сама сделать домашнее задание). [П.]_x помог [М]_y.",
    NaN
  ],
  [
    78,
    "understand",
    "X (understand) Y",
    "[P.]_x understands [French]_y.",
    "понимать",
    "X (понимать) Y",
    "[П.]_x понимает [французский язык]_y.",
    "yes"
  ],
  [
    79,
    "hit#target#",
    "X (hit) Y",
    "[Lightning]_x hit / struck [the house]_y.",
    "попасть",
    "X (попадать) в Y (молния в дом)",
    "[Молния] попала в [дом]_y.",
    NaN
  ],
  [
    80,
    "cut_oneself",
    "X (cut oneself) with Y",
    "[P.]_x cut himself with [a razor]_y.",
    "порезаться",
    "X (резаться) Y-ом",
    "[П.]_x порезался [бритвой]_y.",
    NaN
  ],
  [
    81,
    "get_stuck",
    "X (get stuck) to Y",
    "(The table was recently covered with paint. P. didn’t know this and placed his glass on it.) [The glass] got stuck to [the table]_y.",
    "прилипать",
    "X (прилипать) к Y-у",
    "(Стол недавно покрасили, а П. не знал этого и поставил на него стакан). [Стакан] прилип к [столу]_y.",
    NaN
  ],
  [
    82,
    "lose#game#",
    "X (lose) to Y",
    "(P. played chess with M.) [P.]_x lost to [M]_y.",
    "проиграть",
    "X (проиграть) Y-у",
    "(П. играл с М. в шахматы). [П.]_x проиграл [М]_y.",
    NaN
  ],
  [
    83,
    "be_glad",
    "X (be glad) about Y",
    "(P. received a letter from M.) [P.]_x was glad about [the letter]_y.",
    "радоваться",
    "X (радоваться) Y-у",
    "(П. получил письмо от М.). [П.]_x обрадовался [письму]_y.",
    NaN
  ],
  [
    84,
    "speak",
    "X (speak) with Y",
    "(I am looking for P. When I enter the room I see that) [P.]_x is speaking with [M]_y.",
    "разговаривать",
    "X (разговаривать) с Y-ом",
    "(Я искал П. Когда я вошел в комнату, я увидел, что) [П.]_x разговаривает с [М]_y.",
    "yes"
  ],
  [
    85,
    "give_birth",
    "X (give birth) to Y",
    "[M.]_x gave birth to [a son]_y.",
    "рожать",
    "X (рожать) Y-а",
    "[М.]_x родила [сына]_y.",
    NaN
  ],
  [
    86,
    "drop",
    "X (drop) Y",
    "[P.]_x dropped [the glass]_y.",
    "ронять",
    "X (ронять) Y",
    "[П.]_x уронил [стакан]_y.",
    NaN
  ],
  [
    87,
    "govern",
    "X (govern) Y",
    "[P.]_x runs [our town]_y.",
    "руководить",
    "X (руководить) Y",
    "[П.]_x руководит [нашим поселком]_y.",
    "yes"
  ],
  [
    88,
    "miss",
    "X (miss) Y",
    "[P.]_x misses [M]_y.",
    "скучать",
    "X (скучать) по Y-у",
    "[П.]_x скучает по [М]_y.",
    "yes"
  ],
  [
    89,
    "follow",
    "X (follow) Y",
    "[P.]_x follows [M]_y.",
    "следовать",
    "X (следовать) за Y-ом",
    "[П.]_x следует за [М]_y.",
    "yes"
  ],
  [
    90,
    "dismount",
    "X (get down) from Y",
    "[P.]_x got down from [the horse]_y.",
    "слезать",
    "X (слезать) с Y-a (с лошади)",
    "[П.]_x слез с [лошади]_y.",
    NaN
  ],
  [
    91,
    "listen",
    "X (listen) to Y",
    "(What is P. doing?) [P.]_x is listening to [radio]_y.",
    "слушать",
    "X (слушать) Y",
    "(Что делает П._x?) [П.]_x слушает [радио]_y.",
    "yes"
  ],
  [
    92,
    "obey",
    "X (obey) Y",
    "(M. is a mischievous boy, but) [P.]_x always listens to / obeys [his mother]_y.",
    "слушаться",
    "X (слушаться) Y-a",
    "(М. хулиган, плохо себя ведет, а) [П.]_x слушается [маму]_y.",
    "yes"
  ],
  [
    93,
    "hear",
    "X (hear) Y",
    "[P.]_x hears [the music]_y.",
    "слышать",
    "X (слышать) Y",
    "[П.]_x слышит [музыку]_y.",
    "yes"
  ],
  [
    94,
    "mix",
    "X (get mixed) with Y",
    "(Some honey was put in a jar of milk and stirred.) [The honey]_x got mixed with [the milk]_y.",
    "смешаться",
    "X (смешаться) с Y-ом",
    "(В сосуд с молоком положили мед и размешали). [Мед]_x смешался с [молоком]_y.",
    NaN
  ],
  [
    95,
    "look",
    "X (look) at Y",
    "[P.]_x is looking at [the clouds]_y (trying to determine if it will rain).",
    "смотреть",
    "X (смотреть) на Y",
    "[П.]_x смотрит на [тучи]_y (он хочет понять, будет ли дождь).",
    "yes"
  ],
  [
    96,
    "take_off",
    "X (take off) Y",
    "[P.]_x took off [his shirt]_y.",
    "снимать",
    "X (снимать) Y (рубашку)",
    "[П.]_x снял [рубашку]_y.",
    NaN
  ],
  [
    97,
    "dream#sleeping#",
    "X (dream) about Y",
    "(P. sleeps) [P.]_x dreams about [M]_y.",
    "сниться",
    "X-у (сниться) Y",
    "[П.]_x снится [М]_y.",
    "yes"
  ],
  [
    98,
    "agree",
    "X (agree) with Y",
    "(M. told P. that their son should learn Irish.) [P.]_x agreed with [M]_y.",
    "соглашаться",
    "X (соглашаться) с Y-ом",
    "(М. сказала П., что их сыну надо выучить английский язык). [П.]_x согласился с [М]_y.",
    NaN
  ],
  [
    99,
    "have_a_quarrel",
    "X (have a quarrel) with Y",
    "[P.]_x had a quarrel with [M]_y.",
    "ссориться",
    "X (ссориться) с кем Y",
    "[П.]_x поссорился с [М]_y. ",
    NaN
  ],
  [
    100,
    "cost",
    "X (cost) Y",
    "[This cup]_x costs [1 euro]_y.",
    "стоить",
    "X (стоить) Y (один доллар)",
    "[Эта чашка] стоит [один доллар]_y.",
    "yes"
  ],
  [
    101,
    "shoot_at",
    "X (shoot) at Y",
    "[P.]_x shot at [the bird]_y. (He missed.)",
    "стрелять",
    "X (стрелять) в Y-а",
    "[П.]_x выстрелил в [птицу]_y (Он не попал).",
    NaN
  ],
  [
    102,
    "pour",
    "X (pour) Y",
    "[P.]_x poured [the sugar]_y (into the cup).",
    "сыпать",
    "X (сыпать) Y",
    "[П.]_x насыпал [сахар]_y (в чашку).",
    NaN
  ],
  [
    103,
    "lose",
    "X (lose) Y",
    "[P.]_x lost [his keys]_y.",
    "терять",
    "X (терять) Y",
    "[П.]_x потерял [ключи]_y.",
    NaN
  ],
  [
    104,
    "sink",
    "X (sink) in Y",
    "(This tree has very heavy wood. I threw a log in the river.) [The log]_x sank in [the water]_y.",
    "тонуть",
    "X (тонуть) в Y-е",
    "(У этого дерева очень тяжелая древесина. Однажды я кинул полено в речку). [Полено] утонуло в [воде]_y.",
    NaN
  ],
  [
    105,
    "kill",
    "X (kill) Y",
    "[P.]_x killed [M]_y.",
    "убивать",
    "X (убивать) Y-а",
    "[П.]_x убил [М]_y.",
    NaN
  ],
  [
    106,
    "hit",
    "X (hit) Y",
    "[P.]_x hit [M]_y.",
    "ударить",
    "X (ударять) Y-а",
    "[П.]_x ударил [М]_y.",
    NaN
  ],
  [
    107,
    "kiss",
    "X (kiss) Y",
    "[P.]_x kissed [M]_y.",
    "целовать",
    "X (целовать) Y-а",
    "[П.]_x поцеловал [М]_y.",
    NaN
  ],
  [
    108,
    "read",
    "X (read) Y",
    "[P.]_x read [an interesting book]_y.",
    "читать",
    "X (читать) Y-а",
    "[П.]_x прочитал [интересную книгу]_y.",
    NaN
  ],
  [
    109,
    "move#bodypart#",
    "X (move) Y",
    "[P.]_x moved [his finger]_y.",
    "шевелить",
    "X (шевелить) Y-ом",
    "[П.]_x пошевелил [пальцем]_y.",
    NaN
  ],
  [
    110,
    "respect",
    "X (respect) Y",
    "[P.]_x respects [M]_y.",
    "уважать",
    "X (уважать) Y-а",
    "[П.]_x уважает [М]_y.",
    "yes"
  ],
  [
    111,
    "be_squeamish",
    "X (be squeamish) about Y",
    "[P.]_x is squeamish about [dirty dishes]_y.",
    "брезговать",
    "X (брезговать) Y-ом",
    "[П.]_x брезгует [грязной посудой]_y.",
    "yes"
  ],
  [
    112,
    "be_content",
    "X (be content) with",
    "(P.’s son does well at school.) [P.]_x is OK/content/satisfied with [his son]_y.",
    "быть довольным",
    "X (быть довольным) Y-ом",
    "(Сын П. хорошо учится в школе). [П.]_x доволен [своим сыном]_y.",
    "yes"
  ],
  [
    113,
    "fall_in_love",
    "X (fall in love) with Y",
    "[P.]_x fell in love with [M]_y.",
    "влюбляться",
    "X (влюбляться) в Y-a",
    "[П.]_x влюбился в [М]_y.",
    NaN
  ],
  [
    114,
    "trust",
    "X (trust) Y",
    "(P. and M. have a happy family. M. never deceives P.) [P.]_x trusts [M]_y.",
    "доверять",
    "X (доверять) Y-у",
    "(У П. и М. дружная семья, М. никогда не обманывает П.) [П.]_x доверяет [М]_y.",
    "yes"
  ],
  [
    115,
    "sympathise",
    "X (sympathise) with Y",
    "(P.’s mother is very ill.) [P.]_x sympathises with [his mother]_y.",
    "жалеть",
    "X (жалеть) Y-а",
    "(Мать П. очень больна). [П.]_x жалеет [свою мать]_y.",
    "yes"
  ],
  [
    116,
    "envy",
    "X (envy) Y",
    "(M. has a car, and P. doesn't). [P.]_x envies [M]_y.",
    "завидовать",
    "X (завидовать) Y-у",
    "(У М. есть машина, а у П. — нет) [П.]_x завидует [М]_y.",
    "yes"
  ],
  [
    117,
    "be_angry",
    "X (be angry) with Y",
    "[P.]_x is angry with [M]_y.",
    "злиться",
    "X (злиться) на Y-а",
    "[П.]_x злится на [М]_y.",
    "yes"
  ],
  [
    118,
    "be_surprised",
    "X (be surprised) at Y",
    "(M. made P. an expensive gift.) [P.]_x was surprised at [this gift]_y.",
    "удивляться",
    "X (удивляться) Y-у",
    "(М. сделала П. дорогой подарок). [П.]_x удивился [этому подарку]_y.",
    NaN
  ],
  [
    119,
    "love2",
    "X (love) Y",
    "[P.]_x loves [tea]_y.",
    "любить-2",
    "X (любить) Y (чай/яблоки)",
    "[П.]_x любит [чай]_y.",
    "yes"
  ],
  [
    120,
    "enjoy",
    "X (enjoy) Y",
    "(After being in cold water) [P.]_x enjoys [hot tea]_y.",
    "наслаждаться",
    "X (наслаждаться) Y-ом",
    "(После холодной воды) [П.]_x наслаждается [горячим чаем]_y.",
    "yes"
  ],
  [
    121,
    "want",
    "X (want) Y",
    "[P.]_x wants [a new mobile phone]_y.",
    "хотеть",
    "X (хотеть) Y-а",
    "[П.]_x хочет [новый мобильник]_y.",
    "yes"
  ],
  [
    122,
    "have_a_grudge",
    "X (have a grudge) against Y",
    "(Why doesn’t P. speak with M.?) [P.]_x has a grudge against [M]_y.",
    "сердиться",
    "X (сердиться) на Y-а",
    "(Почему П. не разговаривает с М.?) [П.]_x сердится на [М]_y.",
    "yes"
  ],
  [
    123,
    "take_offence",
    "X (take_offence) at Y",
    "(M. called P. an idiot.) [P.]_x took offence at [M]_y.  = [P.]_x got cross with [M]_y.",
    "обижаться",
    "X (обижаться) на Y-а",
    "(М. назвала П. дураком). [П.]_x обиделся на [М]_y.",
    NaN
  ],
  [
    124,
    "upset",
    "X (upset) Y",
    "[P.]_x greatly upset [M]_y. (He told her that he had spent all the money.)",
    "огорчать",
    "X (огорчать) Y-а",
    "[П.]_x очень огорчил [М]_y. (Он сказал, что потратил все деньги).",
    NaN
  ],
  [
    125,
    "marvel",
    "X (marvel) at Y",
    "(P. arrived in the capital.) [P.]_x marvelled at / was struck by / was impressed by [this town]_y.",
    "поражаться",
    "X (поражаться) Y-у",
    "(П. приехал в столицу). [П.]_x поразился [этому городу]_y.",
    NaN
  ],
  [
    126,
    "despise",
    "X (despise) Y",
    "[P.]_x despises [M]_y.",
    "презирать",
    "X (презирать) Y-а",
    "[П.]_x презирает [М]_y.",
    "yes"
  ],
  [
    127,
    "get_upset",
    "X (get upset) with Y",
    "(P.’s son got bad marks in school once again.) [P.]_x got upset with [his son]_y. = [P.]_x got upset because of [his son]_y.",
    "огорчаться",
    "X (огорчаться) из-за Y-а",
    "(Сын П. опять получил плохие оценки в школе). [П.]_x огорчился из-за [своего сына]_y.",
    NaN
  ],
  [
    128,
    "get_irritated",
    "X (get irritated) with Y",
    "(P. has a very bad disposition. Look, once again) [P.]_x is getting irritated with [his daughter]_y.",
    "раздражаться",
    "X (раздражаться) на Y-а",
    "(— У П. очень скверный характер. Смотрите, снова) – [П.]_x раздражается на [свою дочь]_y.",
    "yes"
  ],
  [
    129,
    "be_fond",
    "X (be fond) of Y",
    "[P.]_x is fond of [M]_y.",
    "симпатизировать",
    "X (симпатизировать) Y-у",
    "[П.]_x симпатизирует [М]_y.",
    "yes"
  ],
  [
    130,
    "be_shy",
    "X (be shy) about Y",
    "(P. is the smallest in his class.) [P.]_x is shy / embarassed about [his height]_y.",
    "стесняться",
    "X (стесняться) Y-а",
    "(П. самый маленький по росту в своем классе). [П.]_x стесняется [своего роста]_y.",
    "yes"
  ]
]