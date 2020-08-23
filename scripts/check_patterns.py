"""Check hand-crafted patterns.csv against the data collected from individual-language tables."""

import pandas as pd

language_meta = pd.read_csv('../data/languages.csv', sep='\t', skiprows=[1])
lang_name2no = {
    t.language: t.language_no for t in language_meta.itertuples()
}
lang_no2name = {
    t.language_no: t.language for t in language_meta.itertuples()
}

patterns = pd.read_csv('../data/patterns.csv', sep='\t')
# print(patterns.columns)
# print(patterns.Andi_Zilo)
# import sys; sys.exit(0)

collected_data = pd.read_csv('../data/data.csv', sep='\t')
published_languages = list(
    map(lambda lang_no: lang_no2name[lang_no],
        collected_data.language_no.unique()))

for lang_name in published_languages:
    print(lang_name)
    clean = True
    for t in patterns[['predicate_no', 'predicate_label_en', lang_name]].itertuples():
        # print(t)
        expected = str(collected_data.loc[
            (collected_data.predicate_no == int(t.predicate_no)) &
            (collected_data.language_no == int(lang_name2no[lang_name]))
        ].valency_pattern.values[0])
        found = str(t[3])
        if expected.strip() != found.strip():
            print(f'{t.predicate_label_en:20}expected: {expected:15} found: {found}')
            clean = False
    if clean:
        print('Passed')
    print()
