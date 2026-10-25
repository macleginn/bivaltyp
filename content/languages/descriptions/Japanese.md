# {{ language_external }}
Contributed by Yukari Konuma and [Artemii Kuznetsov](https://www.ames.ox.ac.uk/people/artemii-kuznetsov)

![A.K.'s photo]({{ site_url_j }}/images/Kuznetsov.JPG "A.K.'s photo")

The Japanese data were initially provided and analyzed by Yukari Konuma in her capacity as a native speaker in 2011. The Russian version of the questionnaire was used at this stage. In 2026, the dataset was significantly reannotated based on Artemii Kuznetsov’s input, including corpus evidence, elicitation from native speakers, etc. The English version of the questionnaire was used at this stage. 

The data are presented in modified Hepburn romanisation. Long vowels are marked with a macron (*Tarō*, *kōkan*), except for long *i* in native words, which is written *ii* (*utsukushii*). Morpheme boundaries within verbal and adjectival forms are marked by hyphens.

## How to cite
> Konuma, Yukari & Artemii Kuznetsov. 2026. Bivalent patterns in {{ language_external}}. 
> In: Say, Sergey (ed.). BivalTyp: Typological database of bivalent verbs and their encoding frames. 
> (Data first published on {{ initial_release_date }}; 
> last revised on {{ last_release_date }}.) (Available online at {{ site_url }}, 
> Accessed on {{ today }}.)

## Basic info
- Coordinates: {{ coord_map_link }}.
- Genealogy (as given in [WALS](https://wals.info/)). Family: {{ family_WALS }}, genus: {{ genus_WALS }}.
- Macro-area: {{ macroarea }}.

## Grammar notes

### Basic clause structure and the transitive construction

Japanese is a verb-final language with dependent marking. Grammatical relations are expressed by postpositional particles (case markers), and the verb does not index its arguments. In the basic transitive construction, the A-argument is marked by the nominative *ga* and the P-argument by the accusative *o*, as in (1).

```
(1)  Tarō  ga   ishi   o    nage-ta
     PN    NOM  stone  ACC  throw-PST
     ‘Tarō threw a stone.’

```

The main difficulty in identifying valency patterns in Japanese comes from the topic marker *wa*. A topicalised argument that would otherwise be marked by *ga* or *o* loses its case marker and is marked by *wa* alone, as in (2). Other case markers may be retained and combine with *wa*, as in (3).

```
(2)  Tarō  wa   ringo  o    tabe-ta
     PN    TOP  apple  ACC  eat-PST
     ‘Tarō ate an apple.’

(3)  Tarō  ni   wa   furansu-go       ga   wakar-u
     PN    DAT  TOP  France-language  NOM  understand-NPST
     ‘Tarō understands French.’

```

The most natural rendering of most questionnaire sentences topicalises the X-argument. As a result, a single example does not always show how the verb would encode its arguments in a neutral context. The valency patterns in the database reflect this neutral, non-topicalised encoding rather than the surface form of the example cited.

For most verbs the neutral encoding is easy to establish. It is less clear for predicates that take two non-oblique arguments, mostly experiential verbs and adjectives, e.g. *kowai* ‘be afraid’ (#3), *suki da* ‘love’ (#46) and *kikoeru* ‘hear’ (#93). In neutral contexts these predicates occur in double-nominative (*ga … ga*) or dative-nominative (*ni … ga*) constructions.

For these cases we ran a questionnaire survey with 15 native speakers. Each clause in question was embedded in a relative clause, a context that disallows the topic marker, and speakers chose between the possible encodings. Further doubtful cases, where competing constructions exist, were checked against the Balanced Corpus of Contemporary Written Japanese (BCCWJ; Maekawa et al. 2014). The survey results and corpus counts are summarised in the database-internal comments to the relevant items.

To determine which argument is the subject, we used exaltation, i.e. the ability of an argument to control honorific and humble forms of the predicate. This is a standard subjecthood diagnostic for Japanese (Shibatani 1990). We use “exaltation” as an umbrella term for both honorification and humility. In the labels of valency patterns, (EXALT) and (NO.EXALT) indicate whether an argument does or does not control exaltation. For example:

•	In NOM_NOM(NO.EXALT) (#3), both arguments are in the nominative, but only X behaves as a subject.

•	In DAT(EXALT)\_NOM(NO.EXALT) (#93), the dative experiencer is the subject.

•	In NOM(NO.EXALT)\_NOM (#1), the subject is the nominative Y.

Only the NOM\_ACC pattern is classified as transitive (TR).

### Case system

Case is marked by enclitic postpositional particles. Ten cases are distinguished:

•	nominative *ga*

•	accusative *o*

•	dative *ni*

•	genitive *no* (adnominal only)

•	instrumental *de*

•	comitative *to*

•	ablative *kara*

•	allative *e*

•	terminative *made*

•	comparative *yori*

The particle *to* also introduces quotations, hence the label QUOT (#51). The topic marker *wa* and the focal particle *mo* are not treated as cases. The complex marker *N no koto o* ‘the matter of N’ is treated as a separate encoding device (pattern NOM\_no.koto.o, #25).

## Verb lemmas

Verbs and adjectives are cited in their dictionary (non-past affirmative) form, adjectival nouns with the copula *da*, and verbal nouns with the light verb *suru*.

## References

Maekawa, Kikuo, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka & Yasuharu Den. 2014. Balanced corpus of contemporary written Japanese. Language Resources and Evaluation 48(2). 345–371.

Shibatani, Masayoshi. 1990. The languages of Japan. Cambridge: Cambridge University Press.

## Glossing abbreviations

ABL — ablative; ACC — accusative; ADV — adverbial; AUX — auxiliary; CAUS — causative; COM — comitative; COP — copula; CVB — converb; DAT — dative; GEN — genitive; HON — honorific; HOR — hortative; IMPFV — imperfective; INS — instrumental; NEG — negative; NMLZ — nominaliser; NOM — nominative; NPST — non-past; PASS — passive; PL — plural; PN — person name; PST — past; QUOT — quotative; SG — singular; TOP — topic; VBZ — verbalizer.
