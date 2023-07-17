# {{ language_external }}
Contributed by Alexander Rostovtsev-Popiel ([Academia.edu profile](https://uni-mainz.academia.edu/AlexPopiel))

![A.P.'s photo]({{ site_url_j }}/images/Rostovtsev-Popiel.jpg "A.P.'s photo")

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

The data were initially obtained in 2011 (and then revised in 2023) by Alexander Rostovtsev-Popiel in his capacity of an L2 speaker of Georgian, with a substantial assistance of a number of native speakers outside of academia who expressed no interest in being named.

## Grammar notes

### Basic clause structure and the transitive construction

Valency classes of Georgian verbs are primarily defined by their case frames. However, many Georgian verbs, including all transitive verbs, display the so-called “case shift”: a phenomenon whereby the case marking of arguments depends on the verb’s TAM form. Georgian TAM forms group into so-called “series”, where Series I is present/future, Series II is aorist/optative; and Series III is perfect/pluperfect. Case marking in verbs that undergo case shift is summarized in Table 1.

Table 1. Verbs with case shift: case marking in the three Series
 	Subject	Direct object	Indirect object
Series I: present/future	NOM	DAT	DAT
Series II: aorist/optative	ERG	NOM	DAT
Series III: perfect/pluperfect	DAT	NOM	OBL*
* OBL stands here for “oblique” and covers Benefactive andSociative (and Allative in some dialects).

For purposes of the dataset below, the verb is considered transitive if and only if displays case shift so that its X-argument is case-marked as the “Subject”, and its Y-argument is case-marked as the “Direct object” in Table 1. The valency-encoding devices for the two core arguments in transitive constructions are labeled as “ERG” and “NOM” correspondingly, even if the actual sentence happens to belong to Series I, where we observe no ergative case-marking (Series III forms are not found in the questionnaire below). For example, the equivalent of ‘plough’ (#66) in (2) is allotted to the same class as the equivalent of ‘take’ (#8) in (1), even though the two exemplar sentences display discrepant case frames.

(1) p'et're-m taro-dan c'ign-i a-Ø-i-γ-o
PN-ERG shelf-PSTP:INS.ABL book-NOM PRV:upward-DO3-VER:S-take-S3SG.PST
‘Petre took a book from the shelf.’

(2) p'et're-Ø q'ana-s Ø-xn-av-s
PN-NOM field-DAT DO3-plough-SM-S3SG
‘Petre is ploughing the field.’

Thus, the labels used in the annotation of transitive verbs correspond to the actual case frame in Series II (ERG, NOM). The same convention applies to case-shift verbs that do not meet the aforementioned transitivity criterion. For example, the equivalent of ‘look’ (#95) is labeled as an “ERG_DAT” verb, even though the actual questionnaire sentence in (3) belongs to Series I and displays a nominative subject (X argument).

(3) p'et're-Ø γrubl-eb-s Ø-u-q'ur-eb-s
PN-NOM cloud-PL-DAT IO3-VER:O-look_at-SM-S3SG
‘Petre is looking at the clouds.’

The distinction between verbs with and without case-shift is part of the traditional four-way classification of Georgian verbs that is based on the morphological and morphosyntactic properties, whereby verbs with case shift belong to Classes I and III, see Rostovtsev-Popiel (2016) for further details. The verbs in Class II, as in (4) display nominative subjects across all series, and the verbs in Class IV, as in (5), display dative subjects across all series.

(4) p'et're-Ø mašo-s Ø-e-p'irper-eb-a
PN-NOM PN-DAT IO3-VER:R-flatter-SM-S3SG.INACT
‘Petre is flattering Masho.’ (#45)

(5) p'etre-s grip'-i Ø-a-kv-s
PN-DAT flu-NOM IO3-VER:SUP-have-S3SG
‘Petre has the flu.’ (#2)

Note that the verbs in (3) and (4) belong to distinct valency classes as identified in this dataset, although the observed case marking patterns in the present-tense questionnaire sentences are identical.

In bivalent and trivalent verbs, up to two arguments can be cross-referenced on the verb overtly, by prefixal and suffixal markers; only arguments flagged by nominative, ergative and dative cases can be cross-referenced.

### Case system

There are seven basic grammatical cases: nominative, ergative, dative, genitive, instrumental, adverbal and vocative (the latter two cases are not used in the Georgian dataset below). Apart from the grammatical cases, there are around a dozen semantic cases, primarily coded by semi-detachable postpositional markers. Among these, ablative, illative, inessive, sociative, sublative, and superessive are found in the dataset. 

## References
Rostovtsev-Popiel, Alexander. 2016. Argumentstruktur und aspektuelle Komposition im Georgischen. Georgica 37: 35–51.


## Verb lemmas

Verbs are cited in the 3SG form of either Present or Future tense (as indicated in each case). Future forms are shown in case the Present tense form is not sufficiently informative with respect to the verb's meaning.

## Glossing abbreviations

ABL — ablative; ADJ — adjective; ANM — animate; ATTR — attributive; AUX - auxiliary; B — base; CAUS — causative; COP — copula; DAT — dative; DEM — demonstrative; DIST — distal; DO — direct object; ERG — ergative; FACT — factitive; FUT — future; GEN — genitive; ILL — illative; INACT — inactive; INANM — inanimate; INCH — inchoative; INESS — inessive; INS — instrumental; INTR — intransitive; IO — indirect object; NEG — negation; NOM — nominative; OBL — oblique; PN — person name; POSS — possessive; PRFX — prefix; PRIV — privative; PROX — proximal; PRS — present; PRV — preverb; PST — past; PSTP — postposition; PTCP — participle; REFL — reflexive; R.EXT — root extension; S — subject marker; SG — singular; SM — series marker; SOC — sociative; STAT — stative; SUBL — sublative; SUPERESS — superessive; TR — transitive; VER:N — neutral versionizer; VER:O — objective versionizer; VER:R — relative versionizer; PTC — participle; VER:S — subjective versionizer; VER:SUP — superessive versionizer.
