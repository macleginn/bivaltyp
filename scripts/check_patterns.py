"""Check hand-crafted patterns.csv against the data collected from individual-language tables."""

import pandas as pd
from collect_language_data import COLNAMES_OUT_STRUCTURAL

language_meta = pd.read_csv('../data/languages.csv', sep='\t')
lang_name2no = {
    t.language: t.language_no for t in language_meta.itertuples()
}
lang_no2name = {
    t.language_no: t.language for t in language_meta.itertuples()
}

patterns = pd.read_csv('../data/patterns.csv', sep='\t')

collected_data = pd.read_csv('../data/data.csv', sep='\t')
published_languages = list(
    map(lambda lang_no: lang_no2name[lang_no],
        collected_data.language_no.unique()))
collected_data = collected_data[COLNAMES_OUT_STRUCTURAL]

structural_data = pd.read_csv('../data/data_structural.csv', sep='\t')
structural_languages = list(
    map(lambda lang_no: lang_no2name[lang_no],
        structural_data.language_no.unique()))

all_data = pd.concat([collected_data, structural_data])

out = open('patterns_check.log', 'w', encoding='utf-8')
for lang_name in published_languages + structural_languages:
    print(lang_name, file=out)
    clean = True
    for t in patterns[['predicate_no', 'predicate_label_en', lang_name]].itertuples():
        # print(t)
        expected = str(all_data.loc[
            (all_data.predicate_no == int(t.predicate_no)) &
            (all_data.language_no == int(lang_name2no[lang_name]))
        ].valency_pattern.values[0])
        found = str(t[3])
        if expected.strip() != found.strip():
            print(f'{t.predicate_label_en:20}langtables: {expected:15} patterns: {found}', file=out)
            clean = False
    if clean:
        print('Passed', file=out)
    print('', file=out)
out.close()
