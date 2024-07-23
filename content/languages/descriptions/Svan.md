# {{ language_external }}
Contributed by Alexander Rostovtsev-Popiel ([Academia.edu profile](https://uni-mainz.academia.edu/AlexPopiel))

![A.P.'s photo]({{ site_url_j }}/images/Rostovtsev-Popiel.jpg "A.P.'s photo")

The data were gathered in 2023. The language of elicitation was Georgian. The consultant is Cici Guledani (Lenǯeri, Upper Bal dialect).

## How to cite
> Rostovtsev-Popiel, Alexander. 2023. Bivalent patterns in {{ language_external }}. 
> In: Say, Sergey (ed.). BivalTyp: 
> Typological database of bivalent verbs and their encoding frames. 
> (Data first published on {{ initial_release_date }}; last revised on {{ last_release_date }}.) 
> (Available online at {{ site_url }}, Accessed on {{ today }})

## Basic info
- Coordinates: {{ coord_map_link }}.
- Genealogy (as given in [WALS](https://wals.info/)). Family: {{ family (WALS)}}, genus: {{ genus (WALS) }}.
- Macro-area: {{ macroarea }}.

## Grammar notes

### Basic clause structure and the transitive construction
Valency classes of Svan verbs are primarily defined by their case frames. However, many Svan verbs, including nearly all transitive verbs, display the so-called “case-shift”: a phenomenon whereby the case marking of arguments depends on the verb’s TAM form. Svan TAM forms group into so-called “series”, where Series I is present/future, Series II is aorist/optative; and Series III is perfect/pluperfect. Case marking in verbs that undergo case-shift is summarized in Table 1.

Table 1. Verbs with case-shift: case marking in the three series

| |Subject|Direct object|Indirect object|
|:----|:----|:----|:----|
|Series I: present/future|NOM|DAT|DAT|
|Series II: aorist/optative|ERG|NOM|DAT|
|Series III: perfect/pluperfect|DAT|NOM|OBL (i)|

(i) OBL stands here for “oblique” and covers Benefactive and Sociative.

For the purposes of the dataset below, the verb is considered transitive if and only if it displays case-shift so that its X-argument is case-marked as the “Subject”, and its Y-argument is case-marked as the “Direct object” in Table 1. The valency-encoding devices for the two core arguments in transitive constructions are labeled as “ERG” and “NOM” respectively, even if the actual sentence happens to belong to Series I, where we observe no ergative case-marking (Series III forms are not found in the questionnaire below). For example, the equivalent of ‘plough’ (#66) in (2) is allotted to the same class as the equivalent of ‘take’ (#8) in (1), even though the two exemplar sentences display discrepant case frames.

```

(1)  maizer-d  taro-xen   lǝir-Ø    än-Ø-k'id
     PN-ERG    shelf-ABL  book-NOM  PRV:PROX-DO3-take
     ‘Maizer took a book from the shelf.’

(2)  maizer-Ø  dab-s      Ø-a-qn-i
     PN-NOM    field-DAT  DO3-FACT-plough-PRS
     ‘Maizer is ploughing the field.’

```

Thus, the labels used in the annotation of transitive verbs correspond to the actual case frame in Series II (ERG, NOM). The same convention applies to case-shift verbs that do not meet the aforementioned transitivity criterion. For example, the equivalent of ‘obey’ (#92) is labeled as an “ERG_DAT” verb, even though the actual questionnaire sentence in (3) belongs to Series I and displays a nominative subject (X argument).

```

(3)  maizer-Ø  dede-s      čiγad   x-o-ǯräw-i
     PN-NOM    mother-DAT  always  IO3-VER:O-obey-PRS
     ‘Maizer obeys (his) mother.’

```

The distinction between verbs with and without case-shift is part of the traditional four-way classification of Georgian verbs that is based on the morphological and morphosyntactic properties, whereby verbs with case-shift belong to Classes I and III, see [Rostovtsev-Popiel (2016)](https://bivaltyp.info/docs/Rostovtsev_Popiel_2016_Argumentstruktur.pdf) for further details (on Georgian) and Rostovtsev-Popiel 2023 (on Mingrelian). The verbs in Class II, as in (4), display nominative subjects across all series, and the verbs in Class IV, as in (5), display dative subjects across all series.

```

(4)  maizer-Ø  lile-s  x-e-lmes-ieːl
     PN-NOM    PN-DAT  IO3-VER:R-praise-VPL
     ‘Maizer flatters Lile.’

(5)  maizer-s  grip'-Ø  x-aː-r
     PN-DAT    flu-NOM  IO3-VER:SUP-have
     ‘Maizer has the flu.’ (#2)

```

Note that the verbs in (2), (3) and (4) belong to distinct valency classes as identified in this dataset, although the observed case marking patterns in the present-tense questionnaire sentences are identical. In bivalent and trivalent verbs, up to two arguments can be cross-referenced on the verb overtly, by prefixal and suffixal markers; only arguments flagged by nominative, ergative and dative cases can be cross-referenced.

### Case system
There are seven basic grammatical cases: nominative, ergative, dative, genitive, instrumental, adverbial, and benefactive. Apart from the grammatical cases, there are around a dozen semantic cases, primarily coded by semi-detachable postpositional markers. Among these, ablative, elative, inessive, sociative, sublative, and superessive are found in the dataset.

## References
Rostovtsev-Popiel, Alexander. 2016. Argumentstruktur und aspektuelle Komposition im Georgischen. Georgica 37: 35–51.
Rostovtsev-Popiel, Alexander. 2023. Case-Shift on Megrelian Adverbs, in: Chumakina, Marina, Kaye, Steven, and Oliver Bond (eds.). Agreement beyond the Verb: Unusual Targets, Unexpected Domains. Oxford University Press: 264–305.

## Verb lemmas
Verbs are cited in the 3SG form of either Present or Future tense (as indicated in each instance). Future forms are shown in case the Present tense form is not sufficiently informative with respect to the verb's lexical semantics.

## Glossing abbreviations
ABL — ablative; ALL – allative; AUG – augment; BEN – benefactive; DAT — dative; DEM — demonstrative; DIST — distal; DO — direct object; EL – elative; ERG — ergative; FACT — factitive; FUT — future; GEN — genitive; INCL – inclusive; INESS — inessive; INS — instrumental; INTR — intransitive; IO — indirect object; NEG — negation; NOM — nominative; OBL — oblique; PN — person name; POSS — possessive; POT – potential; PROX — proximal; PRS — present; PRV — preverb; PST — past; S — subject marker; SG — singular; SOC — sociative; SUBL — sublative; SUPERESS — superessive; TR — transitive; VER:O — objective versionizer; VER:R — relative versionizer; VER:S — subjective versionizer; VER:SUP — superessive versionizer; VPL – verbal pluralizer.
