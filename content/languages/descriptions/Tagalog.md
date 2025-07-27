# {{ language_external }}
Contributed by [Rowena Garcia](https://rgarcia.owlstown.net) and Rhenee Espayos ([ResearchGate profile](https://www.researchgate.net/profile/Rhenee-Espayos))

![R.G.'s photo]({{ site_url_j }}/images/Garcia.jpg "R.G.'s photo")
![R.E.'s photo]({{ site_url_j }}/images/Espayos.jpg "R.E.'s photo")

The English version of the questionnaire was used for elicitation. The identification of valency encoding devices and valency classes is primarily based on the system proposed by Sergei Klimenko (2019), which might deviate from the analytic decisions used elsewhere. Sergei Klimenko's generous assistance with the data analysis is gratefully acknowledged.

> Klimenko, Sergei (2019). Criteria for establishing the inventory of semantic participants and voices in Tagalog. *Studies in language* 43(1). 1-43.

## How to cite
> Garcia, Rowena & Rhenee Espayos. 2023. Bivalent patterns in {{ language_external }}. 
> In: Say, Sergey (ed.). BivalTyp: 
> Typological database of bivalent verbs and their encoding frames. 
> (Data first published on {{ initial_release_date }}; last revised on {{ last_release_date }}.) 
> (Available online at {{ site_url }}, Accessed on {{ today }})

## Basic info
- Coordinates: {{ coord_map_link }}.
- Genealogy (as given in [WALS](https://wals.info/)). Family: {{ family_WALS}}, genus: {{ genus_WALS }}.
- Macro-area: {{ macroarea }}.

## Grammar notes
The Tagalog argument marking system is notoriously complex, posing challenges for clear description and giving rise to numerous, often conflicting, theoretical interpretations. The analysis presented below follows the system proposed in Klimenko (2019).

In Tagalog, core nominals are typically marked by preposed functional elements, referred to here as “case markers” for simplicity. These markers cumulatively express number, so-called “case”, and the distinction between common and personal nouns. Tables 1 and 2 present the paradigms of case markers for common and personal nouns, respectively. The column labels in Tables 1 and 2 are also used in the interlinear glosses below.

Table 1. Case markers in common nouns

<div class="before-table"></div>

 SUBJ	GEN	DAT
SG	ang, ‘yung (iyong)	ng, nu’ng (niyong)	sa
PL	ang mgá, ‘yung mgá, (iyong mgá)	ng mgá, nu’ng mgá (niyong mgá)	sa mgá

Table 2. Case markers in person nouns

<div class="before-table"></div>

	PERS.SUBJ	PERS.GEN	PERS.DAT
SG	si	ni	kay
PL	sina	nina	kina

The variation between forms shown within individual cells in Table 1 is not relevant to the discussion of basic clause syntax or valency classes in Tagalog.

The most typologically unusual, challenging, and widely discussed feature of Tagalog syntax is the system of so-called Philippine-style voice. Each Tagalog verb can appear in several constructions that differ in verb morphology and the case markers used on nominal arguments. Semantically, voice contrasts reflect differences in information structure, definiteness, and related factors. What makes this system truly striking is that none of the voice constructions can be unequivocally considered the basic one. To illustrate, examples (1) and (2) show two voice constructions with the same verb, ‘throw’.

(1) nag-hagis Pedro ng bato
AV.PFV-throw PERS.SUBJ PN GEN stone
‘Pedro threw a stone.’

(2) h<in>agis ni Pedro ang bato
<PV>PFV.throw PERS.GEN PN SUBJ stone
‘Pedro threw a stone.’

In (1), the actor (the person who threw the stone) is marked by the SUBJ case marker, and the undergoer (the object thrown) by the GEN marker. In (2), this mapping is reversed: the undergoer takes the SUBJ marker, and the actor is marked by GEN. Both constructions feature overt voice morphology. The pattern in (1) is known as “actor voice” (AV), as the actor is marked by SUBJ; (2) shows the “patient voice” (PV), where the undergoer receives SUBJ marking. The availability of both patterns, as in (1) and (2), is a hallmark of verbs like ‘kill’ and defines the transitive verb class in Tagalog.
The main challenge the Tagalog voice system poses for the BivalTyp database is that, unlike most familiar Eurasian languages, the syntactic argument set cannot be reliably identified from a single translation of a questionnaire sentence. As examples (1) and (2) show, the GEN-marked argument may represent either the actor or the undergoer. Since the database requires assigning a syntactic set to each verb-specific argument, we introduced rules for inferring these sets from observed patterns. The three most important mappings—used to identify argument sets labeled “ACT,” “UND,” and “LOC”—are outlined below.

i. ACT is the argument that is encoded by the SUBJ marker in the AV construction, and by the GEN marker otherwise.

ii. UND is the argument that is encoded by the SUBJ marker in the PV construction (and by the GEN/DAT otherwise, but this is not a sufficient condition).

iii. LOC is the argument that is encoded by the SUBJ marker in the LV construction (and by the DAT otherwise; the fact that an argument is encoded by DAT in the PV construction is a sufficient condition to treat it as LOC).

The mapping in (i) has been sufficiently illustrated by examples (1) and (2). Mapping (ii) is more complex: in voices other than PV, undergoers (“UND”) can be marked not only by GEN, as in (1), but also by DAT, as shown in (3), which corresponds to questionnaire sentence #28. 

(3) nag-hi~hintay si Pedro kay Miguel
AV-IPFV~wait PERS.SUBJ PN PERS.DAT PN
‘Pedro is waiting for Miguel.’

The choice between GEN and DAT marking of the undergoer (UND) in the AV construction, as in (1) and (3), follows complex rules where humanness is crucial, though other factors apply. Thus, the SUBJ + DAT pattern in AV, unlike SUBJ + GEN, is not fully diagnostic: it can indicate a transitive verb, as in (3), or reflect lexically determined DAT marking that never co-occurs with GEN in AV, as in (4).

(4) <um>i~iwas si Pedro kay Miguel
<AV>IPFV~avoid PERS.SUBJ PN PERS.DAT PN
‘Pedro avoids Miguel.’

The second argument in (4)—the person or object avoided—cannot be classified as “UND” since it does not vary with GEN coding in the AV construction nor appear as SUBJ in the PV construction. Following mapping (iii), it is classified as LOC because it is obligatorily marked by DAT in the AV construction, as in (4), and by SUBJ in the locative voice, as shown in (5). 

(5) <In>i~iwas-an ni Pedro si Miguel
<PV>IPFV~avoid-LV PERS.GEN PN PERS.SUBJ PN
‘Pedro avoids Miguel.’

In short, unlike most languages in the sample, correctly identifying a verb’s lexical valency pattern requires comparing multiple voice constructions of that verb and determining its argument sets using criteria like those in i)–iii).

Besides the three argument sets (ACT, UND, LOC) and voices (AV, PV, LV) discussed, two additional sets are relevant here: CAUSE and PATH. Arguments in the CAUSE set may be marked by DAT markers like UND and LOC, but can also appear with explicit causal markers or as subjects in the causal voice (CV). Similarly, PATH arguments can be expressed by i) regular DAT markers (example #21 below ), ii) specialized path markers (see comment to example #74 below), or iii) as subjects in the path voice construction (PathV), also see example #74.

The voice alternations discussed so far apply only to true verbs. Non-verbal predicates do not alternate voices and thus require a special SBJNV set for arguments consistently marked by SUBJ case markers, as shown in examples #73, #119, and others below.

Beyond the sets discussed, the Tagalog valency class system includes further nuances, briefly noted in comments on individual examples below.

As in other languages in the sample, a verb’s valency class is identified by the ordered combination of sets for its X and Y arguments—for example, “ACT_LOC” in #7 indicates the X argument is from the ACT set and the Y argument from the LOC set. As noted earlier, the label “TR” for transitive verbs applies when the X argument is ACT and the Y argument is UND.

This analysis treats Tagalog as having three distinct nominal cases—SUBJ, GEN, and DAT—though this remains a debated issue in Tagalog grammar.

## Verb lemmas

Verbs are cited by their standard infinitive-like dictionary citation forms

## Glossing abbreviations

ADJ — adjective; AV — actor voice; CAUS — causative; COM — comitative; CV — causal voice; DAT — dative; EX — exclusive; EXIST — existential; GEN — genitive; IPFV — imperfective; LIN — linker; LV — locative voice; MAN — voice marker "man"; MOD — modal; NOM — nominative; PathV — path voice; PERS — personal; PFV — perfective; PL — plural; PN — person name; POT — potential; PRX — proximate; PV — patient voice; SG — singular; SOC — sociative; STAT — stative; STEM — stative; SUBJ — subject.
