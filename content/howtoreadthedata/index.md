## How to read the data

### General
The dataset is based on a {{ questionnaire }} containing 130 {{ predicates }} given in context. In the questionnaire, two arguments are labelled as the first argument (X) and the second argument (Y), e.g., in ‘Peter is afraid of the dog’, ‘Peter’ is X, and ‘the dog’ is Y. Language-specific valency patterns are identified for individual predicates based on the ways in which X and Y are encoded in translations of stimulus sentences. The gaps in the data appear if no translation of the stimulus sentence has been obtained or if the translation does not meet the acceptance criteria (see below). Also see [instructions for contributors]{{ instructions_for_contributors }} for criteria for choosing the equivalent to be included in the datasetin case several translations are available.

### Acceptance criteria
In order to be included in the dataset, translations must meet the following criteria.

- Translations should be sufficiently precise semantically, at least as far as the meaning of the predicate in the stimulus sentence is concerned. For example, if the translation obtained for ‘P. is flattering M.’ actually means ‘P. praises M.’, this translation is not included.
- Translations should have a unified predicative expression in their core. Typically, this is a simplex verb, but this can also be a non-verbal predicate or a multi-word expression, such as a phrasal verb or a complex verb. Translations where the meaning of the predicate is distributed between elements that are structurally discontinuous are not included in the dataset. 
- X and Y should be expressed as noun phrases. Translations where one of the arguments is expressed by a clause or a verb phrase (e.g., lit. ‘Peter wants to buy a new mobile phone’ for the stimulus sentence ‘Peter wants a new mobile phone’) are not included in the dataset.
- X and Y should be expressed as two independent noun phrases. Translations where X and Y are expressed by a conjoined noun phrase (e.g., ‘The honey and the milk got mixed’) are not included in the dataset.
- X and Y should be expressed as clause-level constituents. Translations where one of the arguments is clearly adnominal are not included in the dataset (e.g., lit. ‘[Peter’s one euro] is lacking’ for the stimulus sentence ‘Peter lacks one euro’).

See [instructions for contributors]{{ instructions_for_contributors }} for more detail on the acceptance criteria.

### Datasetfields
The full dataset includes the following fields (explained below): predicate, verb, X, Y, locus, valency pattern, sentence, glosses, back translation and comments. You can browse or search the full dataset (all fields for each predicate in each language) in one [spreadsheet]{{ all_data }} or {{ download }} them. You can also explore the data by language (e.g., see how the 130 predicates are encoded in Modern Hebrew) or by predicate (e.g., see how ‘be afraid’ is encoded in the languages of the sample) and take an [overview]{{ patterns }} of the valency patterns — in the latter mode, the only field shown is the valency pattern for each predicate in each language.

### Predicate and Verb
“Predicate” is the tag for an entry in the questionnaire. Normally, it looks like an English verb (e.g. “resemble” or “wait”), but essentially, this is a comparative concept (e.g., “play#instrument” is the label for the predicate in ‘P. is playing the guitar’).

“Verb” here refers to a specific lexical expression in the target language. They are quoted differently in different languages, as described in sections on individual {{ languages }}. For some languages, verbs are quoted in the inflected form that is used in the translation of the stimulus sentence. For other languages, verbs are quoted in the standard dictionary form, such as, e.g., the infinitive, the 1SG present tense form, etc. In many cases, “Verbs” are actually non-verbal predicates or multi-word expressions, such as phrasal verbs or complex verbs, etc. If no acceptable expressions are obtained, this is signalled by an asterisk (“*”) in this field. 

### X, Y, and Valency pattern
The fields “X” and “Y” contain conventional tags for devices employed for encoding X and Y arguments. In languages with rich case systems, these tags normally coincide with capitalized abbreviations used in interlinear glosses (e.g., “NOM”, “GEN” or “ILLAT”). In languages with poor or no case systems but with clearly identified subjects, such as English, subjects are normally tagged as “SBJ”. Adpositions appear in tags in their language-specific form (e.g., “de” or “sur” in French). Diacritics, non-standard letters (such as ə), allomorphs and non-Latinate orthographies are disregarded (e.g., “uberACC” stands for the combination of the preposition *über* ‘above’ and the accusative case in German, and “izGEN” stands for the combination of the preposition *из* ‘from’ and the genitive case in Russian). Tags in the fields “X” and “Y” can be used for identifying patterns within languages, but not across languages. For example, “LOC” refers to a head-marking device in the Adyghe data, but this device is very different from the locative case in Latvian, also tagged “LOC”.

The fields “X” and “Y” contain asterisks (“*”) if no acceptable data are available for a given predicate in a given language.

“Valency pattern” is the main field of the dataset. It contains tags for language-specific valency classes. By default, these tags have the form of “X_Y”. For example, “DAT_NOM” is used as the tag for the Russian valency class where the X argument is encoded by the dative case (“DAT”), and the Y argument, by the nominative case (“NOM”). Note that this class is considered different from the “NOM_DAT” class, even though in the language-particular descriptions the two classes can be analyzed as a single class, because no a priori ranking of the X and Y arguments is at work. In each language, one class is identified as the transitive class, uniformly labeled “TR” (instead of the expected “NOM_ACC”, “ERG_ABS”, etc.). Language-specific properties of the transitive class are described in sections on individual {{ languages  }}. Phenomena such as differential object marking are disregarded as long as all verbs from a particular (e.g., transitive) class display identical alternations. The field “Valency pattern” contains “NA” or a blank if no acceptable data are available for a given predicate in a given language.

### Locus
Devices involved in encoding X and Y arguments in a given language-particular transitive pattern are considered “direct”. All other devices are considered “oblique”. The field “Locus” refers to whether the X and Y arguments are encoded by oblique devices. This tag has four values: TR, X, Y, and XY (plus “*” if no acceptable pattern has been obtained).

- “TR” stands for the transitive class.

- “Y” stands for patterns where the Y argument is encoded by an oblique device, and the X argument, by a direct device, such as, e.g., “ERG_DAT” or “ABS_DAT” patterns in languages with the ergative alignment of nominal case markers.

- “X” stands for patterns where the X argument is encoded by an oblique device, and the Y argument, by a direct device, such as e.g. the “DAT_NOM” pattern in Russian. Reversed transitive patterns, such as “ACC_NOM” in Udihe are conventionally tagged “X” in the “Locus” field.

- “XY” stands for patterns with two oblique devices, such as the “GEN_SUPER.LAT” pattern in Zilo Andi.

### Sentence, Glosses, Back translation and Comments
“Sentence” is the translation of the stimulus sentence into the target language, which is interlinearized in the “Glosses” field. Abbreviations used in glosses are languages-specific; they are explained on pages devoted to individual {{ languages }}. Notice that the information contained in the sentence and its glosses may be insufficient to unequivocally identify the valency class: sentences should be viewed as illustrations rather than as evidence.

“Back translation” is the maximally precise translation of the sentence back to English. This field is needed because occasionally sentences used for translation slightly diverged from the stimulus sentence in the questionnaire.

“Comments” are used for additional information; if no acceptable data are obtained for a certain predicate, the reasons for this are explained there.