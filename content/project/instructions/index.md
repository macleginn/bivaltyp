## Instructions for contributors

### 1. General

If you use this questionnaire, please cite as follows.

> Say, Sergey, Sergey Dmitrenko, Dmitry Gerasimov, Viktor Khrakovskij, & Natalia Zaika. 2020. Instructions for contributors. In: Say, Sergey (ed.). BivalTyp: Typological database of bivalent verbs and their encoding frames. St. Petersburg: Institute for Linguistic Studies, RAS. (Available online at {{ site_url }}, Accessed on {{ today }})

This text is a shortened translation of the [original published version of the instructions (in Russian)](https://bivaltyp.info/docs/questionnaire_russian.pdf).
<input id="russian-citation-button" type="button" value="Show Russian citation" onclick="toggleRussianCitation();">

<div id="russian-citation-div" style="display: none">
<blockquote>Say, S. S., D. V. Gerasimov, S. Yu. Dmitrenko, N. M. Zaika, V. S. Khrakovskij. 2018. Valentnostnye klassy dvuxmestnyx predikatov: tipologicheskaja anketa i instrukcija issledovatelju [Bivalent valency classes: a typological questionnaire and instructions for contributors]. S. S. Say (ed.). *Valentnostnye klassy dvuxmestnyx predikatov v raznostrukturnyx jazykax*. Saint Petersburg: ILS RAN. 25–46.</blockquote>
</div>

The workflow comprises three steps: obtaining adequate translations (Section 2), identifying argument-encoding devices (Section 3), and, if necessary, choosing one equivalent per entry for the inclusion in the final dataset (Section 4). Section 5 contains guidelines for submitting the data for the project.

### 2. Obtaining the translations

The first step is to obtain **adequate** translations of the stimulus sentences (as found in the {{ questionnaire }}) into the target language. By default, translations must be elicited from native speakers. A given translation is considered adequate if and only if i) it sounds natural in the target language, and ii) its meaning is reasonably close to the meaning of the stimulus sentence.

It is essential that the translations correspond to stimulus sentences, not isolated verbs. For example, #7 in the database has a conventional tag “believe”, but the actual entry should be a sentence with the meaning like “P. believes M.” (where P. and M. are person names) rather than a lexical equivalent of the English verb *to believe* (e.g., in a sentence like “P. believes in ghosts”). Many stimulus sentences in the questionnaire are accompanied by context. In #101, the stimulus sentence is “P. shot at the bird”, and the right context is “He missed”. There is no need to translate the “he missed” part, but the translation obtained for the stimulus sentence should be compatible with a situation where the shot went wide.

If necessary, language contributors can slightly modify stimulus sentences (e.g., “one euro” in #100 can be substituted by a sum in the local currency, etc.). An intuitive rule of a thumb is that sentences can be modified as long as these modifications are not expected to affect argument encoding.

It is sometimes impossible to obtain an adequate translation of some of the stimulus sentences. If this is the case, language contributors are advised to leave a gap in the dataset and provide a brief comment (e.g., “the only translation of ‘memory depends on age’ was literally ‘elder people forget things’”). In sections 2.1-2.6, we discuss several frequently encountered complications and suggest how to deal with them.

#### 2.1. Problem: it is difficult to find an equivalent for an argument noun phrase. Remedy: use a different but semantically close noun phrase

For example, #50 in the questionnaire is “P. put on his trousers”. If your consultant finds it difficult to provide an equivalent for “trousers” (e.g., if trousers are not common in the target community), it is possible to use a sentence with a different type of garment (“shirt”, “poncho”, etc.). However, basic ontological properties of the nouns involved, such as, e.g., countability and animacy, as well as possible possessive relations between arguments must remain intact. For example, in #47 (“P. is waving a handkerchief”), the Y argument should be an alienable physical object (thus, “P. is waving his hand” should not be used). Similarly, in #33 (“P. knows M.”), inanimate Y-arguments (“P. knows maths / the answer” or the like) are disallowed.

#### 2.2. Problem: the target language lacks an equivalent verb and the relevant meaning is conveyed by a predicative expression of a different type. Remedy: include this equivalent in the data (and make a comment)

In many cases, there is no verb that corresponds to the predicative meaning of the stimulus sentence, and the translation contains a predicative expression of a different kind — a serial verb, a complex predicate (a combination of a verb-like and a noun-like element), a non-verbal predicate (e.g., an adjective), a noun-incorporating structure, etc. All these types of predicative expressions are allowed in the database (but make a comment on their structure). For example, translational equivalents of #116 “P. envies M.” can have syntactic structures that literally correspond to “P. is envious of M.” (non-verbal predicate) or “P. has envy of M.” (complex predicate). This is not an obstacle for the inclusion of the translation in the database.

#### 2.3. Problem: one or both of the two expected arguments (X and/or Y) cannot be overtly expressed. Remedy: no remedy, this sentence cannot qualify as an adequate translational equivalent

In some cases, it is possible to render the meaning of the predicate in the target language, but the sentence obtained sounds ungrammatical or unnatural if one tries to overtly express both arguments identified in the stimulus sentence. For example, in some languages it is possible to say, literally, “The log sank” or “P. was surprised” but not “The log sank in the water” or “P. was surprised at this gift”. Sentences with missing arguments are not adequate translational equivalents.

#### 2.4. Problem: in the target language, it is necessary to express some additional information. Remedy: add the necessary material (and make a comment)

In some cases, a certain semantic distinction that is not made in the stimulus sentence must be obligatorily made in the target language. For example, the choice of a translational equivalent for #27 “P. fried the fish” can depend on whether oil was used or whether the fish was fried on open fire, etc. Any translational equivalent that sounds natural can be chosen (make a comment that the meaning of the equivalent is narrower than that of the stimulus sentence).

In some other cases, it is necessary to add some overt material that is absent in the stimulus sentence. For example, in some languages the equivalent of #86 “P. dropped the glass” must contain an overtly expressed goal (e.g., “P. dropped the glass on the floor”). In principle, such additions are allowed (they should be accompanied by a comment). However, if the added material disrupts the direct syntactic relations between either argument (X or Y) and the predicative head, the translation cannot be included in the database. For example, if the closest translational equivalent of a stimulus sentence contains a complement clause (e.g., “P. dreams of buying a new car” or “P. believes what M. is saying” are the closest equivalents of #48 “P. dreams of a new car” or #7 “P. believes M.” respectively) this equivalent is not acceptable (leave a gap in the database and provide an explanation in a comment).

#### 2.5. Problem: it is not possible to obtain a semantically accurate translation. Remedy: no remedy, leave a gap in the database

In some cases, it is not possible to elicit any sentence that is semantically sufficiently close to the stimulus sentence. A frequent scenario is when the stimulus sentence is semantically more specialized than the translation(s) obtained from the native speakers. In many languages, this situation arose with stimuli such as #111 “be squeamish”, #126 “despise” or #129 “be fond” (the translations obtained have broader positive or negative meanings, such as “dislike”, “hate”, or “like”). In other cases, the target language simply lacks an abstract notion employed in the stimulus sentence (this is often the case with #30 “depend”, #35 “avoid”, and #64 “be different”). All these scenarios should result in gaps in the database. It is not advised to use unnatural or semantically imprecise translations.

#### 2.6. Problem: more than one adequate translation is available. Remedy: register all of them

If the consultant provides several adequate translations, the contributor is advised to register them all. In particular, this is relevant in case the variants elicited differ in terms of syntactic ranks of arguments (cf. “P. likes the shirt” vs. “This shirt pleases P.”). If two or more translations are structurally identical, the contributor can dispense with redundant glosses.

### 3. Identifying the devices employed for encoding the two pre-defined arguments (X and Y)

As a result of the first step, each questionnaire entry should be provided with one or several adequate translations into the target language (or else with a comment on the reasons why such translations were not obtained). The next step is to identify morphosyntactic devices that are employed for encoding the two arguments (X and Y). Note that X and Y are pre-defined in the questionnaire, so that in, e.g., “P. likes his shirt” “P.” is stipulated to be X, and “his shirt”, Y regardless of how X and Y happen to be expressed in the target language.

Argument-encoding devices include 1) flagging (dependent marking), such as cases and adpositions; 2) indexing (head marking), and 3) word order. Word order should be qualified as an argument-encoding device only if it is rigidly fixed for at least one of the two predefined arguments.

#### 3.1. X and Y should be clause-level dependents

Devices employed for encoding X and Y as arguments can be meaningfully identified only if both X and Y are expressed as clause-level noun phrases (that is, they are not embedded in some other constituents). This requirement is not met, e.g., when the equivalent of either X or Y is incorporated in the verb. Another frequently encountered complication is when one of the two pre-defined arguments is syntactically expressed as a modifier within another noun phrase, as in the following Lezgian example:


```

(1) Zi  ʁil-er-iqʰaj  [benzin-din	   ni-Ø] 	   qwe-zwa
    my  hand-PL-POEL  gasoline-GEN  smell-ABS  come-IMPF
    ‘My hands smell of gasoline’ (#67).

```

The pre-defined second argument (Y, “gasoline”) is syntactically expressed as an adnominal depend of *ni* “the smell”. In other words, there is no predicative expression in (1) that simultaneously assigns the postelative case to the X-argument (“hands”) and the genitive case to the Y-argument (“gasoline”). Thus, (1) is an adequate translation of the stimulus sentence #67, but it fails to meet the acceptance criteria (and is not classified as belonging to any valency class).

In other cases, though, verb+noun combinations can make their way into the dataset and can be analyzed as representing specific valency classes. This is possible if there is some language-specific evidence to the effect that these combinations function as unified predicative expressions. The French equivalent of #3 “to be afraid” is the case in point:


```

(2) Paul  a         	peur  de  ce  	chien
	P.	have.PRS.3SG  fear  of  this.M  dog(M)
	‘Paul is afraid of the dog’ (#3).

```

In many respects (the use of object pronouns, the lack of the article), *avoir peur* “to be afraid” (literally “to have fear”) behaves as a unified predicative expression rather than as a combination of a transitive verb and an object noun phrase. As a consequence, this expression is analyzed as belonging to the same valency class as simplex verbs that require their X-argument encoded as a subject noun phrase and their Y-argument as an oblique object introduced by the preposition *de*. Contributors are advised to provide a comment on the analytic decisions they make.

#### 3.2. Problem: the translation obtained does not contain enough information to identify the valency class. Remedy: elicit and analyze more data

In some cases, the translation of the stimulus sentence fails to display all the information that is needed for unambiguous identification of the valency class. For example, the nominal used in the translation can display a pattern of case syncretism that is not observed in some other nouns. In order to identify the argument encoding devices unambiguously, the contributor is advised to elicit additional sentences with the same predicative expression.

Another possible scenario is when the nature of the argument employed in the stimulus sentence triggers the use of a structure that violates the condition discussed in Section 3.1. For example, the equivalent of #2 “P. has the flu” can be headed by a specialized monovalent verb with the meaning “to have the flu”. In this case, the contributor is advised to try other names of diseases in order to check whether the target language possesses a productive bivalent construction that expresses the fact that a person suffers from a certain disease.

#### 3.3. Argument-encoding variation

In many cases, encoding of arguments in sentences headed by a given predicative expression displays some variation. In Russian, for example, transitive verbs (by definition) take accusative objects in a neutral environment, but under certain conditions, including negation, can combine with objects in the genitive case; many languages have specific case assignment rules in dependent clauses, etc.

This project focuses on lexically determined encoding frames; however, it is not always easy to tease apart lexically and grammatically determined patterns of argument encoding. The very choice of stimulus sentences reflects the lexical focus of the project: these sentences are, to the extent possible, neutral in terms of their grammar, viz. they contain episodic (rather than habitual) and real (rather than negated or hypothetical) situations; whenever possible arguments are highly individuated, partitive objects were not employed, all clauses were syntactically independent, etc.

It is thus expected that the observed valency-encoding devices are mainly determined by the use of a specific verb (or another predicative expression) with a specific lexical meaning. In case this expectation is not borne out, the investigator is encouraged to elicit additional information and eventually identify the lexically determined valency class of the specific verb (or another predicative expression).

If possible, it is recommended to distinguish between two types of variation.

1) In some cases, one and the same predicative expression displays a certain pattern of argument encoding variation that is not specific to the given expression but rather is conditioned by a broad grammatical rule. In such situations, it is advised to identify the basic encoding frame associated with the given predicative expression and disregard possible alternations. Out of the two grammatical Russian sentences, viz. *Petja vypil moloko* (ACC) “Petja drank the milk” and *Petja vypil moloka* (GEN) “Petja drank some milk”, the former should be prefered as the basic pattern associated with the transitive verb *vypit’* “to drink” (in the actual stimulus sentence #71, the left context, viz. “P. was given a glass of milk by his mother”, strongly favors the use of the accusative).

2) In other cases, argument encoding variation is characteristic of a specific lexical entry and is not conditioned by a broad grammatical rule. Thus, e.g., in the Russian equivalent of #3 “P. is afraid of the dog” the Y-argument (“the dog”) can also be encoded by either the accusative or the genitive case, which is a lexical peculiarity of the verb *bojat'sja* “to fear”. Variation of this kind should be mentioned in the filled questionnaire, even though eventually only one of the two variants makes its way into the final dataset (see Section 4).

#### 3.4. Valency class identification

In this project, the valency class of the predicative expression is defined as the unique combination of the devices employed for the encoding of the two pre-defined arguments, X and Y. Two predicative expressions are considered members of the same valency class if and only if the two predicative expressions require the same encoding devices for their respective X-arguments and Y-arguments. By contrast, if the device that is used for the encoding of the X-argument of one of the expressions coincides with the device that is used for the encoding of the Y-argument of another expression, and the other way round, the two predicative expressions are analyzed as belonging to two distinct classes (they can be labelled as, e.g., “NOM_DAT” and “DAT_NOM”, respectively).

### 4. Choosing the equivalent to be included in the dataset

As the result of the second step (see Section 3), each entry of the questionnaire should be accompanied by (an) adequate translation(s), and each adequate translation should be classified as belonging to a certain valency class based on the devices employed for the encoding of the two pre-defined arguments. If such identification is not possible (see Section 3.1), this should be mentioned in the filled questionnaire and the translation for the respective entry cannot make its way into the final dataset. The number of adequate translations normally varies between 0 and 2 or 3. Contributors are encouraged to comment on possible differences between adequate translations.

All adequate translations and their valency classes are represented in the filled questionnaire. However, most algorithms employed in this project require that each language-specific entry in the final dataset contains one specific predicative expression associated with one specific valency class (gaps are allowed, but multiple equivalents are not). As a consequence, in each case when there are more than one adequate translation the contributor should choose one basic translation for the inclusion in the final dataset, available online and prepared for statistical analysis. The following criteria should be used when choosing the basic equivalent. The criteria should be used in the order they appear here (thus, e.g., if the first criterion makes it possible to pick one of the equivalents, further criteria should not be taken into consideration).

#### 4.1. Naturalness

Preference should be given to the variant that is more natural for the target-language discourse. In particular, this criterion should be taken into account if the available equivalents differ in terms of syntactic hierarchy of arguments. For example, equivalents of #58 can be literally close to either *P. likes this shirt* or *This shirt pleases P.*, and equivalents of #60, to either *Walls surround the city* or *The city is surrounded by walls*. In many languages, both competing variants are grammatically correct, but if one of them is more natural for discourse it should be chosen as basic. Contributors are encouraged to use frequency data if they are available for the target language.

#### 4.2. Precision

If two or more translations are equally natural for the target language, preference should be given to a translation that corresponds more closely to the meaning of the stimulus sentence. For example, if there are two equivalents of #11 “P. encountered M. (accidentally, on the street)”, but one of them is neutral with respect to whether the encounter was planned or accidental, and the other one is inherently associated with accidental encounters, the latter should be chosen as basic.

#### 4.3. Verbhood (simplicity)

If two or more alternatives cannot be ranked based on the two previous criteria, equivalents headed by a simplex verb should be preferred over equivalents headed by a different predicative expression (complex verb, serial verb, adjective, etc.).

#### 4.4. Intransitivity

If there are two equivalents viewed as equal competitors after all the criteria in 4.1-4.3 have been applied, and one of them represents the transitive construction, while the other one is structurally different, the latter equivalent should be preferred.

#### 4.5. Random choice

If the criteria in 4.1-4.4 fail to give preference to one of the available equivalents, the choice of the translation equivalent is left to the contributor.

### 5. Submitting the data

Along with the filled questionnaire, contributors are kindly asked to provide a brief introduction (see Section 5.1). The filled questionnaire is basically the list of translations accompanied by glosses and back translations into English (or another contact language). For example, the Eastern Armenian equivalent of #30 is represented as follows:


```

(3) Hišoγut'yun-ə	tarik'-ic' ē        	kaxvac
	memory[NOM]-DEF  age-ABL	COP.PRS.3SG  dependent
	‘Memory depends on age’.

```

If no adequate translation has been obtained, there must be a comment with an explanation (“the consultant finds it difficult to render the relevant meaning in the target language”; “the only translation obtained lacked an overt noun phrase corresponding to the Y-argument of the questionnaire”, etc.). If more than one adequate translation is available, the one chosen as basic should go first (comments on criteria employed for choosing the basic variant are very welcome). The contributor should also make it clear how the translations are classified into valency classes; if some of the adequate translations cannot be classified as belonging to any specific valency class (see Section 3.1), this should be made explicit in a comment.

#### 5.1. The introductory section

The introductory section should contain information on how the data were collected as well as the relevant grammar facts for the target language.

The section on data collection should describe the way in which the translations were obtained: who were the consultants (it is also possible that the contributor also serves in the capacity of a native speaker) and/or whether some corpora were used, etc.

The section on the grammar of the target language should focus on the devices employed for argument encoding: case system, verb indices, etc. It is especially important to provide the relevant pieces of information if they do not follow from the glossed sentences (e.g., if word order functions as an argument-encoding device). For example, it is not always clear whether word order plays the role of an argument-encoding device. Similarly, the organization of verb indexing system is not always evident from the glossed sentences (for example, it is not always easy to distinguish between personal and impersonal constructions based on the sentences and their glosses alone because impersonal forms often bear default agreement markers and are not morphologically distinct from verb forms used in sentences with overt subjects).

The introductory section should also contain a list of abbreviations used for glossing.

#### 5.2. Glosses and back translations

Each translational equivalent should be interlinearized and back translated into English (or other contact language). By default, the back translation is identical with or at least very close to the stimulus sentence in the questionnaire, but minor deviations are possible (see Section 2). [Leipzig glossing rules](http://www.eva.mpg.de/lingua/resources/glossing-rules.php) must be used. The information contained in glossed sentences and in the introductory part should be sufficient for establishing the system of valency classes as understood by the contributor as well as for the unequivocal assignment of each predicative expression to a certain valency class.

## Abbreviations

3 — 3 person; ABL — ablative; ABS — absolutive; ACC — accusative; COP — copula; DEF — definite; GEN — genitive; IMPF — imperfect; M — masculine; NOM — nominative; PL — plural; POEL — postelative; PRS — present; SG — singular.

<script>
function toggleRussianCitation() {
    let button = document.getElementById('russian-citation-button'),
        div = document.getElementById('russian-citation-div');
    if (button.value === 'Show Russian citation') {
        div.style.display = 'block';
        button.value = 'Hide Russian citation';
    } else {
        div.style.display = 'none';
        button.value = 'Show Russian citation';
    }
}
</script>